CREATE TABLE "movies" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "title" VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE "reviewers" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "score" REAL NOT NULL,
    "reviewerId" INTEGER NOT NULL REFERENCES "reviewers"("id"),
    "movieId" INTEGER NOT NULL REFERENCES "movies"("id") 
);