import prisma from "@/lib/prisma";
import { Typography } from "@mui/material";
import Link from "next/link";

export default async function Page() {
  const apps = await prisma.trackedApp.findMany();

  return (
    <>
      <Typography variant="h1">Tracked Apps</Typography>
      <ul>
        {apps.map((app: any) => {
          return (
            <li key={app.id}>
              <Typography variant="body1">
                <Link href={`/appDetail/${app.id}`}>{app.name}</Link>
              </Typography>
            </li>
          );
        })}
      </ul>
    </>
  );
}
