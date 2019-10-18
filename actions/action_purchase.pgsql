CREATE TABLE "public"."action_purchase" (
    "action_id" integer,
    "expense" money NOT NULL,
    PRIMARY KEY ("action_id"),
    FOREIGN KEY ("action_id") REFERENCES "public"."action"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- When sale details are created, make sure the base action is of type sale

-- When sale is created, subtract that many from the inventory
CREATE OR REPLACE FUNCTION create_purchase()
     RETURNS trigger as $$
     BEGIN
      UPDATE item SET quantity = quantity - NEW.qty
        WHERE sku = NEW.action_id;
     END;
$$ LANGUAGE plpgsql;
       
CREATE TRIGGER trigger_new_purchase()
    AFTER INSERT ON transaction
    FOR EACH ROW
    EXECUTE PROCEDURE update_inventory();