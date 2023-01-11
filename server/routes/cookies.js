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


module.exports = router;
