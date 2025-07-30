const { response } = require("express");
const { extractTextFromPdf } = require("../utils/pdfExtractor");
const { generateResponse } = require("../utils/langchain");

const candidateController = async (req, res) => {
    try {

        const { jobOffer, resumeTxt, letterLanguage, letterTone } = await req.body
        console.log("jobOffer", jobOffer);
        console.log("resumeTxt", resumeTxt);
        console.log("letterLanguage", letterLanguage);
        console.log("letterTone", letterTone);

        if (req.file?.filename) {
            const extractedResumeTxt = await extractTextFromPdf(req.file.path)

            const llmResponse = await generateResponse(extractedResumeTxt, jobOffer, letterLanguage, letterTone)
            console.log("llmResponse", llmResponse);

            return res.status(200).json({ "message": "text extracted successfully", data: extractedResumeTxt })
        }else if (resumeTxt) {
            console.log("resume text format", resumeTxt);
            return res.status(200).json({"message": "already extracted", data: resumeTxt })
        }else{
            return res.status(400).json({"message": "Bad input data!!"})
        }
        
    } catch (error) {
        return res.status(500).json({ "message": error.message })
    }
}

module.exports = { candidateController }