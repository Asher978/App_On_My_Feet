CREATE DATABASE app_database;

\c app_database

CREATE TABLE IF NOT EXISTS members (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    h_marathon INTEGER,
    f_marathon INTEGER,
    t_miles INTEGER,
    pic VARCHAR(1000)
);

CREATE TABLE IF NOT EXISTS runs (
    id SERIAL PRIMARY KEY,
    rundate DATE,
    milesRan INTEGER,
    street1 VARCHAR(500),
    street2 VARCHAR(500),
    city VARCHAR(500),
    member_id INTEGER REFERENCES members(id)
);

ALTER TABLE runs 

    ADD COLUMN Lat FLOAT8, 
    ADD COLUMN Log FLOAT8


-- TODO add columns for cross streets (should be an intersection)