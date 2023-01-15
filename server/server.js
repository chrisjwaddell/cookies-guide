const express = require('express')
const cors = require('cors');

const PORT = 25051

const app = express()
const cookieRoutes = require('./routes/cookies')

// app.use(cors({
// 	origin: 'http://localhost:8055',
// 	credentials: true,
// }))



app.use(cookieRoutes)



app.listen(PORT, () => console.log(`Cookie server listening on port ${PORT}`))
