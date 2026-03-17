import mongoose from "mongoose";
import { NextResponse } from "next/server";

const LinkedEpisodeSchema = new mongoose.Schema({
  gameId: { type: String, required: true },
  character: { type: String, required: true },
  time: { type: String },
  available: { type: String },
  deadline: { type: String, default: null },
  location: { type: String },
  reward: { type: String },
  persona: { type: String }
}, { strict: false, collection: 'linkedEpisodes' });

const LinkedEpisode = mongoose.models.LinkedEpisode || mongoose.model("LinkedEpisode", LinkedEpisodeSchema);

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI não definida");
  await mongoose.connect(process.env.MONGODB_URI);
}

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const game = searchParams.get("game") || "p3r";
    const character = searchParams.get("character");

    const query: any = { gameId: game };

    if (character) {
      query.character = character;
    }

    const data = await LinkedEpisode.find(query).sort({ available: 1 });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro na API de Linked Episodes:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}