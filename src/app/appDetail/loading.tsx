import { Box, Grid, Skeleton, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box>
      <Grid container margin="1.5rem" spacing={1}>
        <Grid size={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={2}>
              <Skeleton variant="rounded" width={"70%"} height="70px" />
            </Grid>
            <Grid size={6}>
              <Skeleton height="2em" />
              <Skeleton />
              {/* line 1 */}
              {/* line 2 */}
            </Grid>
            <Grid size={4}>
              <Skeleton variant="rectangular" height={"2rem"} />
              <Skeleton variant="rectangular" height={"2rem"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={6}>
          <Skeleton variant="rectangular" height={500} />
        </Grid>
      </Grid>
    </Box>
  );
}
