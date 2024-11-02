# Requestify
```bash
  npm i @emilo/requestify
```
```javascript
const requestify = require("@emilo/requestify").default;
(async () => {
  let listen, close, listening, routes;
  try {
    ({ listen, close, listening, routes } = requestify());
    routes([
      {
        path: "/hello",
        method: "GET",
        handler: (req, res) => {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Hello");
        },
      },
    ]);
    await listen();
  } catch (error) {
    console.error(error);
    if (listening) await close();
    process.exit(1);
  }
})();
```