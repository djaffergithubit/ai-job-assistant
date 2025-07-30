const { ChatOpenAI } = require("@langchain/openai")
const { ChatPromptTemplate } = require("@langchain/core/prompts")
const { createStuffDocumentsChain } = require("langchain/chains/combine_documents")
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter")
const { MemoryVectorStore } = require("langchain/vectorstores/memory")
const { createRetrievalChain } = require("langchain/chains/retrieval")
const { StringOutputParser } = require("@langchain/core/output_parsers")
const { matchLetterLanguage } = require("./matchLetterLanguage")
require("dotenv").config()

const model = new ChatOpenAI({
    modelName: "mistralai/mistral-7b-instruct",
    apiKey: process.env.OPENROUTER_API_KEY,
    configuration: {
        baseURL: "https://openrouter.ai/api/v1"
    },
    temperature: 0.7,
    // verbose: true
})

const prompt = ChatPromptTemplate.fromMessages([
    ['system', `
        Act as an AI Career Assistant. You will receive four inputs:                
        
        1- A user's existing resume
        2- A specific job offer
        3- The language in which the motivational letter should be written (English, French, or Spanish)
        4. The desired tone of the letter (professionnel, chaleureux, dynamique, or formel) based o the user's input.

        Your tasks are as follows:

        1. Resume Enhancement
        
        Improve the resume to better align with the job offer by:

        - Highlighting the most relevant skills and experiences
        - Improving clarity, formatting, and structure
        - Incorporating targeted keywords to optimize visibility in Applicant Tracking Systems (ATS)

        List each enhancement made for transparency and feedback.

        2. Motivation Letter Generation
        Based on the enhanced resume and job offer, write a personalized motivational letter in the specified language and tone. The letter should express the candidate’s enthusiasm and demonstrate clear alignment with the job requirements.

        Your output should include three clearly labeled sections:

        Part 1: Bullet-point list of all improvements made to the resume
        Part 2: The enhanced resume
        Part 3: A customized motivation letter, written in the specified language and tone
    `],
    ['human', '{input}']
])

const generateResponse = async (resume, jobOffer, letterLanguage, letterTone) => {
    const StringParser = new StringOutputParser()
    const chain = prompt.pipe(model).pipe(StringParser)

    const matchedLanguage = matchLetterLanguage(letterLanguage)
    console.log("******************************", matchedLanguage, "*****************************");
    
    const response = await chain.invoke({
        input: `My resume content ${resume},\n job offer details ${jobOffer},\n letter language ${matchedLanguage},\n letter tone ${letterTone}`
    })

    return response
}

module.exports = { generateResponse }