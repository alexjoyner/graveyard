CREATE TABLE IF NOT EXISTS client (
	id SERIAL PRIMARY KEY,
	access_code character varying(10) NOT NULL UNIQUE,
	name character varying(20) NOT NULL UNIQUE,
	danger_number character varying(12) NOT NULL UNIQUE,
	warning_number character varying(12) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS point_group (
  id SERIAL PRIMARY KEY,
  client_id integer NOT NULL REFERENCES client(id) ON DELETE CASCADE ON UPDATE CASCADE,
  name character varying(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS point_group_x_point (
  point_group_id INTEGER,
  point_id INTEGER,
  CONSTRAINT point_group_x_point_pkey PRIMARY KEY (point_group_id, point_id)
);

CREATE TABLE IF NOT EXISTS point (
  id SERIAL PRIMARY KEY,
  name character varying(20) NOT NULL,
  client_id integer NOT NULL REFERENCES client(id) ON DELETE CASCADE ON UPDATE CASCADE,
  settings JSON NOT NULL
);

CREATE TABLE IF NOT EXISTS log (
  point_id integer REFERENCES point(id) ON DELETE CASCADE ON UPDATE CASCADE,
  datetime timestamp with time zone,
  val real NOT NULL,
  CONSTRAINT logs_pkey PRIMARY KEY (point_id, datetime)
);

INSERT INTO "public"."client"("access_code", "name", "danger_number", "warning_number") VALUES
('eesdemo','EES Demo Unit', '2523820384', '2523820384');

INSERT INTO "point" ("id", "name", "client_id", "settings") VALUES (1, E'Test Current Sensor', 1, E'{\r\n  "units": "A",\r\n  "max": 100,\r\n  "min": 0,\r\n  "ranges": [{\r\n    "lowerValue": 0,\r\n    "upperValue": 30,\r\n    "color": "danger",\r\n  "alertLevel": "danger"\r\n  }, {\r\n    "lowerValue": 30,\r\n    "upperValue": 40,\r\n    "color": "warning",\r\n  "alertLevel": "warning"\r\n  }, {\r\n    "lowerValue": 40,\r\n    "upperValue": 60,\r\n    "color": "success",\r\n  "alertLevel": "ok"\r\n  }, {\r\n    "lowerValue": 60,\r\n    "upperValue": 70,\r\n    "color": "warning",\r\n  "alertLevel": "warning"\r\n  }, {\r\n    "lowerValue": 70,\r\n    "upperValue": 100,\r\n    "color": "danger",\r\n  "alertLevel": "danger"\r\n  }]\r\n}');
INSERT INTO "point" ("id", "name", "client_id", "settings") VALUES (2, E'Test Temp Sensor', 1, E'{\r\n  "units": "°F",\r\n  "max": 100,\r\n  "min": 0,\r\n  "ranges": [{\r\n    "lowerValue": 0,\r\n    "upperValue": 50,\r\n    "color": "danger",\r\n  "alertLevel": "danger"\r\n  }, {\r\n    "lowerValue": 50,\r\n    "upperValue": 65,\r\n    "color": "warning",\r\n  "alertLevel": "warning"\r\n  }, {\r\n    "lowerValue": 65,\r\n    "upperValue": 75,\r\n    "color": "success",\r\n  "alertLevel": "ok"\r\n  }, {\r\n    "lowerValue": 75,\r\n    "upperValue": 85,\r\n    "color": "warning",\r\n  "alertLevel": "warning"\r\n  }, {\r\n    "lowerValue": 85,\r\n    "upperValue": 100,\r\n    "color": "danger",\r\n  "alertLevel": "danger"\r\n  }]\r\n}');
INSERT INTO "point" ("id", "name", "client_id", "settings") VALUES (3, E'Test CFM Sensor', 1, E'{\r\n  "units": "CFM",\r\n  "max": 500,\r\n  "min": 0,\r\n  "ranges": [{\r\n    "lowerValue": 0,\r\n    "upperValue": 200,\r\n    "color": "danger",\r\n  "alertLevel": "danger"\r\n  }, {\r\n    "lowerValue": 200,\r\n    "upperValue": 250,\r\n    "color": "warning",\r\n  "alertLevel": "warning"\r\n  }, {\r\n    "lowerValue": 250,\r\n    "upperValue": 325,\r\n    "color": "success",\r\n  "alertLevel": "ok"\r\n  }, {\r\n    "lowerValue": 325,\r\n    "upperValue": 375,\r\n    "color": "warning",\r\n  "alertLevel": "warning"\r\n  }, {\r\n    "lowerValue": 375,\r\n    "upperValue": 500,\r\n    "color": "danger",\r\n  "alertLevel": "danger"\r\n  }]\r\n}');

INSERT INTO "public"."point_group"("name", "client_id") VALUES
('Predict Maintenance',1),('Production',1),('Process',1);

INSERT INTO "public"."point_group_x_point"("point_id", "point_group_id") VALUES
(1,1),(2,2),(3,3),(1,2);

INSERT INTO "log"("point_id","datetime","val")
VALUES
(1,E'2018-09-11 16:18:43+00',76),
(1,E'2018-09-11 16:18:54+00',76),
(1,E'2018-09-11 16:19:05+00',76),
(1,E'2018-09-11 16:19:15+00',76),
(1,E'2018-09-11 16:19:26+00',76),
(1,E'2018-09-11 16:19:36+00',76),
(1,E'2018-09-11 16:19:47+00',76),
(1,E'2018-09-11 16:19:57+00',76),
(1,E'2018-09-11 16:20:08+00',76),
(1,E'2018-09-11 16:20:18+00',86),
(1,E'2018-09-11 16:20:29+00',85),
(1,E'2018-09-11 16:20:39+00',84),
(1,E'2018-09-11 16:20:50+00',82),
(1,E'2018-09-11 16:21:01+00',81),
(1,E'2018-09-11 16:21:11+00',81),
(1,E'2018-09-11 16:21:22+00',80),
(1,E'2018-09-11 16:21:32+00',80),
(1,E'2018-09-11 16:21:43+00',80),
(1,E'2018-09-11 16:21:53+00',79),
(1,E'2018-09-11 16:22:04+00',79),
(1,E'2018-09-11 16:22:14+00',79),
(1,E'2018-09-11 16:22:25+00',79),
(1,E'2018-09-11 16:22:35+00',78),
(1,E'2018-09-11 16:22:46+00',28),
(2,E'2018-09-11 16:22:46+00',68),
(3,E'2018-09-11 16:22:46+00',248);