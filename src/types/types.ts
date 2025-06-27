// TrackedApp model
export type AppData = {
  id?: string;
  name: string;
  description?: string;
  appUrl: string;
  imageUrl: string;
  initialPrice?: string;
};

export type PriceLogData = {
  id: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
  trackedAppId: string;
};
