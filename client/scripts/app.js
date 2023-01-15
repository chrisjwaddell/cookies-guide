const elCookieValue = document.querySelector('.cookievalue')

const showCookieValue = () => elCookieValue.textContent = document.cookie.split(';').reduce((acc, cv) => `${acc.trim()};\n${cv.trim()}`)


const TOC = [
	{
		name: 'Basic Cookie 1',
		filename: '01-basic-cookie-1.html',
	},
	{
		name: 'Basic Cookie 2',
		filename: '02-basic-cookie-2.html',
	},
	{
		name: 'Uses of Cookies',
		filename: '03-uses.html',
	},
	{
		name: 'Reading Cookies',
		filename: '04-reading-cookies.html',
	},
	{
		name: 'The Cookie header and requests',
		filename: '05-the-cookie-header.html',
	},
	{
		name: 'Sending cookies to a server',
		filename: '06-send-cookie-to-server.html',
	},
	{
		name: 'Attributes - expires and max-age',
		filename: '07-cookie-expiry.html',
	},
	{
		name: 'Attributes - domain',
		filename: '08-cookie-domain.html',
	},
	{
		name: 'Attributes - path',
		filename: '09-path.html',
	},
	{
		name: 'Attributes - httpOnly',
		filename: '10-httponly.html',
	},
	{
		name: 'Attributes - samesite',
		filename: '11-samesite.html',
	},
	{
		name: 'Attributes - secure',
		filename: '12-secure.html',
	},
	{
		name: 'Some code funcions for cookies',
		filename: '13-code.html',
	},
	{
		name: 'Using <script> to create a cookie',
		filename: '14-script-cookie.html',
	},

]


/* ******************************************************************************
// ^DOM
 ****************************************************************************** */


function appendChild(el, child) {
	return el.appendChild(child);
}

function createElementAtt(parent, element, cls, att, text) {
	const el = document.createElement(element)
	// debugger

	if (text) {
		el.textContent = text;
	}

	cls.forEach((item) => {
		el.classList.add(item)
	})

	att.forEach((i) => {
		el.setAttribute(i[0], i[1])
	})

	return (parent && appendChild(parent, el)) || el;
}



function createSidebar(filename) {
	const elUL = document.querySelector('sidebar ul')

	// const i = 0
	let fileIndexSelected = 0
	TOC.forEach((menuitem, i) => {
		const elLi = createElementAtt(elUL, 'li', [], [], '')
		const classes = ['link']

		if (filename === menuitem.filename) {
			classes.push('selected')
			fileIndexSelected = i
		}
		createElementAtt(elLi, 'a', classes, [
			['href', menuitem.filename],
		], menuitem.name)
	})

	const elNext = document.querySelector('.next a')
	const nextSection = TOC.findIndex((menuItem) => menuItem.filename === filename)
	console.log(nextSection)
	if (fileIndexSelected < TOC.length - 1) elNext.setAttribute('href', TOC[fileIndexSelected + 1].filename)
}



document.addEventListener('DOMContentLoaded', () => {
	const {
		pathname,
	} = new URL(window.location)
	const currentFile = pathname.split('/')[pathname.split('/').length - 1]

	createSidebar(currentFile)

	showCookieValue()
})

const elCreateCookie = document.querySelectorAll('#btnCreateCookie');

document.addEventListener('visibilitychange', function() {
	if (document.visibilityState === 'visible') {
		showCookieValue()
	}
});
