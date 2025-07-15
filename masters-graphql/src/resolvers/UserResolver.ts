import {
  Resolver,
  Query,
  FieldResolver,
  Root,
  Int,
  Arg,
  Ctx,
} from "type-graphql";
import { User } from "../entities/User";
import { Order } from "../entities/Order";
import { prisma } from "../prisma";
import { Context } from "../context";

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async user(@Arg("id", () => Int) id: number): Promise<User | null> {
    return await prisma.users.findFirst({
      where: { id },
    });
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await prisma.users.findMany();
  }

  @FieldResolver(() => [Order])
  async orders(@Root() user: User, @Ctx() ctx: Context): Promise<Order[]> {
    return ctx.orderLoader.load(user.id);
  }
}
