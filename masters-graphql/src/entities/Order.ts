import { Field, Float, Int, ObjectType } from "type-graphql";
import { OrderItem } from "./OrderItem";
import { Decimal } from "@prisma/client/runtime/library";

@ObjectType()
export class Order {
  @Field(() => Int)
  id!: number;

  @Field(() => Int, { nullable: true })
  user_id?: number | null;

  @Field(() => Float)
  total!: Decimal;

  @Field(() => String, { nullable: true })
  status?: string | null;

  @Field(() => [OrderItem])
  order_items?: OrderItem[];

  @Field(() => Date, { nullable: true })
  created_at?: Date | null;
}
