import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const users = await prisma.users.findMany({
    orderBy: { date_de_creation: "desc" },
  });

  return NextResponse.json(users);
}


// import { NextResponse } from 'next/server';
// import { prisma } from '@/app/lib/prisma';

// // GET : récupérer tous les users
// export async function GET() {
//   const user = await prisma.user.findMany({
//     orderBy: { date_de_creation: 'desc' },
//   });
//   return NextResponse.json(user);
// }

// // POST : créer un user
// export async function POST(req: Request) {
//   const body = await req.json();

//   const user = await prisma.user.create({
//     data: {
//       nom: body.nom,
//       prenom: body.prenom,
//       email: body.email,
//       mot_de_passe: body.mot_de_passe,
//     },
//   });

//   return NextResponse.json(user);
// }

// // DELETE : supprimer un user
// export async function DELETE(req: Request) {
//   const { id } = await req.json();

//   await prisma.user.delete({
//     where: { id },
//   });

//   return NextResponse.json({ success: true });
// }
