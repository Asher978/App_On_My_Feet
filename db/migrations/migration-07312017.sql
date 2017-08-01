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