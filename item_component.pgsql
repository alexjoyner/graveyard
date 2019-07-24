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
