const express = require('express')

require('./connections')

console.log('starting server...')

const app = express()

app.listen(3202, () => console.log('server listen'))