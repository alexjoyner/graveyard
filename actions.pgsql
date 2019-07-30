ALTER TYPE units ADD VALUE 'hr';

CREATE TYPE units AS ENUM ('pcs', 'lb', 'g', 'hr');

CREATE TYPE transaction_type AS ENUM ('purchase', 'sale', 'make');

DROP FUNCTION update_inventory();
CREATE OR REPLACE FUNCTION update_inventory()
     RETURNS trigger as $$
     DECLARE
        curtime timestamp := now();
     BEGIN
        IF NEW.type = 'purchase' THEN
          UPDATE item SET last_modified = curtime, quantity = quantity + NEW.qty
            WHERE sku = NEW.sku;
        ELSIF NEW.type = 'sale' THEN
          UPDATE item SET last_modified = curtime, quantity = quantity - NEW.qty
            WHERE sku = NEW.sku;
        END IF;
        RETURN null;
     END;
$$ LANGUAGE plpgsql;
       
CREATE TRIGGER check_inventory
    AFTER INSERT ON transaction
    FOR EACH ROW
    EXECUTE PROCEDURE update_inventory();



-- Function Run When and Item is Made
CREATE OR REPLACE FUNCTION make_item()
  RETURNS trigger as $$
  DECLARE
    temprow RECORD;
  BEGIN
     FOR temprow IN
        SELECT component_sku, quantity
		FROM item_component
		WHERE item_sku = NEW.sku
     LOOP
        UPDATE item SET quantity = quantity - temprow.quantity WHERE sku = temprow.component_sku;
     END LOOP;
     UPDATE item SET quantity = quantity + NEW.quantity WHERE sku = NEW.sku;
     RETURN NEW;
  END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER new_make_action
    BEFORE INSERT ON action
    FOR EACH ROW
    WHEN (NEW.type = 'make')
    EXECUTE PROCEDURE make_item();

       
