CREATE OR REPLACE FUNCTION set_last_modified_to_now()
     RETURNS trigger as $$
     BEGIN
        NEW.last_modified := now();
        RETURN NEW;
     END;
$$ LANGUAGE plpgsql;

DROP TRIGGER manual_change_item ON item;

CREATE TRIGGER manual_change_item
    BEFORE UPDATE ON item
    FOR EACH ROW
    EXECUTE PROCEDURE set_last_modified_to_now();
