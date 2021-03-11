BEGIN;

DROP TABLE IF EXISTS "game", "run";

CREATE TABLE "game" (
    "id" serial PRIMARY KEY,
    "title" text NOT NULL
);

CREATE TABLE "run"(
    "id" serial PRIMARY KEY,
    "category" text NOT NULL,
    "video" text,
    "year" integer NOT NULL,
    "game_id" integer NOT NULL REFERENCES "game"("id")
);

COMMIT;