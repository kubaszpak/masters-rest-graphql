import express, { Request, Response } from "express";
import { prisma } from "../prisma";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const categories = await prisma.categories.findMany({
    include: {
      product_categories: {
        include: {
          products: true,
        },
      },
    },
  });

  const result = categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    products: cat.product_categories.map((pc) => pc.products),
  }));

  res.json(result);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const category = await prisma.categories.findUnique({
    where: { id },
  });

  if (!category)
    return void res.status(404).json({ error: "Category not found" });

  res.json(category);
});

router.get("/:id/products", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const category = await prisma.categories.findUnique({
    where: { id },
    include: {
      product_categories: {
        include: {
          products: true,
        },
      },
    },
  });

  if (!category)
    return void res.status(404).json({ error: "Category not found" });

  const products = category.product_categories.map((pc) => pc.products);
  res.json(products);
});

export default router;
