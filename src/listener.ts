import { Server } from "http";
import Route from "./routeType";
export default function listener(server: Server, routes: Route[]) {
  server.on("request", (req, res) => {
    const route = routes.find(
      (route) => route.path === req.url && route.method === req.method
    );
    if (route) return route.handler(req, res);
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  });
}
