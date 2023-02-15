import http from "node:http";

const users = [];

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    request.body = null
  }

  console.log(body.name);

  if (method === "GET" && url === "/users") {
    return response
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = body;

    users.push({
      name,
      email,
      id: 1,
    });
    return response.writeHead(201).end();
  }

  return response.whiteHead(404).end("Not Found");
});

server.listen(3333);
