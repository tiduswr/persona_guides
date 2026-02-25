import { FusionChart } from '@/models/Persona';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  // Importante: Garante que o banco seja o persona_db
  await mongoose.connect(process.env.MONGODB_URI!);
}

export async function GET(request: Request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const gameId = searchParams.get('game') || 'p3r';

    // 1. Tentativa via Modelo Mongoose
    let chart = await FusionChart.findOne({ gameId }).lean();

    if (!chart) {
      return NextResponse.json({ error: "Chart não encontrado no banco" }, { status: 404 });
    }

    return NextResponse.json(chart);
  } catch (error) {
    console.error("Erro na API:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}