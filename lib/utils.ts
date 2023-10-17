import { $modals, Modal } from '@/lib/store/modal';
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

  compare(encrypedPassword: string) {
    return this.encrypt() === encrypedPassword;
  }

  encrypt() {
    const hashed = createHash('sha512').update(this.password).digest('binary');
    return pbkdf2Sync(hashed, process.env.SALT!, 1000, 64, 'sha512').toString('hex');
  }
}

export function slugify(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export function cn(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export function openModal({ closeOnProceed, content, title, ...props }: Omit<Modal, 'id'>) {
  const modals = $modals.get();
  const keys = Object.keys(modals);
  const newId = keys.length;
  $modals.setKey(`${newId}`, {
    closeOnProceed: closeOnProceed ?? true,
    content,
    id: `${newId}`,
    title,
    ...props,
  } as never);
}
