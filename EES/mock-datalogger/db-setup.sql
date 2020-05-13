-- DDL generated by Postico 1.4.2
-- Not all database features are supported. Do not use for backup.

-- Table Definition ----------------------------------------------

CREATE TABLE client (
    code character varying(10) NOT NULL UNIQUE,
    name character varying(20) NOT NULL,
    id SERIAL PRIMARY KEY
);

CREATE TABLE metric (
    id SERIAL PRIMARY KEY,
    name character varying(20) NOT NULL,
    client_id integer REFERENCES client(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE metric_group (
    id SERIAL PRIMARY KEY,
    name character varying(20) NOT NULL,
    client_id integer NOT NULL REFERENCES client(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE metric_group_x_metric (
    metric_group_id integer REFERENCES metric_group(id) ON DELETE CASCADE ON UPDATE CASCADE,
    metric_id integer REFERENCES metric(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT metric_group_x_metric_pkey PRIMARY KEY (metric_group_id, metric_id)
);

CREATE TABLE log (
    metric_id integer REFERENCES metric(id) ON DELETE CASCADE ON UPDATE CASCADE,
    datetime timestamp with time zone,
    metricvalue real NOT NULL,
    CONSTRAINT logs_pkey PRIMARY KEY (metric_id, datetime)
);

INSERT INTO "public"."client"("code", "name") VALUES('ees-demo', 'EES Demo Unit') RETURNING "code", "name", "id";

INSERT INTO "public"."metric"("name", "client_id") VALUES('Demo Metric', 1) RETURNING "id", "name", "client_id";