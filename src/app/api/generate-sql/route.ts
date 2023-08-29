import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { schema, prompt } = await req.json();

  const message = `
    O seu trabalho é criar queries SQL a partir de um schema SQL abaixo.

    Schema SQL:
    """
    ${schema}
    """

    A partir do schema acima, escreva uma query SQL a partir da solicitação abaixo.

    Solicitação: ${prompt}
  `.trim();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [{ role: "user", content: message
  
  }],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}