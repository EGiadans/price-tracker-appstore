"use server";
import { AppData } from "types/types";
import prisma from "./prisma";
import { convertCurrencyToNumber } from "app/utils/currency";

export async function createLog(data: AppData) {
  console.log("CREATE LOG: ", data);
  const { initialPrice, id } = data;
  const user = prisma.trackedAppLog.create({
    data: { price: convertCurrencyToNumber(initialPrice), trackedAppId: id },
  });
  return user;
}
