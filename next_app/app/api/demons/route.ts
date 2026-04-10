import mongoose from "mongoose";
import { NextResponse } from "next/server";

const DemonSchema = new mongoose.Schema({}, { strict: false });
const Demon = mongoose.models.Demons || mongoose.model("Demons", DemonSchema);

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
    const limit = parseInt(searchParams.get("limit") || "20");
    const query = searchParams.get("q") || "";
    const race = searchParams.get("race") || "";
    const location = searchParams.get("location") || "";
    
    const skip = (page - 1) * limit;

    // Construção do Filtro Dinâmico
    let filter: any = { gameId: game };

    if (query) {
      filter.name = { $regex: query, $options: "i" };
    }
    
    if (race) {
      filter.race = race;
    }

    if (location) {
      // Busca monstros que aparecem em locais que começam com o nome do bloco/setor
      filter.appears = { $regex: `^${location}`, $options: "i" };
    }

    const [data, total] = await Promise.all([
      Demon.find(filter)
        .sort({ level: 1 })
        .skip(skip)
        .limit(limit),
      Demon.countDocuments(filter)
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
    console.error("Erro na API de monstros:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}