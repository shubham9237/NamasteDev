import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { languageTypeDefs } from './languageTypeDefs.js';
import { languageResolvers } from './languageResolver.js';

const server = new ApolloServer({
  typeDefs: languageTypeDefs,
  resolvers: languageResolvers,
  });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
