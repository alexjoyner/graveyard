CREATE TABLE "public"."item_component" (
    "item_sku" character(7),
    "component_sku" character(7),
    FOREIGN KEY ("item_sku") REFERENCES "public"."item"("sku"),
    FOREIGN KEY ("component_sku") REFERENCES "public"."item"("sku"),
    CONSTRAINT item_components_pkey PRIMARY KEY (item_sku, component_sku)
);

DROP FUNCTION check_item_no_match_component CASCADE;

CREATE FUNCTION check_item_no_match_component()
  RETURNS trigger AS $$
  BEGIN
    IF NEW.item_sku = NEW.component_sku THEN
      RAISE EXCEPTION 'Item Sku CAN NOT EQUAL Component Sku';
    END IF;
    RETURN NEW;
 END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER new_item_component
  BEFORE INSERT ON item_component
  FOR EACH ROW EXECUTE PROCEDURE
    check_item_no_match_component();


CREATE FUNCTION check_no_circular_components_on_insert()
    RETURNS trigger AS $$
    DECLARE
        results varchar(7);
    BEGIN
        WITH RECURSIVE p(sku) AS (
            SELECT item_sku
                FROM item_component
                WHERE component_sku=NEW.item_sku
            UNION
            SELECT item_sku
                FROM p, item_component d
                WHERE p.sku = d.component_sku
            )
        SELECT * INTO results
        FROM p
        WHERE sku=NEW.component_sku;
        
        IF FOUND THEN
            RAISE EXCEPTION 'Circular dependencies are not allowed.';
        END IF;
        RETURN NEW;
    END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER new_item_component_dependancy_check
    BEFORE INSERT ON item_component
    FOR EACH ROW
    EXECUTE PROCEDURE check_no_circular_components_on_insert();
    
CREATE FUNCTION check_no_circular_components_on_update()
    RETURNS trigger AS $$
    DECLARE
        results varchar(7);
    BEGIN
        WITH RECURSIVE p(sku) AS (
            SELECT item_sku
                FROM item_component
                WHERE component_sku=NEW.item_sku
                    AND NOT (component_sku = OLD.component_sku AND item_sku = OLD.item_sku) -- hide old row
            UNION
            SELECT item_sku
                FROM p, item_component d
                WHERE p.sku = d.component_sku
                    AND NOT (component_sku = OLD.component_sku AND item_sku = OLD.item_sku) -- hide old row
            )
        SELECT * INTO results
        FROM p
        WHERE sku=NEW.component_sku;
        
        IF FOUND THEN
            RAISE EXCEPTION 'Circular dependencies are not allowed.';
        END IF;
        RETURN NEW;
    END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER update_item_component_dependancy_check
    BEFORE UPDATE ON item_component
    FOR EACH ROW
    EXECUTE PROCEDURE check_no_circular_components_on_update();
