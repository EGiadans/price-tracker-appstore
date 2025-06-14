import prisma from "@/lib/prisma";
import { Typography } from "@mui/material";

type AppDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function AppDetail({ params }: AppDetailProps) {
  const { slug } = await params;

  // const apps = await prisma.trackedApp.findFirst({});

  return <Typography variant="h1">{slug}</Typography>;
}
