// import { PrismaClient } from '@prisma/client';

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: ['query'],
//   });

// if (process.env.NODE_ENV !== 'production') {
//   globalForPrisma.prisma = prisma;
// }

// // Exporter le client prisma pour utilisation dans l'application 

// export default prisma;




// =============================================================================
// Configuration Prisma - src/lib/prisma.ts
// =============================================================================
 
import { PrismaClient } from '@prisma/client';
 
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
 
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
 
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
// Exporter le client Prisma pour utilisation dans l'application
export default prisma;



