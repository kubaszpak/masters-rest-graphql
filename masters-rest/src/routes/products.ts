import express, { Request, Response } from "express";
import { prisma } from "../prisma";

const router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const product = await prisma.products.findUnique({
    where: { id },
  });

  if (!product)
    return void res.status(404).json({ error: "Product not found" });
  res.json(product);
});

export default router;
