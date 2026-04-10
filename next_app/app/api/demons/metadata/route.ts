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

    const metadata = await Demon.aggregate([
      { $match: { gameId: game } },
      {
        $facet: {
          races: [
            { $group: { _id: "$race" } },
            { $match: { _id: { $ne: null } } },
            { $sort: { _id: 1 } }
          ],
          locations: [
            { $group: { _id: "$appears" } },
            { $match: { _id: { $ne: null } } },
            {
              $project: {
                block: { $arrayElemAt: [{ $split: ["$_id", " "] }, 0] }
              }
            },
            { $group: { _id: "$block" } },
            { $sort: { _id: 1 } }
          ]
        }
      }
    ]);

    return NextResponse.json({
      races: metadata[0].races.map((r: any) => r._id),
      locations: metadata[0].locations.map((l: any) => l._id)
    });

  } catch (error) {
    return NextResponse.json({ error: "Erro ao carregar metadados" }, { status: 500 });
  }
}