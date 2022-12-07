-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
