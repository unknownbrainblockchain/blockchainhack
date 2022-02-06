# blockchainhack
The main idea is to make distributed graph-node, using aqua.

The system contains frontend written in React(ub-front) and back written 
in Flask which is wrapper over docker container with graph-node.   
Aqua serves as a middleware that connects the backend with frontend (peer-node)

We developed an EthGraphQL to Aqua transpiling tool.
It is a graph-cli fork that generates a .aqua file for a given GraphQL schema.

dev version can be used with `yarn codegen`

the fork can be found here: https://github.com/vasemkin/graph-cli