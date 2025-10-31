const { ChatOpenAI } = require("@langchain/openai");
const { ChatPromptTemplate } = require("langchain/")

const model = new ChatOpenAI({
    modelName: "",
    apiKey: process.env.api_key,
    temperature: 0.9,
    configuration: {
        baseURL: ""
    }, 
    maxTokens: 1024,
    verbose: false
})

const prompt = ChatPromptTemplate.fromMessages([
    ['system', ''],
    new MessagePlaceholder("chat_history"),
    ['human', '{input}'],
    new MessagePlaceholder("agent_scratchpad")
])

const stringParser = new StringOutParser()
const chain = prompt.pipe(model).pipe(stringParser)

const response = await chain.invoke({
    input: ""
})

const loader = new CheerioWbBaseLoader("")
const docs = await loader.load()

const splitter = new RecursiveCharacterSplitter({
    chunkSize: 200,
    chunkOverlap: 20
})
const splitDocs = await splitter.splitDocuments(docs)

const embeddings = new OllamaEmbeddings({
    model: "",
    baseUrl: ""
})

const vectorStore = new vectorStoreMemory.fromDocuments(splitDocs, embeddings)

const retriever = await vectorStore.asRetriever({
    k: 3
})

const retrievalChain = await createRetrievalChain({
    combinedChain: chain,
    retriever
})

const response_1 = await retrievalChain.invoke({
    input: ""
})

const retrieverTool = new createRetrievalTool(retriever, {
    name: "",
    description: ""
})
const tools = [retrieverTool]

const agent = await createCallingToolAgent({
    llm: model,
    tools,
    prompt
})