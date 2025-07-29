const fs = require('fs');
const pdfParse = require('pdf-parse');

const extractTextFromPdf = async (filePath) => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(dataBuffer);
        return data.text 
        // console.log(data.numpages); 
        // console.log(data.info);
    } catch (error) {
        console.error('Error extracting text:', error);
    }
}

module.exports = {extractTextFromPdf}