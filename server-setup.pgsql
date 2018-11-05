CREATE TABLE client (
	code character varying(10) NOT NULL UNIQUE,
	name character varying(20) NOT NULL UNIQUE,
	id SERIAL PRIMARY KEY
);

CREATE TABLE point_group (
  id SERIAL PRIMARY KEY,
  client_id integer NOT NULL REFERENCES client(id) ON DELETE CASCADE ON UPDATE CASCADE,
  name character varying(20) NOT NULL
);

CREATE TABLE point_group_x_point (
  point_group_id INTEGER,
  point_id INTEGER,
  CONSTRAINT point_group_x_point_pkey PRIMARY KEY (point_group_id, point_id)
);

CREATE TABLE point (
  id SERIAL PRIMARY KEY,
  name character varying(20) NOT NULL,
  client_id integer NOT NULL REFERENCES client(id) ON DELETE CASCADE ON UPDATE CASCADE,
  settings JSON NOT NULL
);

CREATE TABLE log (
  point_id integer REFERENCES point(id) ON DELETE CASCADE ON UPDATE CASCADE,
  datetime timestamp with time zone,
  val real NOT NULL,
  CONSTRAINT logs_pkey PRIMARY KEY (point_id, datetime)
);

INSERT INTO "public"."client"("code", "name") VALUES
('eesdemo','EES Demo Unit');

INSERT INTO "point" ("id", "name", "client_id", "settings") VALUES (1, E'Test Current Sensor', 1, E'{\r\n  "units": "A",\r\n  "max": 100,\r\n  "min": 0,\r\n  "ranges": [{\r\n    "lowerValue": 0,\r\n    "upperValue": 30,\r\n    "color": "red"\r\n  }, {\r\n    "lowerValue": 30,\r\n    "upperValue": 40,\r\n    "color": "orange"\r\n  }, {\r\n    "lowerValue": 40,\r\n    "upperValue": 60,\r\n    "color": "green"\r\n  }, {\r\n    "lowerValue": 60,\r\n    "upperValue": 70,\r\n    "color": "orange"\r\n  }, {\r\n    "lowerValue": 70,\r\n    "upperValue": 100,\r\n    "color": "red"\r\n  }]\r\n}');
INSERT INTO "point" ("id", "name", "client_id", "settings") VALUES (2, E'Test Temp Sensor', 1, E'{\r\n  "units": "°F",\r\n  "max": 100,\r\n  "min": 0,\r\n  "ranges": [{\r\n    "lowerValue": 0,\r\n    "upperValue": 50,\r\n    "color": "blue"\r\n  }, {\r\n    "lowerValue": 50,\r\n    "upperValue": 65,\r\n    "color": "orange"\r\n  }, {\r\n    "lowerValue": 65,\r\n    "upperValue": 75,\r\n    "color": "green"\r\n  }, {\r\n    "lowerValue": 75,\r\n    "upperValue": 85,\r\n    "color": "orange"\r\n  }, {\r\n    "lowerValue": 85,\r\n    "upperValue": 100,\r\n    "color": "red"\r\n  }]\r\n}');
INSERT INTO "point" ("id", "name", "client_id", "settings") VALUES (3, E'Test CFM Sensor', 1, E'{\r\n  "units": "CFM",\r\n  "max": 500,\r\n  "min": 0,\r\n  "ranges": [{\r\n    "lowerValue": 0,\r\n    "upperValue": 200,\r\n    "color": "red"\r\n  }, {\r\n    "lowerValue": 200,\r\n    "upperValue": 250,\r\n    "color": "orange"\r\n  }, {\r\n    "lowerValue": 250,\r\n    "upperValue": 325,\r\n    "color": "green"\r\n  }, {\r\n    "lowerValue": 325,\r\n    "upperValue": 375,\r\n    "color": "orange"\r\n  }, {\r\n    "lowerValue": 375,\r\n    "upperValue": 500,\r\n    "color": "red"\r\n  }]\r\n}');

INSERT INTO "public"."point_group"("name", "client_id") VALUES
('Predict Maintenance',1),('Production',1),('Process',1);

INSERT INTO "public"."point_group_x_point"("point_id", "point_group_id") VALUES
(1,1),(2,2),(3,3),(1,2);