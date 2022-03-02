const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer, gql } = require("apollo-server");
const neo4j = require("neo4j-driver");

const typeDefs = gql`
    type Movie {
        title: String
        tagline:String
        actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
    }

    type Actor {
        name: String
        born: Int
        movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
    }
`;
const {schema} = new Neo4jGraphQL({typeDefs});
const driver = neo4j.driver(
    "bolt://localhost:7687",
    neo4j.auth.basic("neo4j", "neo4j")
);

const server = new ApolloServer({
  schema: schema,
  context: {driver}
});

server.listen(process.env.PORT || 5000).then(({url}) => {
  console.log(`🚀 Knowledgebase API ready at ${url}`);
});
