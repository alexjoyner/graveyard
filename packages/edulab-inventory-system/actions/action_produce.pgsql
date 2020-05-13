CREATE TABLE "public"."action_produce" (
    "action_id" integer,
    PRIMARY KEY ("action_id"),
    FOREIGN KEY ("action_id") REFERENCES "public"."action"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Function Run When and Item is Made
CREATE OR REPLACE FUNCTION produce_item()
  RETURNS trigger as $$
  DECLARE
    temprow RECORD;
  BEGIN
     FOR temprow IN
        SELECT component_id, quantity
		FROM item_component
		WHERE item_sku = NEW.sku
     LOOP
        UPDATE item SET quantity = quantity - temprow.quantity WHERE sku = temprow.component_id;
     END LOOP;
     UPDATE item SET quantity = quantity + NEW.quantity WHERE sku = NEW.sku;
     RETURN NEW;
  END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER new_make_action
    BEFORE INSERT ON action_produce
    FOR EACH ROW
    EXECUTE PROCEDURE produce_item();
