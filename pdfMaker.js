const fs = require("fs")
const PDFDocument = require("pdfkit")
const config = require("./config")

const path = config.path

const pdfMaker = (title, content, filename) => {
	doc = new PDFDocument
	doc.pipe(fs.createWriteStream(`${path.outputPDF}/${filename}.pdf`))
	
	// PDF Creation logic goes here
	// Set a title and pass the X and Y coordinates
	doc.font(path.font)
	doc.fontSize(30)
		.text(title, {
			width: 1000,
			align: "left"
		})
		.moveDown(0.5)
	
	// Set the paragraph width and align direction
	doc.fontSize(10)
		.text(`${content}`, {
			width: 1000,
			align: "left"
		})
	
	// Save pdf
	doc.end()
}

module.exports = pdfMaker
