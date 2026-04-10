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
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const query = searchParams.get("q") || "";
    const tag = searchParams.get("tag") || "";

    const skip = (page - 1) * limit;

    let filter: any = { gameId: game };

    if (query) {
      filter.$or = [
        { q: { $regex: query, $options: "i" } },
        { a: { $regex: query, $options: "i" } },
        { date: { $regex: query, $options: "i" } }
      ];
    }

    if (tag) {
      filter.tags = tag;
    }

    const [data, total] = await Promise.all([
      Answers.find(filter)
        .sort({ date: 1 }) 
        .skip(skip)
        .limit(limit),
      Answers.countDocuments(filter)
    ]);

    return NextResponse.json({
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Erro ao buscar dados" }, { status: 500 });
  }
}