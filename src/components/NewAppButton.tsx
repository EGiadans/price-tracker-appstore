"use client";

import { Button } from "@mui/material";
import { AppPreviewProps } from "./AppPreview";
import { useRouter } from "next/navigation";

export const NewAppButton = ({
  appData,
}: {
  appData: AppPreviewProps & { appUrl: string };
}) => {
  const router = useRouter();

  const saveNewLog = async () => {
    const res = await fetch("/api/trackedApp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...appData }),
    });
    return res;
  };

  const handleSaveApp = async () => {
    const data = await saveNewLog();
    console.log("SAVE DATA: ", await data.json());
    router.push("/");
  };

  return <Button onClick={handleSaveApp}>Save</Button>;
};
