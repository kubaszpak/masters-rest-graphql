import { PrismaClient } from "@prisma/client";
import { Order } from "../entities/Order";
import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { OrderItem } from "../entities/OrderItem";
import { prisma } from "../prisma";

@Resolver(() => Order)
export class OrderResolver {
  @Query(() => [Order])
  async orders(): Promise<Order[]> {
    return prisma.orders.findMany();
  }

  @FieldResolver(() => [OrderItem])
  async order_items(@Root() order: Order) {
    return prisma.order_items.findMany({
      where: { order_id: order.id },
    });
  }
}
