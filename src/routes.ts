import Route from "./routeType";
import RequestifyError from "./requestifyError";
export default function routes(r: Route[]) {
  return (routes: Route[]) => {
    try {
      const routesDef = routes.map((route) => ({
        ...route,
        method: route.method ?? "GET",
      }));
      r.push(...routesDef);
    } catch (error) {
      throw new RequestifyError((error as Error).message);
    }
  };
}
