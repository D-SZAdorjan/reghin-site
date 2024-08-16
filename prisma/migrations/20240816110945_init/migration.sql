-- CreateTable
CREATE TABLE "buildings" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR DEFAULT '',
    "image" TEXT,
    "description" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "open_hours" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "address" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "contact_info" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "is_visitable" BOOLEAN DEFAULT false,
    "priority" BIGINT DEFAULT 0,
    "published" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "buildings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "churches" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR DEFAULT '',
    "image" TEXT,
    "description" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "open_hours" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "address" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "contact_info" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "is_visitable" BOOLEAN DEFAULT false,
    "priority" BIGINT DEFAULT 0,
    "published" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "churches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notable_personalities" (
    "id" BIGSERIAL NOT NULL,
    "first_name" VARCHAR DEFAULT '',
    "last_name" VARCHAR DEFAULT '',
    "image" TEXT,
    "description" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "lead" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}',
    "priority" BIGINT DEFAULT 0,
    "published" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notable_personalities_pkey" PRIMARY KEY ("id")
);
