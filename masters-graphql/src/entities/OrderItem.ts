import { Field, Float, Int, ObjectType } from "type-graphql";
import { Product } from "./Product";

@ObjectType()
export class OrderItem {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  quantity!: number;

  order_id!: number;

  product_id!: number;

  @Field(() => Float)
  price!: number;

  @Field(() => Product, { nullable: true })
  products?: Product;
}
