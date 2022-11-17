let fs = require("fs");
let http = require("http");
fs.writeFile(
  "index.html",
  "<h1> Hello World </h1>\n <p> This is Sourabh... </p>",
  (error) => {
    console.log(error);
  }
);

http
  .createServer((req, resp) => {
    resp.writeHead(200, {
      "content-type": "text/html",
    });
    fs.readFile("./index.html", null, (error, data) => {
      if (error) {
        resp.write("page not found");
      } else {
        resp.write(data);
      }
      resp.end();
    });
  })
  .listen(5000, () => {
    console.log("server running at 5000");
  });
