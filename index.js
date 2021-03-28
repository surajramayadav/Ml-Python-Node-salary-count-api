const express = require('express')
const { spawn } = require('child_process');
const { PythonShell } = require('python-shell');
// let pyshell = new PythonShell('script1.py');


const hostname = '0.0.0.0';
const app = express()
const port = 3000
app.get('/predict', (req, res) => {
    const process = spawn('python', ['./model.py', req.query.exp]);
    // console.log("process", process)
    process.stdout.once('data', data => {
        res.send({ "salary": data.toString() })
        console.log(data.toString())

    })
})
app.listen(port, () => console.log(`server runnibg at http://${hostname}:${port}`))