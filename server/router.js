const express = require('express');
const router = express.Router();
const axios = require('axios');

const parseString = require('xml2js').parseString;
const url = 'https://assignments.reaktor.com/birdnest/drones'

router.get('/', (request, response) => {
    // axios(url)
	// 	.then(response => {
	// 		console.log(response) 
	// 	})
	// .then(res => {
	//   	parseString(res.data, function (err, result) {
	// 		console.log(result);
	// 		return result
	//   	})
    // })
})

module.exports = router;