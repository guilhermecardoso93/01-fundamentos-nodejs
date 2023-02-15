import { Readable, Writable, Transform } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    if (i > 100) {
      this.push(null);
    } else {
      const buff = Buffer.from(String(i));

      this.push(buff);
    }
  }
}

class InverseNumber extends Transform {
  _transform(chunk,callback, encoding) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream().pipe(new InverseNumber()).pipe(new MultiplyByTenStream());
