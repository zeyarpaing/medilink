import { createHash, pbkdf2Sync } from 'crypto';

export function debounce(fn: () => void, delay: number) {
  let timer: any = 0;
  // @ts-ignore
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
    }, delay);
  };
}

export class Password {
  password: string;
  constructor(password: string) {
    this.password = password;
  }

  encrypt() {
    const hashed = createHash('sha512').update(this.password).digest('binary');
    return pbkdf2Sync(hashed, process.env.SALT!, 1000, 64, 'sha512').toString('hex');
  }

  compare(encrypedPassword: string) {
    return this.encrypt() === encrypedPassword;
  }
}
