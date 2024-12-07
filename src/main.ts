import * as http from "http";
import listen from "./listen";
import close from "./close";
import listener from "./listener";
import routes from "./routes";
import Route from "./routeType";
export default function init() {
  const server = http.createServer();
  const r: Route[] = [];
  listener(server, r);
  return {
    listen: listen(server),
    close: close(server),
    listening: () => server.listening,
    routes: routes(r),
  };
}
