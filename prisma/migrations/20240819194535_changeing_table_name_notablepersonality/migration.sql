/*
  Warnings:

  - You are about to drop the `NotablePersonalities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NotablePersonalities";

-- CreateTable
CREATE TABLE "NotablePersonality" (
    "id" BIGSERIAL NOT NULL,
    "first_name" VARCHAR DEFAULT '',
    "last_name" VARCHAR DEFAULT '',
    "image" TEXT,
    "description" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "occupation" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "priority" BIGINT DEFAULT 0,
    "published" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NotablePersonality_pkey" PRIMARY KEY ("id")
);
