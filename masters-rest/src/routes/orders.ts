import express, { Request, Response } from "express";
import { prisma } from "../prisma";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const userId = req.query.userId
    ? parseInt(req.query.userId as string)
    : undefined;

  const orders = await prisma.orders.findMany({
    where: userId ? { user_id: userId } : undefined,
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

router.get("/:id", async (req: Request, res: Response) => {
  const orderId = parseInt(req.params.id, 10);

  try {
    const order = await prisma.orders.findUnique({
      where: { id: orderId },
      include: {
        users: true,
        order_items: {
          include: {
            products: {
              include: {
                product_categories: {
                  include: {
                    categories: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!order)
      return void res.status(404).json({ message: "Order not found" });

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching order" });
  }
});

export default router;
