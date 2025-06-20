import { Typography } from "@mui/material";

type AppDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function AppDetail({ params }: AppDetailProps) {
  const { slug } = await params;

  const fetchDetails = await fetch(
    `${process.env.LOCAL_API}/trackedApp/${slug}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());

  // const apps = await prisma.trackedApp.findFirst({});

  return <Typography variant="h1">{JSON.stringify(fetchDetails)}</Typography>;
}
