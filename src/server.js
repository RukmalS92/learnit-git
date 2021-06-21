const express = require('express')

require('./connections')

const app = express()

app.listen(3202, () => console.log('server listen'))