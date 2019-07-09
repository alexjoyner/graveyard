ALTER TYPE units ADD VALUE 'hr';

CREATE TYPE units AS ENUM ('pcs', 'lb', 'g', 'hr');

CREATE TYPE transaction_type AS ENUM ('purchase', 'sale');

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

       
