import { Persona } from '@/models/Persona';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI!);
}

export async function GET(request: Request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const gameId = searchParams.get('game') || 'p3r';

    // Procura personas do jogo específico, ordena por nível
    const personas = await Persona.find({ gameId })
      .select('-_id -__v') // Exclui campos internos do Mongo
      .sort({ lvl: 1 })
      .lean(); // Torna a consulta mais leve (devolve JSON puro)

    return NextResponse.json(personas);
  } catch (error) {
    return NextResponse.json({ error: "Erro na base de dados" }, { status: 500 });
  }
}