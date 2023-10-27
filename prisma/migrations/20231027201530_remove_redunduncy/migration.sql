/*
  Warnings:

  - You are about to drop the column `doctorId` on the `Booking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_doctorId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "doctorId";
