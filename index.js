import http from "node:http";
import url from "node:url";
import fs from "node:fs";

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    if (
      q.pathname === "/about" ||
      q.pathname === "/contact-me" ||
      q.pathname === "/"
    ) {
      const fileName =
        (q.pathname === "/about" || q.pathname === "/contact-me"
          ? String(q.pathname).slice(1)
          : "index") + ".html";
      debugger;
      fs.readFile(fileName, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("404.html", (err, data) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080, () =>
    console.log("Server is running on http://localhost:8080/")
  );
