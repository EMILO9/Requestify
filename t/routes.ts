import Route from "./routeType";
export default function routes(r: Route[]) {
  return (routes: Route[]) => {
    r.push(...routes);
  };
}
