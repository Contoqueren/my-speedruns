BEGIN;

DROP TABLE IF EXISTS "game", "category";

CREATE TABLE "game" (
    "id" serial PRIMARY KEY,
    "title" text NOT NULL
);

CREATE TABLE "category"(
    "id" serial PRIMARY KEY,
    "name" text NOT NULL,
    "video" text,
    "year" date NOT NULL
);

COMMIT;