/*
  Warnings:

  - You are about to drop the `buildings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `churches` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notable_personalities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "buildings";

-- DropTable
DROP TABLE "churches";

-- DropTable
DROP TABLE "notable_personalities";

-- CreateTable
CREATE TABLE "Article" (
    "id" BIGSERIAL NOT NULL,
    "title" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "subtitle" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "image" TEXT,
    "lead" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "content" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "category_id" BIGINT,
    "start_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "end_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleCategory" (
    "id" BIGSERIAL NOT NULL,
    "name" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "priority" BIGINT DEFAULT 0,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArticleCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Monument" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR DEFAULT '',
    "image" TEXT,
    "description" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "open_hours" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "address" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "contact_info" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "map_link" VARCHAR DEFAULT '',
    "category_id" BIGINT,
    "is_visitable" BOOLEAN DEFAULT false,
    "priority" BIGINT DEFAULT 0,
    "published" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Monument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonumentCategory" (
    "id" BIGSERIAL NOT NULL,
    "name" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "priority" BIGINT DEFAULT 0,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MonumentCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotablePersonalities" (
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

    CONSTRAINT "NotablePersonalities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "ArticleCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Monument" ADD CONSTRAINT "Monument_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "MonumentCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
