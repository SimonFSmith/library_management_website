/*
Auteur: Simon Fournier-Smith

Date: 9 septembre 2021

À propos: Ajout de données dans la base de données
bibliothèque. La table usager contiendra un million
d'enregistrements, la table employé trois, la table
livre six et la table prêt deux.
*/
\c bibliotheque

INSERT INTO usager (
    nom,
    prenom,
    adresse,
    ville,
    code_postal,
    province,
    pays,
    telephone_un,
    telephone_deux,
    courriel,
    date_inscription
)
SELECT
    ('[0:9]={Fournier, Cote, Legendre, Chouinard, Poirier, Element, Lavoie, Costisella, Roy, Aspirault}'::text[])[trunc(random()*10)],
    ('[0:9]={Simon, Benoit, Samuel, Pierre-Olivier, Felix, Alain, Eric, Gilles, Regis, Nancy}'::text[])[trunc(random()*10)],
    ('[0:4]={50 rue Lelievre, 39 rue Robert, 40 route 132, 18 boulevard York Ouest, 8 rue des Oiseaux}'::text[])[trunc(random()*5)],
    ('[0:4]={Montreal, Riviere-au-Renard, Perce, Chandler, St-Majorique}'::text[])[trunc(random()*5)],
    ('[0:4]={G4X 1D4, G4X 6F5, H9W 1D5, I4K 6H5, D9B 8B2}'::text[])[trunc(random()*5)],
    'Quebec',
    'Canada',
    (1::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text)::bigint,
    (1::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text || trunc(random() * 10)::text)::bigint,
    ('[0:4]={mon_adresse@icloud.com, mon_adresse@hotmail.com, mon_adresse@outlook.com, mon_adresse@gmail.com, mon_adresse@hotmail.fr}'::text[])[trunc(random()*5)],
    to_timestamp(10000000 + trunc(random()*900000000))
FROM generate_series(1, 1000000) s(i);

INSERT INTO employe (
    nom,
    prenom,
    adresse,
    ville,
    code_postal,
    province,
    pays,
    telephone_un,
    telephone_deux,
    courriel,
    date_embauche
)
VALUES
    (
        'Jalbert',
        'Paulette',
        '30 rue de la Reine',
        'Gaspe',
        'G4X 1K4',
        'Quebec',
        'Canada',
        15814759631,
        14183687412,
        'paulette.jalbert@outlook.com',
        TO_DATE('15/03/2012', 'DD/MM/YYYY')
    ),
    (
        'Smith',
        'Albert',
        '18 boulevard Gaspe',
        'Gaspe',
        'G4X 1G6',
        'Quebec',
        'Canada',
        14187456985,
        15492036145,
        'albert.smith@icloud.com',
        TO_DATE('15/03/2012', 'DD/MM/YYYY')
    ),
    (
        'Pavot',
        'Jocelyne',
        '45 rue du Peuple',
        'Gaspe',
        'G4X 1J6',
        'Quebec',
        'Canada',
        14187456987,
        14587123605,
        'jocelyne.pavot@hotmail.com',
        TO_DATE('10/01/2005', 'DD/MM/YYYY')
    );

INSERT INTO livre (
    titre,
    auteur,
    editeur,
    pages,
    date_parution
)
VALUES
    (
        'Premier Sang',
        'Amelie Nothomb',
        'Albin Michel',
        170,
        TO_DATE('01/08/2021', 'DD/MM/YYYY')
    ),
    (
        'Au bonheur des filles',
        'Elizabeth Gilbert',
        'Le Livre de Poche',
        230,
        TO_DATE('01/08/2021', 'DD/MM/YYYY')
    ),
    (
        'Belle comme le fleuve',
        'Melissa Perron',
        'Hurtubise',
        310,
        TO_DATE('01/08/2021', 'DD/MM/YYYY')
    ),
    (
        'Kukum',
        'Michel Jean',
        'Libre Expression',
        224,
        TO_DATE('13/09/2019', 'DD/MM/YYYY')
    ),
    (
        'La ou je me terre',
        'Caroline Dawson',
        'Remue-Menage',
        208,
        TO_DATE('02/11/2020', 'DD/MM/YYYY')
    ),
    (
        'Tableau final',
        'Larry Tremblay',
        'La Peuplade',
        216,
        TO_DATE('06/08/2021', 'DD/MM/YYYY')
    );

INSERT INTO pret (
    date_pret,
    date_retour
)
VALUES
    (
        TO_DATE('06/05/2021', 'DD/MM/YYYY'),
        TO_DATE('06/06/2021', 'DD/MM/YYYY')
    ),
    (
        TO_DATE('07/05/2021', 'DD/MM/YYYY'),
        TO_DATE('07/06/2021', 'DD/MM/YYYY')
    );