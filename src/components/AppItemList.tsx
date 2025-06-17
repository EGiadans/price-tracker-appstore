import { Box, Typography } from "@mui/material";
import { AppData } from "types/types";
import { AppItem } from "./AppItem";

export const AppItemList = ({ apps }: { apps: AppData[] }) => {
  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: "16px" }}>
        My Tracked Apps
      </Typography>
      {apps.map((app: AppData) => {
        return (
          <Box key={app.id}>
            <AppItem app={app} />
          </Box>
        );
      })}
    </>
  );
};
