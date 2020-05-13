CREATE TABLE "public"."action" (
    "id" serial,
    "type_id" integer,
    "item_id" integer NOT NULL,
    "quantity" integer NOT NULL,
    "has_details" BOOLEAN NOT NULL DEFAULT false,
    "created_at" timestamp with time zone NOT NULL DEFAULT now(),
    PRIMARY KEY ("id"),
    FOREIGN KEY ("type_id") REFERENCES "public"."t_actions"("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
    FOREIGN KEY ("item_id") REFERENCES "public"."item"("id") ON DELETE RESTRICT ON UPDATE RESTRICT,
    CHECK (quantity > 0)
);





       
