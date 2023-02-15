import http from "node:http";

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    return response
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      name: "Guilherme",
      email: "guilherme@gmail.com",
      id: 1,
    });
    return response.writeHead(201).end();
  }

  return response.end("Hello World");
});

server.listen(3333);
