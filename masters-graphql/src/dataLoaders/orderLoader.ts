import DataLoader from "dataloader";
import { prisma } from "../prisma";
import { orders } from "@prisma/client";

export const orderLoader = new DataLoader<number, orders[]>(
  async (userIds) => {
    const orders = await prisma.orders.findMany({
      where: {
        user_id: {
          in: userIds as number[],
        },
      },
    });

    const ordersMap: Record<number, orders[]> = {};
    orders.forEach((order) => {
      if (!ordersMap[order.user_id!]) {
        ordersMap[order.user_id!] = [];
      }
      ordersMap[order.user_id!].push(order);
    });

    return userIds.map((userId) => ordersMap[userId] || []);
  },
  {
    cache: false,
  }
);
