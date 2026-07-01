/*
  Warnings:

  - A unique constraint covering the columns `[guid]` on the table `Article` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Article_id_guid_key";

-- CreateIndex
CREATE UNIQUE INDEX "Article_guid_key" ON "Article"("guid");
