const express = require('express')
const { spawn } = require('child_process');
const { PythonShell } = require('python-shell');
// const functions = require('firebase-functions');
// let pyshell = new PythonShell('script1.py');


// app.use(cors({ origin: true }));
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
app.listen(port, () => console.log(`server runnibg at http://localhost:${port}`))
// exports.MyModel = functions.https.onRequest(app);