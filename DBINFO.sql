                                                                                              CREATE TABLE "public"."vote_types" (
    "id" serial,
    "name" varchar(30) NOT NULL,
    PRIMARY KEY ("id")
);
CREATE TABLE "public"."votes" (
    "id" serial,
    "user_id" int NOT NULL,
    "post_id" int NOT NULL,
    "created_at" date NOT NULL,
    "vote_type_id" int NOT NULL,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("user_id") REFERENCES "public"."users"("_id") ON DELETE SET NULL,
    FOREIGN KEY ("post_id") REFERENCES "public"."posts"("_id") ON DELETE CASCADE,
    FOREIGN KEY ("vote_type_id") REFERENCES "public"."vote_types"("id")
);
CREATE OR REPLACE
FUNCTION apply_vote_to_score()
RETURNS trigger AS 
$BODY$
BEGIN
	IF (TG_OP = 'INSERT') THEN
		IF (NEW.vote_type_id = 1) THEN
			UPDATE posts SET ups = ups+1 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 2) THEN
			UPDATE posts SET dwns = dwns+1 WHERE _id = NEW.post_id;
		END IF;
	ELSEIF (TG_OP = 'UPDATE') THEN
		IF (NEW.vote_type_id = 3 AND OLD.vote_type_id = 1) THEN
			UPDATE posts SET ups = ups-1 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 3 AND OLD.vote_type_id = 2) THEN
			UPDATE posts SET dwns = dwns-1 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 2 AND OLD.vote_type_id = 1) THEN
			UPDATE posts SET ups = ups-1, dwns = dwns+1 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 2 AND OLD.vote_type_id = 3) THEN
			UPDATE posts SET dwns = dwns+1 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 1 AND OLD.vote_type_id = 2) THEN
			UPDATE posts SET ups = ups+1, dwns = dwns-1 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 1 AND OLD.vote_type_id = 3) THEN
			UPDATE posts SET ups = ups+1 WHERE _id = NEW.post_id;
		END IF;
	END IF;
	RETURN NEW;
END;
$BODY$ 
LANGUAGE 'plpgsql';

CREATE TRIGGER modify_score_from_vote
	AFTER INSERT OR UPDATE ON votes
	FOR EACH ROW EXECUTE PROCEDURE apply_vote_to_score();

#########  TRIGGER TO UPDATE TOP STATS ON ISSUE WHEN POINT IS ADDED  ###########
CREATE OR REPLACE
FUNCTION apply_vote_to_score()
RETURNS trigger AS 
$BODY$
BEGIN
	IF (TG_OP = 'INSERT') THEN
		IF (NEW.vote_type_id = 1) THEN
			UPDATE posts SET score = score+1 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 2) THEN
			UPDATE posts SET score = score-1 WHERE _id = NEW.post_id;
		END IF;
	ELSEIF (TG_OP = 'UPDATE') THEN
		IF (NEW.vote_type_id = 3 AND OLD.vote_type_id = 1) THEN
			UPDATE posts SET score = score-1 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 3 AND OLD.vote_type_id = 2) THEN
			UPDATE posts SET score = score+1 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 2 AND OLD.vote_type_id = 1) THEN
			UPDATE posts SET score = score-2 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 2 AND OLD.vote_type_id = 3) THEN
			UPDATE posts SET score = score-1 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 1 AND OLD.vote_type_id = 2) THEN
			UPDATE posts SET score = score+2 WHERE _id = NEW.post_id;
		ELSIF (NEW.vote_type_id = 1 AND OLD.vote_type_id = 3) THEN
			UPDATE posts SET score = score+1 WHERE _id = NEW.post_id;
		END IF;
	END IF;
	RETURN NEW;
END;
$BODY$ 
LANGUAGE 'plpgsql';

CREATE TRIGGER modify_score_from_vote
	AFTER INSERT OR UPDATE ON votes
	FOR EACH ROW EXECUTE PROCEDURE apply_vote_to_score();