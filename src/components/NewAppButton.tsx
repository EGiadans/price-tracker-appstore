"use client";

import { Button } from "@mui/material";
import { AppPreviewProps } from "./AppPreview";
import { useRouter } from "next/navigation";
import { createLog } from "@/lib/actions";

export const NewAppButton = ({
  appData,
}: {
  appData: AppPreviewProps & { appUrl: string };
}) => {
  const router = useRouter();

  const saveNewApp = async () => {
    const res = await fetch("/api/trackedApp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...appData }),
    });
    return res;
  };

  const handleSaveApp = async () => {
    const data = await saveNewApp().then((res) => res.json());
    console.log("DATA");
    const priceData = await createLog(data);
    console.log("PRICE DATA: ", priceData);
    router.push("/");
  };

  return <Button onClick={handleSaveApp}>Save</Button>;
};
