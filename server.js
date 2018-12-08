// server.js

const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hello World from a Node.js app! Welcome to Meows world')
	res.status(200).json({status: 'ok'})
})

app.listen(3000, () => {
	console.log('Server is up on 3000')
})
