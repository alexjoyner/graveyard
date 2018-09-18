CREATE TABLE client (
	code character varying(10) NOT NULL UNIQUE,
	name character varying(20) NOT NULL UNIQUE,
	id SERIAL PRIMARY KEY
);

CREATE TABLE point (
  id SERIAL PRIMARY KEY,
  name character varying(20) NOT NULL,
  client_id integer NOT NULL REFERENCES client(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE log (
  point_id integer REFERENCES point(id) ON DELETE CASCADE ON UPDATE CASCADE,
  datetime timestamp with time zone,
  val real NOT NULL,
  CONSTRAINT logs_pkey PRIMARY KEY (point_id, datetime)
);

INSERT INTO "public"."client"("code", "name") VALUES(
  'ees-demo',
  'EES Demo Unit'
);

INSERT INTO "public"."point"("name", "client_id") VALUES(
  'Test Sensor 1',
  1
),(
  'Test Sensor 2',
  1
);