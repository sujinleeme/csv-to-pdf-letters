const fs = require("fs")
const csv = require("fast-csv")
const tempBody = require("./template/body")
const tempTitle = require("./template/title")

const pdfMaker = require("./pdfMaker")
const config = require("./config")

const path = config.path

fs.createReadStream(path.csv)
	.pipe(csv())
	.on("data", (data) => {
		// Read csv
		const fileNumber = data[0],
			customer = data[1],
			host = data[2]
		
		// Generate body content
		const body = tempBody(customer, host),
			title = tempTitle
		// Create pdf file
		pdfMaker(title, body, fileNumber)
		console.log(`create file ${fileNumber}.pdf`)
	})
	
	// Close reading csv
	.on("end", () => {
		console.log("Read Finsihed")
	})

