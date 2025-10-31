const { extractTextFromPdf } = require("../utils/pdfExtractor");
const { generateResponse } = require("../utils/langchain");

const candidateController = async (req, res) => {
    try {

        const { jobOffer, resumeTxt, letterLanguage, letterTone } = await req.body        

        if (req.file?.filename) {
            await extractTextFromPdf(
                req.file.path
            ).then(async(extractedResumeTxt) => {
                const llmResponse = await generateResponse(extractedResumeTxt, jobOffer, letterLanguage, letterTone)
                return res.status(200).json({ 
                    message: "response generated successfully.", 
                    data: llmResponse
                }) 
            })
            .catch((error) => {
                console.log("err",  error);
                return res.status(500).json({ message: "Error processing PDF"})
            })
        }else if (resumeTxt) {
            const llmResponse = await generateResponse(resumeTxt, jobOffer, letterLanguage, letterTone)
            return res.status(200).json({ 
                message: "response generated successfully.", 
                data: llmResponse
            }) 
        }else{
            return res.status(400).json({"message": "Bad input data!!"})
        }
        
    } catch (error) {
        return res.status(500).json({ "message": error.message })
    }
}

module.exports = { candidateController }