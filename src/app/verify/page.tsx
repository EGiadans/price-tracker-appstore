import { AppPreview, AppPreviewProps } from "@/components/AppPreview";
import { NewAppButton } from "@/components/NewAppButton";
import prisma from "@/lib/prisma";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

/**
 * TODO: Receive data from scrapper endpoint, if everything is right, save this data to the TrackedAppLog table
 * @returns
 */

type SearchParams = {
  search?: string;
};

type PageProps = {
  searchParams: SearchParams;
};

const fetchData = async (search: string) => {
  const res: AppPreviewProps = await fetch(
    `${process.env.LOCAL_API}/external`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ appUrl: search }),
    }
  ).then((res) => res.json());
  return res;
};

export default async function VerifyPage({ searchParams }: PageProps) {
  const { search } = await searchParams;

  if (!search) return <>No app url provided!</>;

  const existingApp = await prisma.trackedApp.findFirst({
    where: { appUrl: search },
  });

  if (existingApp) {
    return (
      <>
        {/* <Typography variant="h3">This app is already being tracked!</Typography> */}
        <Alert severity="success">This app is already being tracked!</Alert>
        <AppPreview title={existingApp.name} image={existingApp.imageUrl} />
        <Link href={`/appDetail/${existingApp.id}`}>Go to app details</Link>
      </>
    );
  }

  const appData = await fetchData(search);

  return (
    <Box margin="3rem">
      {!appData.title ? (
        <>Internal Error</>
      ) : (
        <>
          <Typography variant="h3" marginBottom="3rem">
            We found this data about {appData.title}:
          </Typography>
          <AppPreview {...appData} />
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            marginTop="3rem"
          >
            <Grid size={8} textAlign="right">
              <Typography variant="h4">Are all the details correct?</Typography>
            </Grid>
            <Grid size={4}>
              <NewAppButton appData={{ ...appData, appUrl: search }} />
              <Button>No, try again</Button>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
}
