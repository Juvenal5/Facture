import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const users = await prisma.users.findMany({
    orderBy: { date_de_creation: "desc" },
  });

  return NextResponse.json(users);
}
