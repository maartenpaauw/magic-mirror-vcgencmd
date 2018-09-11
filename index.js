const express = require('express')
const exec = require('child_process').exec

const app = express()

app.get('/api/v1/magic-mirror/display', function (req, res) {
    exec('vcgencmd display_power', (error, stdout, stderr) => {
        res.send(stdout.split('=')[1])
    })
})

app.post('/api/v1/magic-mirror/display-off', (req, res) => {
    exec('vcgencmd display_power 0', (error, stdout, stderr) => {
        res.send(stdout)
    })
})

app.post('/api/v1/magic-mirror/display-on', (req, res) => {
    exec('vcgencmd display_power 1', (error, stdout, stderr) => {
        res.send(stdout)
    })
})

app.listen(3000)
