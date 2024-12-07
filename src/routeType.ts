import { IncomingMessage, ServerResponse } from "http";
type Route = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  handler: (req: IncomingMessage, res: ServerResponse) => void;
};
export default Route;
