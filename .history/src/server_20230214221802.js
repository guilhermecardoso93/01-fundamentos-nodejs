import http from "node:http";

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  const buffers = [];

  for await (const chunk of req ) {
    buffers.push(chunk);
  }

  const fullbody = Buffer.concat(buffers).toString()

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

  return response.whiteHead(404).end("Not Found");
});

server.listen(3333);
