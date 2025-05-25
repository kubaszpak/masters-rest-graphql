import { ObjectType, Field, Int } from "type-graphql";
import { Product } from "./Product";
import { Category } from "./Category";

@ObjectType()
export class ProductCategory {
  @Field(() => Int)
  product_id!: number;

  @Field(() => Int)
  category_id!: number;

  @Field(() => Product)
  product!: Product;

  @Field(() => Category)
  category!: Category;
}
