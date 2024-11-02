import Route from "./routeType";
import RequestifyError from "./requestifyError";
export default function routes(r: Route[]) {
  return (routes: Route[]) => {
    try {
      r.push(...routes);
    } catch (error) {
      throw new RequestifyError((error as Error).message);
    }
  };
}
