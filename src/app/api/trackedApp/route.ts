import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, description, image, price, appUrl } = body;

  const app = await prisma.trackedApp.create({
    data: {
      imageUrl: image,
      name: title,
      appUrl,
      description,
      initialPrice: price,
    },
  });

  return NextResponse.json({
    ...app,
  });
}

export async function GET(request: NextRequest) {}
