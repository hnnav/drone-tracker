const express = require('express')
const router = express.Router()
const app = express()
const axios = require('axios')
const cors = require('cors')
const { parseString } = require('xml2js')

// middlewares
app.use(express.json());
app.use(cors());

// const router = require('./router')
// app.use("/", router);
const url = 'https://assignments.reaktor.com/birdnest/drones'

axios(url)
    .then(res => {
           parseString(res.data, function (err, result) {
               renderThis(result)
           })
    })

const renderThis = (result) => {
    console.log(result)
    app.use("/", async (req, res) => {
        res.json(result)
    });
}

  


const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});