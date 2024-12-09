import * as http from "http";
import listen from "./listen";
import close from "./close";
import listener from "./listener";
import routes from "./routes";
import Route from "./routeType";
/**
 * Initializes the HTTP server
 */
export default function init() {
  const server = http.createServer();
  const r: Route[] = [];
  listener(server, r);
  return {
    /**
     * Begins listening for incoming requests
     */
    listen: listen(server),
    /**
     * Stops the server from accepting incoming requests
     */
    close: close(server),
    /**
     * Checks if the server is currently listening for requests
     */
    listening: () => server.listening,
    /**
     * Adds routes to the server
     */
    routes: routes(r),
  };
}
