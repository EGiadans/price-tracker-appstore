import { Typography } from "@mui/material";
import prisma from "../../lib/prisma";

export default async function Page() {
  const apps = await prisma.trackedApp.findMany();

  return (
    <>
      <Typography variant="h1">Tracked Apps</Typography>
      <ul>
        {apps.map((app: any) => {
          return (
            <li>
              <Typography variant="body1">{app.name}</Typography>
            </li>
          );
        })}
      </ul>
    </>
  );
}
