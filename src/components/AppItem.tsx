"use client";
import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { AppData } from "types/types";

type AppItemProps = {
  app: AppData;
};

export const AppItem = ({ app }: AppItemProps) => {
  const router = useRouter();

  const handleNavigate = (id: string) => {
    router.push(`/appDetail/${id}`);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid size={2}>
        <img
          src={app.imageUrl}
          alt={`image-${app.name}`}
          width={"100%"}
          height={"100%"}
        />
      </Grid>
      <Grid
        size={8}
        sx={{
          cursor: "pointer",
          // // boxShadow: 2,
          // backgroundColor: "background.paper",
          // transition: theme.transitions.create("box-shadow", {
          //   duration: theme.transitions.duration.standard,
          // }),
          "&:hover": {
            // color: theme.palette.success,
            // textShadow: "1px 1px 2px grey",
          },
        }}
        onClick={() => handleNavigate(app.id)}
      >
        <Typography variant="body1">{app.name}</Typography>
        <Typography variant="body2">{app.description}</Typography>
      </Grid>
      <Grid size={2}>
        <Typography variant="body1" sx={{ textDecoration: "line-through" }}>
          $199.00
        </Typography>
        <Typography variant="body1">$199.00</Typography>
      </Grid>
    </Grid>
  );
};
