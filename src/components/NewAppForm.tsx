import { Box, Button, Grid, Input, Typography } from "@mui/material";

export const NewAppForm = () => {
  return (
    <Grid spacing={2} container direction="column" padding={4}>
      <Grid>
        <Typography variant="h3">Track a new app</Typography>
      </Grid>
      <Grid>
        <Input placeholder="new app url..." sx={{ width: "100%" }} />
      </Grid>
      <Grid marginLeft="auto">
        <Button>Search</Button>
      </Grid>
    </Grid>
  );
};
