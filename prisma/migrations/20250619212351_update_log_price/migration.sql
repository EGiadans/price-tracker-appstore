/*
  Warnings:

  - Added the required column `price` to the `TrackedAppLog` table without a default value. This is not possible if the table is not empty.
  - Made the column `trackedAppId` on table `TrackedAppLog` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "TrackedAppLog" DROP CONSTRAINT "TrackedAppLog_trackedAppId_fkey";

-- AlterTable
ALTER TABLE "TrackedAppLog" ADD COLUMN     "price" TEXT NOT NULL,
ALTER COLUMN "trackedAppId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "TrackedAppLog" ADD CONSTRAINT "TrackedAppLog_trackedAppId_fkey" FOREIGN KEY ("trackedAppId") REFERENCES "TrackedApp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
