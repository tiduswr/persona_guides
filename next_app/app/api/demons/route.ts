import mongoose from "mongoose";
import { NextResponse } from "next/server";

const DemonSchema = new mongoose.Schema({
  gameId: { type: String, required: true },
  name: { type: String, required: true },
  race: { type: String },
  level: { type: Number },
  hp: { type: Number },
  mp: { type: Number },
  image: { type: String },
  resistances: { type: Object },
  drops: { type: String },
  appears: { type: String }
}, { strict: false });

const Demon = mongoose.models.Demon || mongoose.model("Demon", DemonSchema);

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI!);
}

export async function GET(request: Request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const game = searchParams.get("game") || "p3r";
    const data = await Demon.find({ gameId: game }).sort({ level: 1 });
  return NextResponse.json(data);
  } catch (error) {
    console.error("Erro na API de monstros:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}