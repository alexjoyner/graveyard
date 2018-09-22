CREATE TABLE client (
	code character varying(10) NOT NULL UNIQUE,
	name character varying(20) NOT NULL UNIQUE,
	id SERIAL PRIMARY KEY
);

CREATE TABLE point_group (
  id SERIAL PRIMARY KEY,
  client_id integer NOT NULL REFERENCES client(id) ON DELETE CASCADE ON UPDATE CASCADE,
  name character varying(20) NOT NULL,
);

CREATE TABLE point_group_x_point (
  point_group_id INTEGER,
  point_id INTEGER,
  CONSTRAINT point_group_x_point_pkey PRIMARY KEY (point_group_id, point_id)
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
),(
  'Test Sensor 3',
  1
);

INSERT INTO "public"."point_group"("name", "client_id") VALUES(
  'Predict Maintenance',
  1
),(
  'Production',
  1
),(
  'Process',
  1
);

INSERT INTO "public"."point_group_x_point"("point_id", "point_group_id") VALUES(
  1,
  1
),(
  2,
  1
),(
  3,
  1
);