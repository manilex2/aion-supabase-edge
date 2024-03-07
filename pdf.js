const fs = require("fs");
const path = require("path");
const pug = require('pug');
const pdf = require('html-pdf-node');

async function createPdf() {
  var startDate = new Date(Date.now());
  var endDate = new Date(Date.now());
  var transStartDate = `${startDate.getDate()}-${startDate.getMonth()+1}-${startDate.getFullYear()}`
  var transEndDate = `${30}-${endDate.getMonth()+1}-${endDate.getFullYear()}`
  const data = {
    aer: {
      type: "AErType"
    },
    contracts: {
      value: 5000,
      number: '412431',
      advancePercentage: 50,
      startDate: transStartDate,
      endDate: transEndDate,
      retentionValue: 30,
      retentionType: 'Valor',
      subscriptionDate: {
        day: startDate.getDate(),
        month: startDate.getMonth()+1,
        year: startDate.getFullYear()
      },
      object: 'Object'
    },
    institution: {
      nombre: 'Institution'
    },
    parameter: {
      docType: 'DocType'
    },
    adminContract: {
      firstname: 'Admin',
      lastname: 'Contract',
      jobPosition: 'JobPosition'
    },
    tecnicoNoInterviniente: {
      firstname: 'Técnico',
      lastname: 'No Interviniente'
    },
    comisionRecepcion: [
      {
        firstname: 'Comisión1',
        lastname: 'Recepción1'
      },
      {
        firstname: 'Comisión2',
        lastname: 'Recepción2'
      }
    ],
    contractorsShareholders: {
      name: 'Contratista',
      legalRepresentative: 'LegalRepresentative',
      legalRepresentativePosition: 'LegalRepresentativePosition'
    },
    departments: {
      nombre: 'NombreDepartamento'
    },
    contractsDeliveries: {
      total: 50
    },

  };

  const compiledFunction = pug.compileFile('template.pug');
	const compiledContent = compiledFunction(data);

	var milis = new Date();
	milis = milis.getTime();

	var pdfPath = path.join('./', `${data.aer.type}.pdf`);

  const options = {
    format: 'A3',
    path: pdfPath,
    displayHeaderFooter: false,
    margin: {
      top: '50px',
      bottom: '50px',
      left: '50px',
      right: '50px'
    }

  }
  pdf.generatePdf({content: compiledContent}, options).then(pdfBuffer => {
    console.log("PDF Buffer:-", pdfBuffer);
  });
}

createPdf();