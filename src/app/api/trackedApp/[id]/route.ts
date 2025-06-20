import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const p = await params;
  const id = p.id;

  const app = await prisma.trackedApp.findFirst({ where: { id } });

  return NextResponse.json(app);
}
