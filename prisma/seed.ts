import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// const minecraft = "https://apps.apple.com/mx/app/minecraft-explora-con-amigos/id479516143";
// const balatro = "https://apps.apple.com/mx/app/balatro/id6502453075";
// const priciest = "https://apps.apple.com/mx/app/cybertuner/id490451741";

const appData: Prisma.TrackedAppCreateInput[] = [
  {
    name: "Minecraft: Amigos",
    appUrl:
      "https://apps.apple.com/mx/app/minecraft-explora-con-amigos/id479516143",
    description: "Construye, lucha y sobrevive",
  },
  {
    name: "Balatro",
    appUrl: "https://apps.apple.com/mx/app/balatro/id6502453075",
  },
  {
    name: "Cybertuner",
    appUrl: "https://apps.apple.com/mx/app/cybertuner/id490451741",
  },
];

export async function main() {
  for (const u of appData) {
    await prisma.trackedApp.create({ data: u });
  }
}

main();
