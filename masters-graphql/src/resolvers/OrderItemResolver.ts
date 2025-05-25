import { FieldResolver, Resolver, Root } from "type-graphql";
import { OrderItem } from "../entities/OrderItem";
import { Product } from "../entities/Product";
import { prisma } from "../prisma";

@Resolver(() => OrderItem)
export class OrderItemResolver {
  @FieldResolver(() => Product, { nullable: true })
  async products(@Root() item: OrderItem) {
    if (!item.product_id) return null;
    return prisma.products.findUnique({
      where: { id: item.product_id },
    });
  }
}
