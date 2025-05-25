import { Field, Float, Int, ObjectType } from "type-graphql";
import { OrderItem } from "./OrderItem";
import { Decimal } from "@prisma/client/runtime/library";

@ObjectType()
export class Order {
  @Field(() => Int)
  id!: number;

  @Field(() => Float)
  total!: Decimal;

  @Field(() => [OrderItem])
  order_items?: OrderItem[];
}
