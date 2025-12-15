import { NextRequest, NextResponse } from "next/server";

interface typedonne {
  params: { id: string };
}

export async function GET(NextRequest: NextRequest,  {  params }: typedonne) {

  const {id} = await params;
  console.log(id)

  const data1 = {
    nom: "Sery",
    prenom: "Tania",
  };

  const {nom , prenom} = data1

  const data2 = {
    nom: "Ane",
    prenom: "Juvenal",
  };

  const data3 = {
    nom: "Dingui",
    prenom: "Beda",
  };

  if (Number(id) == 1) return NextResponse.json(data1, { status: 200 });
  else if (Number(id) == 2) return NextResponse.json(data2, { status: 200 });
  else if (Number(id) == 3) return NextResponse.json(data3, { status: 200 });
  else return NextResponse.json({ data: "non trouvé" }, { status: 404 });
}



