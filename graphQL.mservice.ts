import Server from './Server.class';
import { RootSchema } from './schemas/root.schema';

const graphQLServer = new Server();

graphQLServer.addRootSchema(RootSchema);
graphQLServer.run();

