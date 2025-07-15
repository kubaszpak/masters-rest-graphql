import { ObjectType, Field, Int } from "type-graphql";
import { Order } from "./Order";

@ObjectType()
export class User {
  @Field(() => Int)
  id!: number;

  @Field()
  email!: string;

  @Field(() => String, { nullable: true })
  name?: string | null;

  @Field(() => Date, { nullable: true })
  created_at?: Date | null;

  password_hash!: string;

  @Field(() => [Order], { nullable: true })
  orders?: Order[];
}
