import { Options } from "./types/options";
import getSanitizedOptions from "./getSanitizedOptions";
import http from "http";
import getRouteMatch from "./getRouteMatch";
export function init(options: Options) {
  const { routes } = getSanitizedOptions(options);
  return http.createServer((req, res) => {
    const routeMatch = getRouteMatch(routes, req);
    res.end(JSON.stringify(routeMatch));
  });
}
