import express, { Request, Response } from "express";
import { prisma } from "../prisma";

const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  const users = await prisma.users.findMany({
    include: {
      orders: true,
    },
    omit: {
      password_hash: true,
    },
  });

  res.json(users);
});

router.get("/:id/orders", async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  const orders = await prisma.orders.findMany({
    where: { user_id: userId },
    include: {
      order_items: {
        include: {
          products: true,
        },
      },
    },
  });

  res.json(orders);
});

export default router;
