"use client";
import {
  Alert,
  Box,
  Button,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const NewAppForm = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    if (!text || !text.includes("https://")) {
      setIsError(true);
      return;
    }
    router.push(`/verify?search=${encodeURIComponent(text)}`);
  };

  return (
    <Box>
      <Grid spacing={2} container direction="column" padding={4}>
        <Grid>
          <Typography variant="h3">Track a new app</Typography>
        </Grid>
        {isError && <Alert severity="warning">Please enter a valid URL</Alert>}
        <Grid>
          <TextField
            type="url"
            required
            placeholder="https://..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid marginLeft="auto">
          <Button variant="outlined" onClick={handleSubmit}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
