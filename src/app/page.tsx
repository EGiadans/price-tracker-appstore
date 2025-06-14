import { AppRow } from "@/components/AppRow";
import prisma from "@/lib/prisma";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { TrackedApp } from "types/types";

export default async function Page() {
  const apps = await prisma.trackedApp.findMany();

  return (
    <>
      <ul>
        {apps.map((app: TrackedApp) => {
          return (
            <Box key={app.id}>
              {/* <Typography variant="body1">
                <Link href={`/appDetail/${app.id}`}>{app.name}</Link>
              </Typography> */}
              <AppRow app={app} />
            </Box>
          );
        })}
      </ul>
    </>
  );
}
