import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const appData: Prisma.TrackedAppCreateInput[] = [
  {
    name: "Minecraft: Amigos",
    appUrl:
      "https://apps.apple.com/mx/app/minecraft-explora-con-amigos/id479516143",
    description: "Construye, lucha y sobrevive",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b9/06/57/b9065743-c139-dda5-edbd-cc7eac0e0869/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/460x0w.webp",
  },
  {
    name: "Balatro",
    appUrl: "https://apps.apple.com/mx/app/balatro/id6502453075",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6d/d3/0c/6dd30caf-f830-22d5-ba44-448cdff0df30/iOS_AppIcon_Premium-0-0-1x_U007epad-0-1-85-220.png/460x0w.webp",
  },
  {
    name: "Cybertuner",
    appUrl: "https://apps.apple.com/mx/app/cybertuner/id490451741",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7f/29/95/7f299531-d9cb-a591-9d82-4e17d798c138/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/460x0w.webp",
  },
];

export async function main() {
  for (const u of appData) {
    await prisma.trackedApp.create({ data: u });
  }
}

main();
