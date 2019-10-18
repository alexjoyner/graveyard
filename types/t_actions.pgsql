CREATE TABLE "public"."t_actions" (
    "id" serial,
    "name" text,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."t_actions" (name) VALUES
('sale'),
('purchase'),
('produce');