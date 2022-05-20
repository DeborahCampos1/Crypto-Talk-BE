DROP DATABASE IF EXISTS api_endpoint;
CREATE DATABASE api_endpoint;

\c api_endpoint;

DROP TABLE IF EXISTS resources;
 
CREATE TABLE resources(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT,
    category TEXT,
    url VARCHAR(2048),
    is_favorite BOOLEAN
);

