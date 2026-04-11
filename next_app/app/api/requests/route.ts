import mongoose from "mongoose";
import { NextResponse } from "next/server";

const RequestsSchema = new mongoose.Schema({}, { strict: false });
const Requests = mongoose.models.Requests || mongoose.model("Requests", RequestsSchema);

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

    const skip = (page - 1) * limit;

    let filter: any = { gameID: game };

    if (query) {
      filter.$or = [
        { title: { $regex: query, $options: "i" } },
        { solution: { $regex: query, $options: "i" } },
        { reward: { $regex: query, $options: "i" } }
      ];
    }

    const [data, total] = await Promise.all([
      Requests.find(filter)
        .sort({ order: 1 })
        .skip(skip)
        .limit(limit),
      Requests.countDocuments(filter)
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
    return NextResponse.json({ error: "Erro ao buscar requests" }, { status: 500 });
  }
}