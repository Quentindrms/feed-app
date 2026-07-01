-- CreateTable
CREATE TABLE "Feed" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "link" VARCHAR(200) NOT NULL,
    "created_at" DATE NOT NULL,

    CONSTRAINT "Feed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "link" VARCHAR(200) NOT NULL,
    "publish_date" DATE NOT NULL,
    "description" VARCHAR(300) NOT NULL,
    "is_read" BOOLEAN NOT NULL,
    "created_at" DATE NOT NULL,
    "feedId" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Feed_id_key" ON "Feed"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Article_id_key" ON "Article"("id");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_feedId_fkey" FOREIGN KEY ("feedId") REFERENCES "Feed"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
