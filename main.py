from __future__ import print_function
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import psycopg2

# Initialisation de l'application
app = FastAPI()

app.mount("/site", StaticFiles(directory="site", html=True), name="site")

# Variables pour la connexion à la base de données
HOSTNAME = 'localhost'
USERNAME = 'SimFS'
PASSWORD = 'root'
DATABASE = 'bibliotheque'

# Requêtes SQL
# Comme il n'y a aucune pagination dans le projet et que la table usager contient 1 000 000 d'enregistrements,
# seulement les 20 derniers sont affichés, permettant ainsi de visualiser les nouveaux usagers en cas d'ajout.
SQL_ENDPOINT_USAGERS_GET = "SELECT * FROM usager ORDER BY id DESC LIMIT 20;"
SQL_ENDPOINT_EMPLOYEES_GET = "SELECT * FROM employe;"
SQL_ENDPOINT_LIVRES_GET = "SELECT * FROM livre;"
SQL_ENDPOINT_PRETS_GET = "SELECT * FROM pret;"
SQL_ENDPOINT_USAGER_PUT = "INSERT INTO usager (nom, prenom, adresse, ville, code_postal, province, pays, telephone_un, telephone_deux, courriel, date_inscription) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', {7}, {8}, '{9}', CAST('{10}' AS DATE));"
SQL_ENDPOINT_USAGER_PATCH = "UPDATE usager SET nom = '{0}', prenom = '{1}', adresse = '{2}', ville = '{3}', code_postal = '{4}', province = '{5}', pays = '{6}', telephone_un = {7}, telephone_deux = {8}, courriel = '{9}', date_inscription = CAST('{10}' AS DATE) WHERE id = {11};"
SQL_ENDPOINT_USAGER_DELETE = "DELETE FROM usager WHERE id = {0};"

# Connexion à la base de données
def _initialize_cursor():
    connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
    cursor = connection.cursor()
    return connection, cursor

# Envoi des requêtes à la base de données
def fetch_query(_query):
    connection, cursor = _initialize_cursor()
    cursor.execute(_query)
    response = cursor.fetchall()
    cursor.close()
    connection.close()
    return response

def execute_query(_query):
    connection, cursor = _initialize_cursor()
    cursor.execute(_query)
    connection.commit()
    cursor.close()
    connection.close()

# Afficher tous les usagers
@app.get("/usager/")
def afficher_usagers():
    return fetch_query(SQL_ENDPOINT_USAGERS_GET)

# Afficher tous les employés
@app.get("/employe")
def afficher_employes():
    return fetch_query(SQL_ENDPOINT_EMPLOYEES_GET)

# Afficher tous les livres
@app.get("/livre")
def afficher_livres():
    return fetch_query(SQL_ENDPOINT_LIVRES_GET)

# Afficher tous les prêts
@app.get("/pret")
def afficher_prets():
    return fetch_query(SQL_ENDPOINT_PRETS_GET)

# Ajouter un usager
@app.put("/usager/{nom}/{prenom}/{adresse}/{ville}/{code_postal}/{province}/{pays}/{telephone_un}/{telephone_deux}/{courriel}/{date_inscription}")
def ajouter_usager(nom: str, prenom: str, adresse: str, ville: str, code_postal: str, province: str, pays: str, telephone_un: int, telephone_deux: int, courriel: str, date_inscription: str):
    execute_query(SQL_ENDPOINT_USAGER_PUT.format(nom, prenom, adresse, ville, code_postal, province, pays, telephone_un, telephone_deux, courriel, date_inscription))

# Mettre à jour les renseignements d'un usager
@app.patch("/usager/{nom}/{prenom}/{adresse}/{ville}/{code_postal}/{province}/{pays}/{telephone_un}/{telephone_deux}/{courriel}/{date_inscription}/{usager_id}")
def modifier_usager(nom: str, prenom: str, adresse: str, ville: str, code_postal: str, province: str, pays: str, telephone_un: int, telephone_deux: int, courriel: str, date_inscription: str, usager_id: int):
    execute_query(SQL_ENDPOINT_USAGER_PATCH.format(nom, prenom, adresse, ville, code_postal, province, pays, telephone_un, telephone_deux, courriel, date_inscription, usager_id))

# Supprimer un usager
@app.delete("/usager/{usager_id}")
def supprimer_usager(usager_id: int):
    execute_query(SQL_ENDPOINT_USAGER_DELETE.format(usager_id))
