"use client";
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const NewAppForm = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/verify?search=${encodeURIComponent(text)}`);
  };

  return (
    <Grid spacing={2} container direction="column" padding={4}>
      <Grid>
        <Typography variant="h3">Track a new app</Typography>
      </Grid>
      <Grid>
        <Input
          placeholder="new app url..."
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>
      <Grid marginLeft="auto">
        <Button onClick={handleSubmit}>Search</Button>
      </Grid>
    </Grid>
  );
};
