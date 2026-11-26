import { AppItemList } from "@/components/AppItemList";
import { NewAppForm } from "@/components/NewAppForm";
import prisma from "@/lib/prisma";
import { Divider, Grid } from "@mui/material";

export default async function Page() {
  const apps = await prisma.trackedApp.findMany();

  return (
    <Grid container spacing={1} display="flex">
      <Grid size={5}>
        <NewAppForm />
      </Grid>
      <Grid size={1} display="flex" justifyContent={"center"} height="90vh">
        <Divider orientation="vertical" />
      </Grid>
      <Grid size={6} sx={{ padding: 4 }}>
        <AppItemList apps={apps} />
      </Grid>
    </Grid>
  );
}
