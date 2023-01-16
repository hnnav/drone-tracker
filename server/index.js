const express = require('express')
const app = express()
const axios = require('axios')

// middlewares
app.use(express.json());

const router = require('./router')
app.use("/", router);

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})