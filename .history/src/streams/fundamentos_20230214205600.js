import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    if (i > 100) {
      this.push(null);
    } else {
      const buf = Buffer.from(i)

      this.push(buff)
    }
  }
}

new OneToHundredStream().pipe(process.stdout);
