import mongoose from "mongoose";
import { NextResponse } from "next/server";

const SocialLinkSchema = new mongoose.Schema({}, { strict: false });
const SocialLink = mongoose.models.SocialLink || mongoose.model("SocialLink", SocialLinkSchema);

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI!);
}

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const game = searchParams.get("game") || "p3r";
    const data = await SocialLink.find({ gameId: game });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar dados" }, { status: 500 });
  }
}