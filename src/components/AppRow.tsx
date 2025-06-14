import { Box, Grid, Typography } from "@mui/material";
import { TrackedApp } from "types/types";

type AppRowProps = {
  app: TrackedApp;
};

export const AppRow = ({ app }: AppRowProps) => {
  return (
    <Box>
      <Grid container>
        <Grid size={2}>
          <img src={app.imageUrl} alt={`image-${app.name}`} />
        </Grid>
        <Grid size={10}>
          <Typography variant="body1">{app.name}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
