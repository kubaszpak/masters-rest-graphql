import { Resolver, Query, FieldResolver, Root, Arg, Int } from "type-graphql";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import { prisma } from "../prisma";

@Resolver(() => Category)
export class CategoryResolver {
  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return await prisma.categories.findMany();
  }

  @Query(() => Category, { nullable: true })
  async category(@Arg("id", () => Int) id: number): Promise<Category | null> {
    return prisma.categories.findUnique({ where: { id } });
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
