"use client";
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useRouter } from "next/navigation";
import { HouseRounded } from "@mui/icons-material";

export const CustomAppBar = () => {
  const router = useRouter();

  const handleNavigateHome = () => {
    router.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleNavigateHome}
          >
            <HouseRounded />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
