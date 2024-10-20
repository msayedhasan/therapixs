const express = require("express");
const router = express.Router();

// const puppeteer = require('puppeteer');

const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const pdfmake = require('pdfmake');

router.post("/", print);
// // using puppeteer
// async function print(req, res, next) {
//   try {
//     console.log(req.body);

//     const content  = req.body; // Get the HTML content from the request body
// console.log(content);

//     // Launch a new headless browser
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     // Set the HTML content to the page
//     await page.setContent("<p>content</p>");
//     // // Generate PDF from the page
//     // const pdfPath = path.join(__dirname, "output.pdf");
//     // console.log('path');

//     await page.pdf({
//       path: "pdfPath.pdf",
//       format: "A4",
//       printBackground: true,
//     });
// console.log('set');

//     await browser.close();
// console.log('close');

//     // Send the PDF file as a download
//     res.download(pdfPath, (err) => {
//       if (err) {
//         console.error("Error sending file:", err);
//         res.status(500).send("Could not download the file.");
//       }
//       // Optionally, delete the file after download
//       fs.unlink(pdfPath, (err) => {
//         if (err) console.error("Error deleting file:", err);
//       });
//     });
//     // Example: Loading inline HTML
//     // await page.setContent('<h1>Hello, World!</h1><p>This is a PDF from Puppeteer</p>', { waitUntil: 'networkidle0' });

//     // // Set the PDF options (optional: page size, margins, etc.)
//     // await page.pdf({
//     //   path: 'output.pdf',        // Path to save the PDF file
//     //   format: 'A4',              // Paper size
//     //   printBackground: true,     // Include background colors and images
//     //   margin: {
//     //     top: '20mm',
//     //     bottom: '20mm',
//     //     left: '10mm',
//     //     right: '10mm'
//     //   }
//     // });

//     // // Close the browser
//     // await browser.close();

//     return res.status(201).json({
//       message: "Success",
//       data: "Done",
//     });
//   } catch (err) {
//     console.log(err);

//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// using pdfmake
async function print(req, res, next) {
  try {
    console.log(req.body);

    var fonts = {
      Roboto: {
        normal: 'fonts/Amiri-Regular.ttf',
        bold: 'fonts/Amiri-Bold.ttf',
        italics: 'fonts/Amiri-Italic.ttf',
        bolditalics: 'fonts/Amiri-BoldItalic.ttf'
      }
    };
    const printer = new pdfmake(fonts);
    
    var docDefinition = {
      content: [
        'أول براجراف222',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
      ]
    };
    
    var pdfDoc = printer.createPdfKitDocument(docDefinition);

      // Set the appropriate headers for downloading the file
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');

    const outputPath = path.join(__dirname, 'documentX.pdf');

    pdfDoc.pipe(fs.createWriteStream(outputPath));
    
    // pdfDoc.pipe(fs.createWriteStream(res));

    pdfDoc.end();
    console.log('done');
    
    return res.status(201).json({
      message: "Success",
      data: "Done",
    });
  } catch (err) {
    console.log(err);

    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

module.exports = router;
