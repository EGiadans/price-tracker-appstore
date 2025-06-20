import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // await prisma.trackedAppLog.create()
  // fetch data from DB
  return NextResponse.json({});
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { appId, price } = body;

  try {
    await prisma.trackedAppLog.create({ data: { trackedAppId: appId, price } });
  } catch (e) {
    console.error("Could not create TrackedAppLog: ", e);
  }
  return NextResponse.json({ message: "Success!" });
}
