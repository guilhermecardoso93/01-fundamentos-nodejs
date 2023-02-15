import http from "node:http";
import { Transform } from "node:stream";

const server = http.createServer((req, res) => {
  class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
      const transformed = Number(chunk.toString()) * -1;

      callback(null, Buffer.from(String(transformed)));
    }
  }
});

server.liste(3334);
