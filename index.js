import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "about.html"))
);
app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "contact-me.html"))
);

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "404.html")));

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:8080/");
});

// http
//   .createServer((req, res) => {
//     const q = url.parse(req.url, true);
//     if (
//       q.pathname === "/about" ||
//       q.pathname === "/contact-me" ||
//       q.pathname === "/"
//     ) {
//       const fileName =
//         (q.pathname === "/about" || q.pathname === "/contact-me"
//           ? String(q.pathname).slice(1)
//           : "index") + ".html";
//       debugger;
//       fs.readFile(fileName, (err, data) => {
//         if (err) {
//           res.writeHead(404, { "Content-Type": "text/html" });
//           return res.end("404 Not Found");
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//     } else {
//       fs.readFile("404.html", (err, data) => {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//     }
//   })
//   .listen(8080, () =>
//     console.log("Server is running on http://localhost:8080/")
//   );
