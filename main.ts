import * as http from "http";
import listen from "./t/listen";
import close from "./t/close";
import listener from "./t/listener";
import routes from "./t/routes";
export function init() {
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
