const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const { parseString } = require('xml2js')
const socket = require("socket.io");

// middlewares
app.use(express.json());
app.use(cors());

// axios('https://assignments.reaktor.com/birdnest/drones')
//     .then(res =>  parseString(res.data, function (err, result) {renderThis(result)}))

// Trying fetch with puppeteer
const puppeteer = require('puppeteer'); 
 
(async () => { 
	const browser = await puppeteer.launch(); 
	const page = await browser.newPage(); 
	await page.goto('https://assignments.reaktor.com/birdnest/drones')

    const data = await page.evaluate(() => {
        all_elements = document.querySelectorAll('capture drone *');
        text_array = Array.from(all_elements);
        return text_array.map(text => text.textContent);
    });

    console.log(data)

    renderThis(data)

	await browser.close(); 
})();

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

// // Socket setup
// const io = socket(server);
// 
// io.on("connection", function (socket) {
//     console.log("Made socket connection");
// });
