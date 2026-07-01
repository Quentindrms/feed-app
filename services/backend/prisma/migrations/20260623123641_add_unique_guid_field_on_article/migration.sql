/*
  Warnings:

  - A unique constraint covering the columns `[id,guid]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `guid` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "guid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Article_id_guid_key" ON "Article"("id", "guid");
