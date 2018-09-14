const express = require('express')
const bodyParser = require('body-parser')
const { exec } = require('child_process')

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))

const command = 'vcgencmd display_power'

app.get('/api/v1/magic-mirror/display', (req, res) => {
    exec(command, (error, stdout, stderr) => {
        res.send(parseResult(stdout))
    })
})

app.post('/api/v1/magic-mirror/display', (req, res) => {
    const convert = JSON.parse(req.body.state) ? 1 : 0;
    exec(`${command} ${convert}`, (error, stdout, stderr) => {
        res.send(parseResult(stdout))
    })
})

parseResult = (res) => {
    const state = parseInt(res.split('=')[1])
    return { state: Boolean(state) }
}

app.listen(3000)
