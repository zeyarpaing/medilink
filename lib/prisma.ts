import { PrismaClient } from '@prisma/client';

declare global {
  var prismaClient: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
  });
} else {
  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient({
      log: ['query', 'info', 'warn'],
    });
  }
  prisma = global.prismaClient;
}

export default prisma;
