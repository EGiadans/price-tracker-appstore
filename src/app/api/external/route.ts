import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { appUrl } = body;

  const response = await fetch(`${process.env.SCRAPPER_API_URL}/scrap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ appUrl }),
  });

  const data = await response.json();

  return NextResponse.json(data);
}
