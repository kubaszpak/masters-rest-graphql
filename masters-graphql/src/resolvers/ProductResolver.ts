import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { Product } from "../entities/Product";
import { prisma } from "../prisma";

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return await prisma.products.findMany();
  }

  @Query(() => Product, { nullable: true })
  async product(@Arg("id", () => Int) id: number): Promise<Product | null> {
    return prisma.products.findUnique({ where: { id } });
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg("name") name: string,
    @Arg("price") price: number
  ): Promise<Product> {
    return prisma.products.create({
      data: { name, price },
    });
  }
}
