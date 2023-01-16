const express = require('express')


const router = express.Router()


router.get('/sendcookie', (req, res) => {
	console.log(req.headers.cookie)
	// console.log(req.cookie)

	// res.set('Set-Cookie', 'from=server');

	res.set('Access-Control-Allow-Origin', req.headers.origin); // req.headers.origin
	res.set('Access-Control-Allow-Credentials', 'true');
	// access-control-expose-headers allows JS in the browser to see headers other than the default 7
	res.set(
		'Access-Control-Expose-Headers',
		'date, etag, access-control-allow-origin, access-control-allow-credentials',
	);

	// res.status(200).send(`Cookie received on the server. Cook value was ${req.cookie}`)
	res.send({
		message: `Cookie received on the server. Cookie value was ${req.headers.cookie}`,
	})
	// res.send('Cookie received on the server.')
})



router.get('/client/sendcookie', (req, res) => {
	console.log(req.headers.cookie)
	// console.log(req.cookie)

	// res.set('Set-Cookie', 'from=server');

	res.set('Access-Control-Allow-Origin', req.headers.origin); // req.headers.origin
	res.set('Access-Control-Allow-Credentials', 'true');
	// access-control-expose-headers allows JS in the browser to see headers other than the default 7
	res.set(
		'Access-Control-Expose-Headers',
		'date, etag, access-control-allow-origin, access-control-allow-credentials',
	);

	// res.status(200).send(`Cookie received on the server. Cook value was ${req.cookie}`)
	res.send({
		message: `Cookie received on the server. Cookie value was ${req.headers.cookie}`,
	})
	// res.send('Cookie received on the server.')
})


// I don't think you can send multiple cookies in 'Set-Cookie' so I'm doing 4 requests in one button click.
router.get('/receivecookies1', (req, res) => {
	console.log('receivecookies')

	res.set('Access-Control-Allow-Origin', req.headers.origin); // req.headers.origin
	res.set('Access-Control-Allow-Credentials', 'true');
	// access-control-expose-headers allows JS in the browser to see headers other than the default 7
	res.set(
		'Access-Control-Expose-Headers',
		'date, etag, access-control-allow-origin, access-control-allow-credentials',
	);


	res.set('Set-Cookie', 'from_server_root=root; path=/;')
	// res.set('Set-Cookie', 'from_server_client=client; path=/client')
	// res.set('Set-Cookie', 'from_server_subdir1=subdir1; path=/client/subdir1;')
	// res.set('Set-Cookie', 'from_server_subdir2=subdir2 path=/client/subdir2;')


	res.send({
		message: 'Cookie 1 sent back to the browser.',
	})
})

router.get('/receivecookies2', (req, res) => {
	console.log('receivecookies')

	res.set('Access-Control-Allow-Origin', req.headers.origin); // req.headers.origin
	res.set('Access-Control-Allow-Credentials', 'true');
	// access-control-expose-headers allows JS in the browser to see headers other than the default 7
	res.set(
		'Access-Control-Expose-Headers',
		'date, etag, access-control-allow-origin, access-control-allow-credentials',
	);


	// res.set('Set-Cookie', 'from_server_root=root; path=/;')
	res.set('Set-Cookie', 'from_server_client=client; path=/client')
	// res.set('Set-Cookie', 'from_server_subdir1=subdir1; path=/client/subdir1;')
	// res.set('Set-Cookie', 'from_server_subdir2=subdir2 path=/client/subdir2;')


	res.send({
		message: 'Cookie 2 sent back to the browser.',
	})
})

router.get('/receivecookies3', (req, res) => {
	console.log('receivecookies')

	res.set('Access-Control-Allow-Origin', req.headers.origin); // req.headers.origin
	res.set('Access-Control-Allow-Credentials', 'true');
	// access-control-expose-headers allows JS in the browser to see headers other than the default 7
	res.set(
		'Access-Control-Expose-Headers',
		'date, etag, access-control-allow-origin, access-control-allow-credentials',
	);


	// res.set('Set-Cookie', 'from_server_root=root; path=/;')
	// res.set('Set-Cookie', 'from_server_client=client; path=/client')
	res.set('Set-Cookie', 'from_server_subdir1=subdir1; path=/client/subdir1;')
	// res.set('Set-Cookie', 'from_server_subdir2=subdir2 path=/client/subdir2;')


	res.send({
		message: 'Cookie 3 sent back to the browser.',
	})
})


router.get('/receivecookies4', (req, res) => {
	console.log('receivecookies')

	res.set('Access-Control-Allow-Origin', req.headers.origin); // req.headers.origin
	res.set('Access-Control-Allow-Credentials', 'true');
	// access-control-expose-headers allows JS in the browser to see headers other than the default 7
	res.set(
		'Access-Control-Expose-Headers',
		'date, etag, access-control-allow-origin, access-control-allow-credentials',
	);


	// res.set('Set-Cookie', 'from_server_root=root; path=/;')
	// res.set('Set-Cookie', 'from_server_client=client; path=/client')
	// res.set('Set-Cookie', 'from_server_subdir1=subdir1; path=/client/subdir1;')
	res.set('Set-Cookie', 'from_server_subdir2=subdir2; path=/client/subdir2;')


	res.send({
		message: 'Cookie 4 sent back to the browser.',
	})
})




router.get('/httponly', (req, res) => {
	console.log('httponly')

	res.set('Access-Control-Allow-Origin', req.headers.origin); // req.headers.origin
	res.set('Access-Control-Allow-Credentials', 'true');
	// access-control-expose-headers allows JS in the browser to see headers other than the default 7
	res.set(
		'Access-Control-Expose-Headers',
		'date, etag, access-control-allow-origin, access-control-allow-credentials',
	);


	// res.set('Set-Cookie', 'from_server_root=root; path=/;')
	// res.set('Set-Cookie', 'from_server_client=client; path=/client')
	// res.set('Set-Cookie', 'from_server_subdir1=subdir1; path=/client/subdir1;')
	res.set('Set-Cookie', 'httponly_cookie=httponly; httpOnly;')

	res.send({
		message: 'httponly Cookie sent back to the browser.',
	})
})


router.get('/token', (req, res) => {
	res.set('Set-Cookie', 'from_script=script; path=/;')
	res.send('')
})


module.exports = router;
