CREATE TABLE "posts" (
	"id" serial NOT NULL,
	"owner" varchar(50) NOT NULL,
	"text" TEXT,
	"likes" integer NOT NULL DEFAULT 0,
	CONSTRAINT "post_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





