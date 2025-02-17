import { Route } from "./types/route";
import http from "http";
import * as ptr from "path-to-regexp";
export default function (routes: Required<Route>[], req: http.IncomingMessage) {
  if (!req.url || !req.method) return null;
  const url = new URL(req.url, "/");
  for (let route of routes) {
    const matcher = ptr.match(route.path);
    const match = matcher(url.pathname);
    if (match && route.method === req.method) {
      return { route, match };
    }
  }
  return null;
}
