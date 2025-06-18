import { Box, Typography } from "@mui/material";

export type AppPreviewProps = {
  title: string;
  price: string;
  image: string;
  description?: string;
};

export const AppPreview = ({
  title,
  price,
  image,
  description,
}: AppPreviewProps) => {
  return (
    <Box>
      <img src={image} height={50} width={50} />
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h4">{description}</Typography>
      <Typography variant="h4">{price}</Typography>
    </Box>
  );
};
