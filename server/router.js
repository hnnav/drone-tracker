const express = require('express');
const router = express.Router();
const axios = require('axios');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const parseString = require('xml2js').parseString;
const url = 'https://assignments.reaktor.com/birdnest/drones'

router.get('/', (request, response) => {
    axios(url).then(res => {
	  console.log(res.data)
    })
})

module.exports = router;