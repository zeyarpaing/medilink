/*
  Warnings:

  - Added the required column `ownerId` to the `HealthcareProvider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `HealthcareProvider` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `HealthcareProvider` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProviderType" AS ENUM ('HOSPITAL', 'CLINIC', 'LABORATORY');

-- AlterTable
ALTER TABLE "HealthcareProvider" ADD COLUMN     "ownerId" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "ProviderType" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phone" TEXT;

-- AddForeignKey
ALTER TABLE "HealthcareProvider" ADD CONSTRAINT "HealthcareProvider_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
