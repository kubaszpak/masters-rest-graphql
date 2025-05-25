import { ObjectType, Field, Float } from "type-graphql";
import { Decimal } from "@prisma/client/runtime/library";

@ObjectType()
export class Product {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => Float)
  price!: Decimal;

  @Field()
  stock!: number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | null;
}
