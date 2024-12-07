
# Requestify

```bash
  npm i @emilo/requestify
```
    
```typescript
import Requestify from "@emilo/requestify";

(async () => {
  let routes: ReturnType<typeof Requestify>["routes"],
    listen: ReturnType<typeof Requestify>["listen"],
    close: ReturnType<typeof Requestify>["close"];
  try {
    ({ routes, listen, close } = Requestify());
    routes([
      {
        path: "/",
        method: "GET",
        handler: (req, res) => {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Hello World!");
        },
      },
    ]);
    await listen();
  } catch (error) {
    const errors = [error];
    try {
      await close!();
    } catch (error) {
      errors.push(error);
    } finally {
      console.error(errors);
      process.exit(1);
    }
  }
})();
```
```javascript
const Requestify = require("@emilo/requestify").default;

(async () => {
  let routes, listen, close;
  try {
    ({ routes, listen, close } = Requestify());
    routes([
      {
        path: "/",
        method: "GET",
        handler: (req, res) => {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Hello World!");
        },
      },
    ]);
    await listen();
  } catch (error) {
    const errors = [error];
    try {
      await close();
    } catch (error) {
      errors.push(error);
    } finally {
      console.error(errors);
      process.exit(1);
    }
  }
})();
```

