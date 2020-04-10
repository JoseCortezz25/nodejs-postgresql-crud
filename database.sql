CREATE DATABASE yesut_db;

CREATE TABLE prueba(
    id_prueba serial NOT NULL,
    name character varying(120) NOT NULL,
    PRIMARY KEY(id_prueba)
)