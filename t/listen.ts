import { Server } from "http";
export default function listen(server: Server) {
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
      throw error;
    }
  };
}
