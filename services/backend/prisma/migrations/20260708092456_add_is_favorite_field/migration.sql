-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "is_favorite" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "is_read" SET DEFAULT false;
