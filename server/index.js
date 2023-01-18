const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const socket = require("socket.io");

// middlewares
app.use(express.json());
app.use(cors());

// Fetch with puppeteer
const puppeteer = require('puppeteer'); 
 
(async () => { 
	const browser = await puppeteer.launch(); 
	const page = await browser.newPage(); 
	await page.goto('https://assignments.reaktor.com/birdnest/drones')

    // Add mutation observer

    const data = await page.evaluate(() => {
        all_elements = document.querySelectorAll('capture drone *')
        text_array = Array.from(all_elements);
        content = text_array.map(text => text.textContent);

        let arrays = []

        while (content.length > 0)
            arrays.push(content.splice(0, 10)); 
        return arrays
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
