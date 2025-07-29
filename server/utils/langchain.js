const { ChatOpenAI } = require("@langchain/openai")
const { ChatPromptTemplate } = require("@langchain/core/prompts")
const { createStuffDocumentsChain } = require("langchain/chains/combine_documents")
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter")
const { MemoryVectorStore } = require("langchain/vectorstores/memory")
const { createRetrievalChain } = require("langchain/chains/retrieval")
const { StringOutputParser } = require("@langchain/core/output_parsers")
require("dotenv").config()

const model = new ChatOpenAI({
    modelName: "mistralai/mistral-7b-instruct",
    apiKey: process.env.OPENROUTER_API_KEY,
    // maxTokens: 2000,
    configuration: {
        baseURL: "https://openrouter.ai/api/v1"
    },
    verbose: true
})

const prompt = ChatPromptTemplate.fromMessages([
    ['system', `
        Act as an AI career assistant that takes a user's existing resume and a specific job offer as input.
        Your tasks are:

        Enhance the resume to better align with the job offer by:
            Highlighting relevant skills and experiences,
            Improving clarity and structure,
            Incorporating optimized keywords to increase visibility in Applicant Tracking Systems (ATS).

        List all enhancement points made to the original resume for transparency.
        Based on the improved resume and job offer, generate a personalized motivational letter that clearly articulates the candidate’s suitability and enthusiasm for the position.

        The output should contain two parts:
            Part 1: The improved resume and a bullet-point summary of the enhancements made.
            Part 2: A customized motivation letter aligned with the job description and resume.
    `],
    ['human', '{input}']
])

const generateResponse = async (resume, jobOffer) => {
    const StringParser = new StringOutputParser()
    const chain = prompt.pipe(model).pipe(StringParser)
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIII resume", resume);
    
    const response = await chain.invoke({
        input: `My resume content ${resume}\n, job offer details ${jobOffer}`
    })

    return response
}

module.exports = { generateResponse }