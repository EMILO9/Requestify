import { Server } from "http";
import RequestifyError from "./requestifyError";
  /**
   * above
   */
export default function listen(server: Server) {
  /**
   * below
   */
  return async ({
    port = 3000,
    hostname = "localhost",
    backlog = 511,
  }: { port?: number; hostname?: string; backlog?: number } = {}) => {
    try {
      await new Promise<void>((resolve, reject) => {
        server.listen(port, hostname, backlog, (err?: Error) => {
          if (err) reject(err);
          resolve();
        });
      });
      return { port, hostname, backlog };
    } catch (error) {
      throw new RequestifyError((error as Error).message);
    }
  };
}
