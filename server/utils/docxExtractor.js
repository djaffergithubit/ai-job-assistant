const mammoth = require("mammoth");

export async function extractDocxText(filePath) {
  try {
    const result = await mammoth.extractRawText({ path: filePath });
    const text = result.value; 
    console.log("Extracted Text:\n", text);
  } catch (err) {
    console.error("Error extracting text from DOCX:", err);
  }
}
