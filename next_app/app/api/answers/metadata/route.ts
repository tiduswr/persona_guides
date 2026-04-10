import mongoose from "mongoose";
import { NextResponse } from "next/server";

const ExamsSchema = new mongoose.Schema({}, { strict: false });
const Answers = mongoose.models.Answers || mongoose.model("Answers", ExamsSchema);

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI!);
}

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const game = searchParams.get("game") || "p3r";

    const tags = await Answers.distinct("tags", { gameId: game });

    return NextResponse.json({
      tags: tags.sort()
    });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao carregar tags" }, { status: 500 });
  }
}