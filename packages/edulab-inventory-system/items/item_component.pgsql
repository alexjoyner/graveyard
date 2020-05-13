CREATE TABLE "public"."item_component" (
    "item_id" integer,
    "component_id" integer,
    "quantity" integer NOT NULL,
    FOREIGN KEY ("item_id") REFERENCES "public"."item"("id"),
    FOREIGN KEY ("component_id") REFERENCES "public"."item"("id"),
    CONSTRAINT item_components_pkey PRIMARY KEY (item_id, component_id),
    CHECK (quantity > 0)
);


CREATE FUNCTION check_item_no_match_component()
  RETURNS trigger AS $$
  BEGIN
    IF NEW.item_id = NEW.component_id THEN
      RAISE EXCEPTION 'Item id CAN NOT EQUAL Component id';
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
        WITH RECURSIVE p(id) AS (
            SELECT item_id
                FROM item_component
                WHERE component_id=NEW.item_id
            UNION
            SELECT item_id
                FROM p, item_component d
                WHERE p.id = d.component_id
            )
        SELECT * INTO results
        FROM p
        WHERE id=NEW.component_id;
        
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
        WITH RECURSIVE p(id) AS (
            SELECT item_id
                FROM item_component
                WHERE component_id=NEW.item_id
                    AND NOT (component_id = OLD.component_id AND item_id = OLD.item_id) -- hide old row
            UNION
            SELECT item_id
                FROM p, item_component d
                WHERE p.id = d.component_id
                    AND NOT (component_id = OLD.component_id AND item_id = OLD.item_id) -- hide old row
            )
        SELECT * INTO results
        FROM p
        WHERE id=NEW.component_id;
        
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
