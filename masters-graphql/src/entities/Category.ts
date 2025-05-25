import { Field, Int, ObjectType } from "type-graphql";
import { Product } from "./Product";

@ObjectType()
export class Category {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;

  @Field(() => [Product])
  products?: Product[];
}
