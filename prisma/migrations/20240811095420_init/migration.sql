-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "timer" INTEGER NOT NULL,
    "visible" BOOLEAN NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);
