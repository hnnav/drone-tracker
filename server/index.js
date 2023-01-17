const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const { parseString } = require('xml2js')

// middlewares
app.use(express.json());
app.use(cors());

// Getting update only when restarting server
setInterval(() => {
    axios('https://assignments.reaktor.com/birdnest/drones')
        .then(res =>  parseString(res.data, function (err, result) {renderThis(result)}))
}, 1000);

const renderThis = (result) => {
    app.use("/", async (req, res) => {
        res.json(result)
    });
    console.log(result)
}

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});