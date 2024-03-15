const fs = require("fs");
const path = require("path");
const pug = require('pug');
const pdf = require('html-pdf-node');

module.exports = {
  createPdf
}

async function createPdf(data) {

  const compiledFunction = pug.compileFile('template.pug');
	const compiledContent = compiledFunction(data);

	var milis = new Date();
	milis = milis.getTime();

	var pdfPath = path.join('./', `DOC-${data.aerType}-${milis}.pdf`);

  const options = {
    format: 'A3',
    path: pdfPath,
    displayHeaderFooter: false,
    margin: {
      top: '50px',
      bottom: '50px',
      left: '50px',
      right: '50px'
    },
    printBackground: true

  }
  const pdfResult = pdf.generatePdf({content: compiledContent}, options).then(pdfBuffer => {
    console.log("PDF Buffer:-", pdfBuffer);
    return pdfBuffer;
  });

  return pdfResult;

}