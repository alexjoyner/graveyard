CREATE TABLE IF NOT EXISTS "public"."action_sale" (
    "action_id" integer,
    "revenue" money NOT NULL,
    PRIMARY KEY ("action_id"),
    FOREIGN KEY ("action_id") REFERENCES "public"."action"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE OR REPLACE FUNCTION get_base_action(action_id int)
    RETURNS SETOF action as $$
    DECLARE
        baseAction action;
    BEGIN
        SELECT * INTO STRICT baseAction FROM action WHERE id = action_id;
        RETURN NEXT baseAction;
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
                RAISE EXCEPTION 'Action % not found', action_id;
            WHEN TOO_MANY_ROWS THEN
                RAISE EXCEPTION 'Action % not unique', action_id;
    END;
$$ LANGUAGE plpgsql;

-- When sale details are created, make sure the base action is of type sale
CREATE OR REPLACE FUNCTION is_sale_type(type_id int)
    RETURNS VOID as $$
    BEGIN
        IF type_id <> 1 THEN
            RAISE EXCEPTION 'Action not of type sale';
        END IF;
        RETURN;
    END;
$$ LANGUAGE plpgsql;

-- Remove the sale quantity from inventory
CREATE OR REPLACE FUNCTION remove_inventory_from_sale(item_id int, sale_quantity int)
    RETURNS VOID as $$
    BEGIN
        UPDATE item
        SET quantity = quantity - sale_quantity
        WHERE id = item_id;

        IF NOT FOUND THEN
            RAISE EXCEPTION 'Did not find item';
        END IF;

        RETURN;
    END;
$$ LANGUAGE plpgsql;

-- After everything is successful, update the base action
CREATE OR REPLACE FUNCTION set_action_has_details(action_id int)
    RETURNS VOID as $$
    BEGIN
        UPDATE action
        SET has_details = true
        WHERE id = action_id;

        IF NOT FOUND THEN
            RAISE EXCEPTION 'Did not find action';
        END IF;

        RETURN;
    END;
$$ LANGUAGE plpgsql;

-- When sale is created, subtract that many from the inventory
CREATE OR REPLACE FUNCTION create_sale()
    RETURNS trigger as $$
    DECLARE
        baseAction RECORD;
    BEGIN
        SELECT * INTO STRICT baseAction FROM get_base_action(NEW.action_id);
        PERFORM is_sale_type(baseAction.type_id);
        PERFORM remove_inventory_from_sale(baseAction.item_id, baseAction.quantity);
        PERFORM set_action_has_details(baseAction.id);
        RETURN NEW;
    END;
$$ LANGUAGE plpgsql;
       
CREATE TRIGGER trigger_new_sale
    AFTER INSERT ON action_sale
    FOR EACH ROW
    EXECUTE PROCEDURE create_sale();