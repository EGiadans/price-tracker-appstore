import { LogChart } from "@/components/LogChart";
import prisma from "@/lib/prisma";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { AppData } from "types/types";
import { DateTime } from "luxon";
import { formatCurrency } from "app/utils/currency";

type AppDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function AppDetail({ params }: AppDetailProps) {
  const { slug } = await params;

  const appData: AppData = await prisma.trackedApp.findUnique({
    where: { id: slug },
  });

  const priceData = await prisma.trackedAppLog.findMany({
    where: { trackedAppId: appData.id },
    orderBy: { createdAt: "desc" },
  });

  const generateHistoric = () => {
    const priceArr = [...priceData];
    // first logged date
    let currentLog = priceArr[priceArr.length - 1];
    // start our iteration on the first logged date
    let currentDate = DateTime.fromJSDate(currentLog.createdAt);
    let currentPrice = currentLog.price;
    const today = DateTime.now();

    let arr = [];

    while (currentDate <= today) {
      if (
        currentDate
          .startOf("day")
          .equals(DateTime.fromJSDate(currentLog.createdAt).startOf("day"))
      ) {
        currentPrice = currentLog.price;

        if (priceArr.length === 1) {
          currentLog = priceArr.pop();
        } else {
          priceArr.pop();
          currentLog = priceArr[priceArr.length - 1];
        }
      }

      // add a new log to the date array
      arr.push({
        price: currentPrice,
        date: currentDate.toFormat("yyyy-MM-dd"),
      });

      // iterate
      currentDate = currentDate.plus({ day: 1 });
    }

    return arr;
  };

  const getLowestPrice = () => {
    let lowestPrice = Number(priceData[0].price);
    priceData.forEach((data) => {
      let numPrice = Number(data.price);
      if (numPrice < lowestPrice) {
        lowestPrice = numPrice;
      }
    });
    return lowestPrice;
  };

  return (
    <Box>
      <Grid container margin="1.5rem">
        <Grid size={6}>
          <Grid container alignItems="center">
            <Grid size={2}>
              <img src={appData.imageUrl} width="70%" />
            </Grid>
            <Grid size={6}>
              <Typography variant="h5">{appData.name}</Typography>
              <Typography variant="subtitle1">{appData.description}</Typography>
            </Grid>
            <Grid size={4}>
              {priceData && (
                <>
                  <Typography variant="subtitle1">
                    Fist logged price:
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {appData.initialPrice}
                  </Typography>
                  <Divider />
                  <Typography>Lowest logged price:</Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {formatCurrency(getLowestPrice())}
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={6}>
          <LogChart priceData={generateHistoric()} />
        </Grid>
      </Grid>
    </Box>
  );
}
