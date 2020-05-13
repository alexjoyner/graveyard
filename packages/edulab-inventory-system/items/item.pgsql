CREATE TABLE "public"."item" (
    "id" serial,
    "sku" character(12) NOT NULL,
    "name" text NOT NULL,
    "quantity" integer NOT NULL,
    "vendor_purchase_link" text,
    "minimum" integer,
    "last_modified" timestamp with time zone NOT NULL DEFAULT now(),
    PRIMARY KEY ("id"),
    CHECK (minimum > -1)
);

CREATE OR REPLACE FUNCTION set_last_modified_to_now()
     RETURNS trigger as $$
     BEGIN
        NEW.last_modified := now();
        RETURN NEW;
     END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_last_modified_to_now()
    BEFORE UPDATE ON item
    FOR EACH ROW
    EXECUTE PROCEDURE set_last_modified_to_now();