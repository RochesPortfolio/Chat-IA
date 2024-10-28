import { OpenAI } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from 'dotenv';

dotenv.config();
// Initialize express app
const app = express();
const port = 4000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle POST requests
app.post("/respond", async (req, res) => {
  try {
    const { message } = req.body;
    const prevMessage = "Eres un modelo experto que responde preguntas basadas en las leyes vigentes de Guatemala, en particular la Iniciativa 6347 de Ley de Ciberseguridad. La persona que realiza las preguntas es un profesional del área de leyes y jurídicas en Guatemala, por lo que espera respuestas concisas, precisas y alineadas con el marco normativo del país. Cuando respondas, mantén el formato de texto limpio y usa saltos de línea como \n para separar párrafos o ideas clave, dado que la respuesta se mostrará en un entorno web."
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${prevMessage} \n ${message}` }],
    });

    console.log("PASSED");
    console.log("OpenAI Response:", chatCompletion.choices[0].message.content);

    // Send the ChatGPT response back to the client
    res.json({ botResponse: chatCompletion.choices[0].message.content });
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    res.status(500).json({ error: "Failed to generate response from OpenAI" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
