// Module Dependencies
const express = require('express') // update sass
// work please. what doesn't the node-sass load on heroku
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use(serveStatic(path.join(__dirname, 'dist')))
// app.use(serveStatic(path.join(__dirname, 'sass')))
const port = process.env.PORT || 80
app.listen(port)
