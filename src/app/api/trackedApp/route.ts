import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, description, image, price, appUrl } = body;

  await prisma.trackedApp.create({
    data: { imageUrl: image, name: title, appUrl, description },
  });

  return NextResponse.json({ message: "successfully created app tracker" });
}

export async function GET(request: NextRequest) {}
