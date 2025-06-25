import { LogChart } from "@/components/LogChart";
import prisma from "@/lib/prisma";
import { Box, Grid, Typography } from "@mui/material";
import { AppData } from "types/types";

type AppDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function AppDetail({ params }: AppDetailProps) {
  const { slug } = await params;

  const appData: AppData = await prisma.trackedApp.findUnique({
    where: { id: slug },
  });

  const priceData = await prisma.trackedAppLog.findFirst({
    where: { trackedAppId: appData.id },
  });

  // TODO: Create format price function

  return (
    <Box>
      <Grid container>
        <Grid size={6}>
          <Grid container>
            <Grid size={2}>
              <img src={appData.imageUrl} width={50} />
            </Grid>
            <Grid size={4}>
              <Typography variant="subtitle1">{appData.name}</Typography>
            </Grid>
            <Grid size={4}>
              <Typography variant="subtitle1">{appData.description}</Typography>
            </Grid>
            <Grid size={2}>
              {priceData && (
                <Typography variant="subtitle1" fontWeight="bold">
                  {priceData.price}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={6}>
          <LogChart />
        </Grid>
      </Grid>
    </Box>
  );
}
