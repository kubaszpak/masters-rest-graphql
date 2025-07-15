import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { ProductResolver } from "./resolvers/ProductResolver";
import { CategoryResolver } from "./resolvers/CategoryResolver";
import { OrderResolver } from "./resolvers/OrderResolver";
import { OrderItemResolver } from "./resolvers/OrderItemResolver";
import { UserResolver } from "./resolvers/UserResolver";
import { orderLoader } from "./dataLoaders/orderLoader";

async function main() {
  const schema = await buildSchema({
    resolvers: [
      ProductResolver,
      CategoryResolver,
      OrderResolver,
      OrderItemResolver,
      UserResolver,
    ],
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context: () => ({
      orderLoader,
    }),
  });

  const { url } = await server.listen(4000);
  console.log(`🚀 Server ready at ${url}`);
}

main();
