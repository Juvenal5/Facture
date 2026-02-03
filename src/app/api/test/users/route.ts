import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// 🔥 OBLIGATOIRE
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const users = await prisma.users.findMany({
      orderBy: {
        date_de_creation: "desc",
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}




