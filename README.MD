# Requestify
```bash
  npm i @emilo/requestify
```
```javascript
const Requestify = require("@emilo/requestify").default;
const app = Requestify();

(async () => {
  try {
    app.routes([
      {
        path: "/",
        method: "GET",
        handler: (req, res) => {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Hello World!");
        },
      },
    ]);
    const { port, hostname, backlog } = await app.listen();
    console.log(`Server started on PORT: ${port}`);
  } catch (error) {
    const errors = [error];
    try {
      await app.close();
    } catch (error) {
      errors.push(error);
    } finally {
      console.error(errors);
      process.exit(1);
    }
  }
})();
```

