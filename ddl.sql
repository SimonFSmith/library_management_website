/*
Auteur: Simon Fournier-Smith

Date: 9 septembre 2021

À propos: Base de donnée représentant une bibliothèque.
Nous y retrouvons une table pour les usagers, une pour
les employés, une pour les livres et une pour les prêts
de livres.
*/

DROP DATABASE IF EXISTS bibliotheque;
CREATE DATABASE bibliotheque;

\c bibliotheque;

CREATE TABLE usager (
    id serial,
    nom varchar(25),
    prenom varchar(25),
    adresse varchar(50),
    ville varchar(50),
    code_postal varchar(10),
    province varchar(25),
    pays varchar(25),
    telephone_un bigint,
    telephone_deux bigint,
    courriel varchar(50),
    date_inscription date
);

CREATE TABLE employe (
    id serial,
    nom varchar(25),
    prenom varchar(25),
    adresse varchar(50),
    ville varchar(50),
    code_postal varchar(10),
    province varchar(25),
    pays varchar(25),
    telephone_un bigint,
    telephone_deux bigint,
    courriel varchar(50),
    date_embauche date
);

CREATE TABLE livre (
    id serial,
    titre varchar(50),
    auteur varchar(50),
    editeur varchar(50),
    pages int,
    date_parution date
);

CREATE TABLE pret (
    id serial,
    date_pret date,
    date_retour date
);

CREATE TABLE usager_pret (
    id_usager int,
    id_pret int
);

CREATE TABLE employe_pret (
    id_employe int,
    id_pret int
);

CREATE TABLE livre_pret (
    id_livre int,
    id_pret int
);