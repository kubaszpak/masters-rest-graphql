import { Resolver, Query, FieldResolver, Root } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import { prisma } from "../prisma";

@Resolver(() => Category)
export class CategoryResolver {
  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return await prisma.categories.findMany();
  }

  @FieldResolver(() => [Product])
  async products(@Root() category: Category): Promise<Product[]> {
    const products = await prisma.product_categories.findMany({
      where: {
        category_id: category.id,
      },
      include: {
        products: true,
      },
    });

    return products.map((pc) => pc.products);
  }
}
