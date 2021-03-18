BEGIN;

DROP TABLE IF EXISTS "game", "run", "event";

CREATE TABLE "game" (
    "id" serial PRIMARY KEY,
    "title" text NOT NULL
);

CREATE TABLE "event" (
    "id" serial PRIMARY KEY,
    "name" text NOT NULL,
    "start_year" integer NOT NULL
);

CREATE TABLE "run"(
    "id" serial PRIMARY KEY,
    "category" text NOT NULL,
    "video" text,
    "year" integer NOT NULL,
    "time" time NOT NULL,
    "game_id" integer NOT NULL REFERENCES "game"("id"),
    "event_id" integer NOT NULL REFERENCES "event"("id")
);

INSERT INTO "game" ("title") VALUES ('League Of Legends');

INSERT INTO "event" ("name","start_year") VALUES ('Grind personnel', '2016');

INSERT INTO "run" ("category","video","year","time","game_id", "event_id") VALUES ('Basic Tutorial', 'https://youtu.be/bZvCzb4ZqC0', '2016', '00:02:13',1,1);

COMMIT;