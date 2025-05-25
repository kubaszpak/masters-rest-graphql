import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { ProductResolver } from "./resolvers/ProductResolver";
import { CategoryResolver } from "./resolvers/CategoryResolver";
import { OrderResolver } from "./resolvers/OrderResolver";
import { OrderItemResolver } from "./resolvers/OrderItemResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [
      ProductResolver,
      CategoryResolver,
      OrderResolver,
      OrderItemResolver,
    ],
    validate: false,
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen(4000);
  console.log(`🚀 Server ready at ${url}`);
}

main();
