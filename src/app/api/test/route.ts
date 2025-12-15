import { NextRequest , NextResponse } from "next/server";

export async function GET(NextRequest: NextRequest) {

    const data = {
        nom : "juvenal",
        prenom:"dte"
    }
    {
      
    }

  return NextResponse.json(data , {status:200})
}
