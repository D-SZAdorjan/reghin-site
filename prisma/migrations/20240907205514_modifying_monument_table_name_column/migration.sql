/*
  Warnings:

  - The `name` column on the `Monument` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Monument" DROP COLUMN "name",
ADD COLUMN     "name" JSONB DEFAULT '{"de": "", "en": "", "fr": "", "hu": "", "ro": ""}';
