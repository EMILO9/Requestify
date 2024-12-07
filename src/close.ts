import { Server } from "http";
import RequestifyError from "./requestifyError";
export default function close(server: Server) {
  return async () => {
    try {
      await new Promise<void>((resolve, reject) => {
        server.close((err?: Error) => {
          if (err) reject(err);
          resolve();
        });
      });
    } catch (error) {
      throw new RequestifyError((error as Error).message);
    }
  };
}
