/*
sommaire du code
============
configuration
capture des éléments html
fn/procs utils                  // Tout ce qui n'est pas rooting / handler
fn/procs subscriptions          // Rooting de l'application
fn/procs handlers / listeners   // Comportements de l'application
init / start                    // Initialisation de l'application
*/

// __________________________________________________________
// configuration
const i18n = {
    title: "Bibliothèque",
    btn_retour: 'Retour à l\'accueil',
    screen1: {
        title: 'Accueil',
        btn_nav: 'Accueil',
        btn_submit: 'Envoi formulaire',
        btn_screen2: 'Usagers',
        btn_screen3: 'Employés',
        btn_screen4: 'Livres',
        btn_screen5: 'Prêts'
    },
    screen2: {
        title: 'Usagers',
        btn_nav: 'Usagers',
        btn_cancel_select_user: 'Annuler',
        btn_add_user: 'Ajouter',
        btn_update_user: 'Modifier',
        btn_delete_user: 'Supprimer',
        tab_id: "ID",
        tab_nom: "Nom",
        tab_prenom: "Prénom",
        tab_adresse: "Adresse",
        tab_ville: "Ville",
        tab_code_postal: "Code postal",
        tab_province: "Province",
        tab_pays: "Pays",
        tab_telephone_un: "Téléphone (un)",
        tab_telephone_deux: "Téléphone (deux)",
        tab_courriel: "Courriel",
        tab_date_inscription: "Date d'inscription"
    },
    screen3: {
        title: 'Employés',
        btn_nav: 'Employés',
        tab_id: "ID",
        tab_nom: "Nom",
        tab_prenom: "Prénom",
        tab_adresse: "Adresse",
        tab_ville: "Ville",
        tab_code_postal: "Code postal",
        tab_province: "Province",
        tab_pays: "Pays",
        tab_telephone_un: "Téléphone (un)",
        tab_telephone_deux: "Téléphone (deux)",
        tab_courriel: "Courriel",
        tab_date_embauche: "Date d'embauche"
    },
    screen4: {
        title: 'Livres',
        btn_nav: 'Livres',
        tab_id: 'ID',
        tab_titre: 'Titre',
        tab_auteur: 'Auteur',
        tab_editeur: 'Éditeur',
        tab_pages: 'Pages',
        tab_date_parution: 'Date de parution'
    },
    screen5: {
        title: 'Prêts',
        btn_nav: 'Prêts',
        tab_id: 'ID',
        tab_pret: 'Date de prêt',
        tab_retour: 'Date de retour'
    }
};

console.log(i18n.title);
console.log(i18n.screen1.title);

// __________________________________________________________
// capture des éléments html
let i18n_current = i18n;
const HTTP_HEADER_CONTENT_TYPE = 'Content-Type';
const HTTP_METHOD_POST = 'POST';
const MEDIA_TYPE_APP_JSON = 'application/json';
const MEDIA_TYPE_APP_URL_ENCODED = 'application/x-www-form-urlencoded';
const MEDIA_TYPE_MULTI_FORM_DATA = 'multipart/form-data';
const ELEMENT_CLICK = 'click';
const XHR_ABORT = 'abort';
const XHR_ERROR = 'error';
const XHR_LOAD = 'load';
const OBJ_WINDOW_TITLE = document.querySelector('title');
const OBJ_MAIN_TITLE = document.querySelector('h1');
const OBJ_MAIN_NAV = document.querySelector('#nav');
const OBJ_NAV_BTN_2 = document.querySelector('#btn-screen2');
const OBJ_NAV_BTN_3 = document.querySelector('#btn-screen3');
const OBJ_NAV_BTN_4 = document.querySelector('#btn-screen4');
const OBJ_NAV_BTN_5 = document.querySelector('#btn-screen5');
const OBJ_MAIN_CONTENT = document.querySelector('#main');
const OBJ_SCREEN_TITLE = document.querySelector('h2');
const OBJ_TOP_SECTION = '.top-section';
const OBJ_CONTENT = '.content.';
const OBJ_BOTTOM_SECTION = '.bottom-section';
const SEL_FORM1_INPUT_NAME1 = '#form1-input-name1';
const SEL_FORM1_BTN_1_SUBMIT = '#form1-btn1-submit';
const SEL_FORM1_BTN_2_SUBMIT = '#form1-btn2-submit';
const SEL_FORM1_BTN_3_SUBMIT = '#form1-btn3-submit';
const SEL_FORM1_BTN_4_SUBMIT = '#form1-btn4-submit';
const EL_FORM_1_INPUT_NAME_1 = document.querySelector(SEL_FORM1_INPUT_NAME1);
const EL_FORM_1_BTN_1_SUBMIT = document.querySelector(SEL_FORM1_BTN_1_SUBMIT);
const EL_FORM_1_BTN_2_SUBMIT = document.querySelector(SEL_FORM1_BTN_2_SUBMIT);
const EL_FORM_1_BTN_3_SUBMIT = document.querySelector(SEL_FORM1_BTN_3_SUBMIT);
const EL_FORM_1_BTN_4_SUBMIT = document.querySelector(SEL_FORM1_BTN_4_SUBMIT);

// Écran 1
const SEL_SCREEN_1 = '#screen1';
const SEL_SCREEN_1_SCREEN_TITLE = '#screen1 > h2';
const SEL_SCREEN_1_TOP_SECTION = '#screen1 > .top-section';
const SEL_SCREEN_1_CONTENT = '#screen1 > .content';
const SEL_SCREEN_1_BOTTOM_SECTION = '#screen1 > .bottom-section';
const SEL_NAV_BTN_1 = '#btn-screen1';
const SEL_FORM_1_INPUT_NAME_1 = '#form1-input-name1';
const SEL_FORM_1_BTN_SUBMIT = '#form1-submit-btn';
const SEL_SCREEN_1_TO_SCREEN_2_BTN = '#screen1 #btn-screen2';
const SEL_SCREEN_1_TO_SCREEN_3_BTN = '#screen1 #btn-screen3';
const SEL_SCREEN_1_TO_SCREEN_4_BTN = '#screen1 #btn-screen4';
const SEL_SCREEN_1_TO_SCREEN_5_BTN = '#screen1 #btn-screen5';
const OBJ_SCREEN_1 = document.querySelector(SEL_SCREEN_1);
const OBJ_SCREEN_1_SCREEN_TITLE = OBJ_SCREEN_1.querySelector(SEL_SCREEN_1_SCREEN_TITLE);
const OBJ_SCREEN_1_TOP_SECTION = OBJ_SCREEN_1.querySelector(SEL_SCREEN_1_TOP_SECTION);
const OBJ_SCREEN_1_CONTENT = OBJ_SCREEN_1.querySelector(SEL_SCREEN_1_CONTENT);
const OBJ_SCREEN_1_BOTTOM_SECTION = OBJ_SCREEN_1.querySelector(SEL_SCREEN_1_BOTTOM_SECTION);
const OBJ_NAV_BTN_1 = document.querySelector(SEL_NAV_BTN_1);
const OBJ_FORM_1_INPUT_NAME_1 = OBJ_SCREEN_1.querySelector(SEL_FORM_1_INPUT_NAME_1);
const OBJ_FORM_1_BTN_SUBMIT = OBJ_SCREEN_1.querySelector(SEL_FORM_1_BTN_SUBMIT);
const OBJ_SCREEN_1_TO_SCREEN_2_BTN = document.querySelector(SEL_SCREEN_1_TO_SCREEN_2_BTN);
const OBJ_SCREEN_1_TO_SCREEN_3_BTN = document.querySelector(SEL_SCREEN_1_TO_SCREEN_3_BTN);
const OBJ_SCREEN_1_TO_SCREEN_4_BTN = document.querySelector(SEL_SCREEN_1_TO_SCREEN_4_BTN);
const OBJ_SCREEN_1_TO_SCREEN_5_BTN = document.querySelector(SEL_SCREEN_1_TO_SCREEN_5_BTN);

// Écran 2
const SEL_SCREEN_2 = '#screen2';
const SEL_SCREEN_2_SCREEN_TITLE = '#screen2 > h2';
const SEL_SCREEN_2_TOP_SECTION = '#screen2 > .top-section';
const SEL_SCREEN_2_CONTENT = '#screen2 > .content';
const SEL_SCREEN_2_BACK_SCREEN_1_BTN = '#screen2 .btn-back-screen1';
const SEL_CANCEL_SELECT_USER_BTN = '#screen2 .btn-cancel-select-user';
const SEL_ADD_USER_BTN = '#screen2 .btn-add-user';
const SEL_UPDATE_USER_BTN = '#screen2 .btn-update-user';
const SEL_DELETE_USER_BTN = '#screen2 .btn-delete-user';
const SEL_SCREEN_2_TABLE_ID = '#screen2 .usager-id';
const SEL_SCREEN_2_TABLE_NOM = '#screen2 .usager-nom';
const SEL_SCREEN_2_TABLE_PRENOM = '#screen2 .usager-prenom';
const SEL_SCREEN_2_TABLE_ADRESSE = '#screen2 .usager-adresse';
const SEL_SCREEN_2_TABLE_VILLE = '#screen2 .usager-ville';
const SEL_SCREEN_2_TABLE_CODE_POSTAL = '#screen2 .usager-code-postal';
const SEL_SCREEN_2_TABLE_PROVINCE = '#screen2 .usager-province';
const SEL_SCREEN_2_TABLE_PAYS = '#screen2 .usager-pays';
const SEL_SCREEN_2_TABLE_TELEPHONE_UN = '#screen2 .usager-telephone-un';
const SEL_SCREEN_2_TABLE_TELEPHONE_DEUX = '#screen2 .usager-telephone-deux';
const SEL_SCREEN_2_TABLE_COURRIEL = '#screen2 .usager-courriel';
const SEL_SCREEN_2_TABLE_DATE_INSCRIPTION = '#screen2 .usager-date-inscription';
const SEL_SCREEN_2_INPUT_ID = '#screen2 .input-usager-id';
const SEL_SCREEN_2_INPUT_PRENOM = '#screen2 .input-usager-prenom';
const SEL_SCREEN_2_INPUT_NOM = '#screen2 .input-usager-nom';
const SEL_SCREEN_2_INPUT_ADRESSE = '#screen2 .input-usager-adresse';
const SEL_SCREEN_2_INPUT_VILLE = '#screen2 .input-usager-ville';
const SEL_SCREEN_2_INPUT_TELEPHONE_UN = '#screen2 .input-usager-telephone-un';
const SEL_SCREEN_2_INPUT_PROVINCE = '#screen2 .input-usager-province';
const SEL_SCREEN_2_INPUT_TELEPHONE_DEUX = '#screen2 .input-usager-telephone-deux';
const SEL_SCREEN_2_INPUT_CODE_POSTAL = '#screen2 .input-usager-code-postal';
const SEL_SCREEN_2_INPUT_COURRIEL = '#screen2 .input-usager-courriel';
const SEL_SCREEN_2_INPUT_PAYS = '#screen2 .input-usager-pays';
const SEL_SCREEN_2_INPUT_DATE_INSCRIPTION = '#screen2 .input-usager-date-inscription';
const OBJ_SCREEN_2 = document.querySelector(SEL_SCREEN_2);
const OBJ_SCREEN_2_SCREEN_TITLE = OBJ_SCREEN_2.querySelector(SEL_SCREEN_2_SCREEN_TITLE);
const obj_s2_top_section = OBJ_SCREEN_2.querySelector(SEL_SCREEN_2_TOP_SECTION);
const obj_s2_content = OBJ_SCREEN_2.querySelector(SEL_SCREEN_2_CONTENT);
const obj_screen2_back_screen1_btn = document.querySelector(SEL_SCREEN_2_BACK_SCREEN_1_BTN);
const obj_cancel_select_user_btn = document.querySelector(SEL_CANCEL_SELECT_USER_BTN);
const obj_add_user_btn = document.querySelector(SEL_ADD_USER_BTN);
const obj_update_user_btn = document.querySelector(SEL_UPDATE_USER_BTN);
const obj_delete_user_btn = document.querySelector(SEL_DELETE_USER_BTN);
const obj_screen2_table_id = document.querySelector(SEL_SCREEN_2_TABLE_ID);
const obj_screen2_table_nom = document.querySelector(SEL_SCREEN_2_TABLE_NOM);
const obj_screen2_table_prenom = document.querySelector(SEL_SCREEN_2_TABLE_PRENOM);
const obj_screen2_table_adresse = document.querySelector(SEL_SCREEN_2_TABLE_ADRESSE);
const obj_screen2_table_ville = document.querySelector(SEL_SCREEN_2_TABLE_VILLE);
const obj_screen2_table_code_postal = document.querySelector(SEL_SCREEN_2_TABLE_CODE_POSTAL);
const obj_screen2_table_province = document.querySelector(SEL_SCREEN_2_TABLE_PROVINCE);
const obj_screen2_table_pays = document.querySelector(SEL_SCREEN_2_TABLE_PAYS);
const obj_screen2_table_telephone_un = document.querySelector(SEL_SCREEN_2_TABLE_TELEPHONE_UN);
const obj_screen2_table_telephone_deux = document.querySelector(SEL_SCREEN_2_TABLE_TELEPHONE_DEUX);
const obj_screen2_table_courriel = document.querySelector(SEL_SCREEN_2_TABLE_COURRIEL);
const obj_screen2_table_date_inscription = document.querySelector(SEL_SCREEN_2_TABLE_DATE_INSCRIPTION);
const obj_screen2_input_id = document.querySelector(SEL_SCREEN_2_INPUT_ID);
const obj_screen2_input_prenom = document.querySelector(SEL_SCREEN_2_INPUT_PRENOM);
const obj_screen2_input_nom = document.querySelector(SEL_SCREEN_2_INPUT_NOM);
const obj_screen2_input_adresse = document.querySelector(SEL_SCREEN_2_INPUT_ADRESSE);
const obj_screen2_input_ville = document.querySelector(SEL_SCREEN_2_INPUT_VILLE);
const obj_screen2_input_telephone_un = document.querySelector(SEL_SCREEN_2_INPUT_TELEPHONE_UN);
const obj_screen2_input_province = document.querySelector(SEL_SCREEN_2_INPUT_PROVINCE);
const obj_screen2_input_telephone_deux = document.querySelector(SEL_SCREEN_2_INPUT_TELEPHONE_DEUX);
const obj_screen2_input_code_postal = document.querySelector(SEL_SCREEN_2_INPUT_CODE_POSTAL);
const obj_screen2_input_courriel = document.querySelector(SEL_SCREEN_2_INPUT_COURRIEL);
const obj_screen2_input_pays = document.querySelector(SEL_SCREEN_2_INPUT_PAYS);
const obj_screen2_input_date_inscription = document.querySelector(SEL_SCREEN_2_INPUT_DATE_INSCRIPTION);

// Écran 3
const SEL_SCREEN_3 = '#screen3';
const SEL_SCREEN_3_SCREEN_TITLE = '#screen3 > h2';
const SEL_SCREEN_3_TOP_SECTION = '#screen3 > .top-section';
const SEL_SCREEN_3_CONTENT = '#screen3 > .content';
const SEL_SCREEN_3_BACK_SCREEN_1_BTN = '#screen3 .btn-back-screen1';
const SEL_SCREEN_3_TABLE_ID = '#screen3 .employe-id';
const SEL_SCREEN_3_TABLE_NOM = '#screen3 .employe-nom';
const SEL_SCREEN_3_TABLE_PRENOM = '#screen3 .employe-prenom';
const SEL_SCREEN_3_TABLE_ADRESSE = '#screen3 .employe-adresse';
const SEL_SCREEN_3_TABLE_VILLE = '#screen3 .employe-ville';
const SEL_SCREEN_3_TABLE_CODE_POSTAL = '#screen3 .employe-code-postal';
const SEL_SCREEN_3_TABLE_PROVINCE = '#screen3 .employe-province';
const SEL_SCREEN_3_TABLE_PAYS = '#screen3 .employe-pays';
const SEL_SCREEN_3_TABLE_TELEPHONE_UN = '#screen3 .employe-telephone-un';
const SEL_SCREEN_3_TABLE_TELEPHONE_DEUX = '#screen3 .employe-telephone-deux';
const SEL_SCREEN_3_TABLE_COURRIEL = '#screen3 .employe-courriel';
const SEL_SCREEN_3_TABLE_DATE_EMBAUCHE = '#screen3 .employe-date-embauche';
const obj_screen_3 = document.querySelector(SEL_SCREEN_3);
const obj_s3_screen_title = obj_screen_3.querySelector(SEL_SCREEN_3_SCREEN_TITLE);
const obj_s3_top_section = obj_screen_3.querySelector(SEL_SCREEN_3_TOP_SECTION);
const obj_s3_content = obj_screen_3.querySelector(SEL_SCREEN_3_CONTENT);
const obj_screen3_back_screen1_btn = document.querySelector(SEL_SCREEN_3_BACK_SCREEN_1_BTN);
const obj_screen3_table_id = document.querySelector(SEL_SCREEN_3_TABLE_ID);
const obj_screen3_table_nom = document.querySelector(SEL_SCREEN_3_TABLE_NOM);
const obj_screen3_table_prenom = document.querySelector(SEL_SCREEN_3_TABLE_PRENOM);
const obj_screen3_table_adresse = document.querySelector(SEL_SCREEN_3_TABLE_ADRESSE);
const obj_screen3_table_ville = document.querySelector(SEL_SCREEN_3_TABLE_VILLE);
const obj_screen3_table_code_postal = document.querySelector(SEL_SCREEN_3_TABLE_CODE_POSTAL);
const obj_screen3_table_province = document.querySelector(SEL_SCREEN_3_TABLE_PROVINCE);
const obj_screen3_table_pays = document.querySelector(SEL_SCREEN_3_TABLE_PAYS);
const obj_screen3_table_telephone_un = document.querySelector(SEL_SCREEN_3_TABLE_TELEPHONE_UN);
const obj_screen3_table_telephone_deux = document.querySelector(SEL_SCREEN_3_TABLE_TELEPHONE_DEUX);
const obj_screen3_table_courriel = document.querySelector(SEL_SCREEN_3_TABLE_COURRIEL);
const obj_screen3_table_date_embauche = document.querySelector(SEL_SCREEN_3_TABLE_DATE_EMBAUCHE);

// Écran 4
const SEL_SCREEN_4 = '#screen4';
const SEL_SCREEN_4_SCREEN_TITLE = '#screen4 > h2';
const SEL_SCREEN_4_TOP_SECTION = '#screen4 > .top-section';
const SEL_SCREEN_4_CONTENT = '#screen4 > .content';
const SEL_SCREEN_4_BACK_SCREEN_1_BTN = '#screen4 .btn-back-screen1';
const SEL_SCREEN_4_TABLE_ID = '#screen4 .livre-id';
const SEL_SCREEN_4_TABLE_TITRE = '#screen4 .livre-titre';
const SEL_SCREEN_4_TABLE_AUTEUR = '#screen4 .livre-auteur';
const SEL_SCREEN_4_TABLE_EDITEUR = '#screen4 .livre-editeur';
const SEL_SCREEN_4_TABLE_PAGES = '#screen4 .livre-pages';
const SEL_SCREEN_4_TABLE_DATE_PARUTION = '#screen4 .livre-date-parution';
const obj_screen_4 = document.querySelector(SEL_SCREEN_4);
const obj_s4_screen_title = obj_screen_4.querySelector(SEL_SCREEN_4_SCREEN_TITLE);
const obj_s4_top_section = obj_screen_4.querySelector(SEL_SCREEN_4_TOP_SECTION);
const obj_s4_content = obj_screen_4.querySelector(SEL_SCREEN_4_CONTENT);
const obj_screen4_back_screen1_btn = document.querySelector(SEL_SCREEN_4_BACK_SCREEN_1_BTN);
const obj_screen4_table_id = document.querySelector(SEL_SCREEN_4_TABLE_ID);
const obj_screen4_table_titre = document.querySelector(SEL_SCREEN_4_TABLE_TITRE);
const obj_screen4_table_auteur = document.querySelector(SEL_SCREEN_4_TABLE_AUTEUR);
const obj_screen4_table_editeur = document.querySelector(SEL_SCREEN_4_TABLE_EDITEUR);
const obj_screen4_table_pages = document.querySelector(SEL_SCREEN_4_TABLE_PAGES);
const obj_screen4_table_date_parution = document.querySelector(SEL_SCREEN_4_TABLE_DATE_PARUTION);

// Écran 5
const SEL_SCREEN_5 = '#screen5';
const SEL_SCREEN_5_SCREEN_TITLE = '#screen5 > h2';
const SEL_SCREEN_5_TOP_SECTION = '#screen5 > .top-section';
const SEL_SCREEN_5_CONTENT = '#screen5 > .content';
const SEL_SCREEN_5_BACK_SCREEN_1_BTN = '#screen5 .btn-back-screen1';
const SEL_SCREEN_5_TABLE_ID = '#screen5 .pret-id';
const SEL_SCREEN_5_TABLE_DATE_PRET = '#screen5 .pret-date-pret';
const SEL_SCREEN_5_TABLE_DATE_RETOUR = '#screen5 .pret-date-retour';
const obj_screen_5 = document.querySelector(SEL_SCREEN_5);
const obj_s5_screen_title = obj_screen_5.querySelector(SEL_SCREEN_5_SCREEN_TITLE);
const obj_s5_top_section = obj_screen_5.querySelector(SEL_SCREEN_5_TOP_SECTION);
const obj_s5_content = obj_screen_5.querySelector(SEL_SCREEN_5_CONTENT);
const obj_screen5_back_screen1_btn = document.querySelector(SEL_SCREEN_5_BACK_SCREEN_1_BTN);
const obj_screen5_table_id = document.querySelector(SEL_SCREEN_5_TABLE_ID);
const obj_screen5_table_date_pret = document.querySelector(SEL_SCREEN_5_TABLE_DATE_PRET);
const obj_screen5_table_date_retour = document.querySelector(SEL_SCREEN_5_TABLE_DATE_RETOUR);

let obj_current_screen = OBJ_SCREEN_1;

// __________________________________________________________
// fn/procs utils
function init_user_interface() {
    // Efface tous les écrans sauf le title et le nav
    OBJ_SCREEN_1.style.display = 'none';
    OBJ_SCREEN_2.style.display = 'none';
    obj_screen_3.style.display = 'none';
    obj_screen_4.style.display = 'none';
    obj_screen_5.style.display = 'none';
    obj_current_screen.style.display = 'block';
}

function is_valid_date(date_string) {
    // Vérifie sur le date est entrée dans un format valide
    let split = /^\d{4}-\d{2}-\d{2}$/;
    if(!date_string.match(split)) {
        return false;
    }
    let d = new Date(date_string);
    let d_num = d.getTime();
    if(!d_num && d_num !== 0){
        return false;
    }
    return d.toISOString().slice(0,10) === date_string;
}

// __________________________________________________________
// fn/procs subscriptions
function on_open_send_xhr(xhr_object, verb, url, sync, data) {
    xhr_object.open(verb, url, sync);
    console.log('sending now!');
    xhr_object.send(data);
}

const send_express = function(xhr_object, verb, url, opt) {
    xhr_object.open(verb, url, opt);
    console.log('sending now!');
    xhr_object.send();
}

function on_add_user_btn_click(event) {
    // Ajouter un usager dans la base de données
    let prenom = obj_screen2_input_prenom.value;
    let nom = obj_screen2_input_nom.value;
    let adresse = obj_screen2_input_adresse.value;
    let ville = obj_screen2_input_ville.value;
    let telephone_un = parseInt(obj_screen2_input_telephone_un.value);
    let province = obj_screen2_input_province.value;
    let telephone_deux = parseInt(obj_screen2_input_telephone_deux.value);
    let code_postal = obj_screen2_input_code_postal.value;
    let courriel = obj_screen2_input_courriel.value;
    let pays = obj_screen2_input_pays.value;
    let date_inscription = obj_screen2_input_date_inscription.value;

    const xhr_add_user = new XMLHttpRequest();
    console.log('sending user data...');
    if (prenom === "" || nom === "" || adresse === "" || ville === "" || telephone_un === "" || province === "" || telephone_deux === "" || code_postal === "" || courriel === "" || pays === "" || date_inscription === ""){
        alert("Vous devez remplir tous les champs.");
    }
    else if (isNaN(telephone_un) || isNaN(telephone_deux)){
        alert("Le numéro de téléphone doit seulement contenir des chiffres.");
    }
    else if (!is_valid_date(date_inscription)){
        alert("Entrez la date dans le format AAAA-MM-JJ avec les traits d'union.");
    }
    else {
        const xhr_user_url = 'http://127.0.0.1:8000/usager/' + nom + '/' + prenom + '/' + adresse + '/' + ville + '/' +
                                code_postal + '/' + province + '/' + pays + '/' + telephone_un + '/' + telephone_deux + '/' +
                                courriel + '/' + date_inscription;
    
        send_express(xhr_add_user, "PUT", xhr_user_url, true);
        alert("Usager ajouté avec succès.\nRetour à la page d'accueil.");
        obj_screen2_input_id.value = '';
        obj_screen2_input_prenom.value = '';
        obj_screen2_input_nom.value = '';
        obj_screen2_input_adresse.value = '';
        obj_screen2_input_ville.value = '';
        obj_screen2_input_telephone_un.value = '';
        obj_screen2_input_province.value = '';
        obj_screen2_input_telephone_deux.value = '';
        obj_screen2_input_code_postal.value = '';
        obj_screen2_input_courriel.value = '';
        obj_screen2_input_pays.value = '';
        obj_screen2_input_date_inscription.value = '';
        // Retour à l'accueil permettant de rafraîchir le tableau
        window.location.reload();
    }
}

function on_update_user_btn_click(event) {
    // Modifier un usager dans la base de données
    let id = obj_screen2_input_id.value;
    let prenom = obj_screen2_input_prenom.value;
    let nom = obj_screen2_input_nom.value;
    let adresse = obj_screen2_input_adresse.value;
    let ville = obj_screen2_input_ville.value;
    let telephone_un = obj_screen2_input_telephone_un.value;
    let province = obj_screen2_input_province.value;
    let telephone_deux = obj_screen2_input_telephone_deux.value;
    let code_postal = obj_screen2_input_code_postal.value;
    let courriel = obj_screen2_input_courriel.value;
    let pays = obj_screen2_input_pays.value;
    let date_inscription = obj_screen2_input_date_inscription.value;

    const xhr_add_user = new XMLHttpRequest();
    console.log('sending user data...');
    if (prenom === "" || nom === "" || adresse === "" || ville === "" || telephone_un === "" || province === "" || telephone_deux === "" || code_postal === "" || courriel === "" || pays === "" || date_inscription === ""){
        alert("Vous devez remplir tous les champs.");
    }
    else if (isNaN(telephone_un) || isNaN(telephone_deux)){
        alert("Le numéro de téléphone doit seulement contenir des chiffres.");
    }
    else if (!is_valid_date(date_inscription)){
        alert("Entrez la date dans le format AAAA-MM-JJ avec les traits d'union.");
    }
    else {
        const xhr_user_url = 'http://127.0.0.1:8000/usager/' + nom + '/' + prenom + '/' + adresse + '/' + ville + '/' +
                                code_postal + '/' + province + '/' + pays + '/' + telephone_un + '/' + telephone_deux + '/' +
                                courriel + '/' + date_inscription + '/' + id;
    
        send_express(xhr_add_user, "PATCH", xhr_user_url, true);
        alert("Usager modifié avec succès.\nRetour à la page d'accueil.");
        obj_screen2_input_id.value = '';
        obj_screen2_input_prenom.value = '';
        obj_screen2_input_nom.value = '';
        obj_screen2_input_adresse.value = '';
        obj_screen2_input_ville.value = '';
        obj_screen2_input_telephone_un.value = '';
        obj_screen2_input_province.value = '';
        obj_screen2_input_telephone_deux.value = '';
        obj_screen2_input_code_postal.value = '';
        obj_screen2_input_courriel.value = '';
        obj_screen2_input_pays.value = '';
        obj_screen2_input_date_inscription.value = '';
        // Retour à l'accueil permettant de rafraîchir le tableau
        window.location.reload();
    }
}

function on_delete_user_btn_click(event) {
    // Supprimer un usager dans la base de données
    let id = obj_screen2_input_id.value;
    const xhr_add_user = new XMLHttpRequest();
    console.log('sending user data...');
    if (obj_screen2_input_id.value === "") {
        alert("Aucun usager n'a été sélectionné.");
    }
    else {
        const xhr_user_url = 'http://127.0.0.1:8000/usager/' + id;
        send_express(xhr_add_user, "DELETE", xhr_user_url, true);
        alert("Usager supprimé avec succès.\nRetour à la page d'accueil.")
        obj_screen2_input_id.value = '';
        obj_screen2_input_prenom.value = '';
        obj_screen2_input_nom.value = '';
        obj_screen2_input_adresse.value = '';
        obj_screen2_input_ville.value = '';
        obj_screen2_input_telephone_un.value = '';
        obj_screen2_input_province.value = '';
        obj_screen2_input_telephone_deux.value = '';
        obj_screen2_input_code_postal.value = '';
        obj_screen2_input_courriel.value = '';
        obj_screen2_input_pays.value = '';
        obj_screen2_input_date_inscription.value = '';
        // Retour à l'accueil permettant de rafraîchir le tableau
        window.location.reload();
    }
}

// __________________________________________________________
// fn/procs handlers / listeners
function on_nav_btn_1_click_from_screen_2(event) {
    // Aller à l'écran 1 à partir de l'écran 2
    event.stopPropagation();
    obj_screen2_input_id.value = '';
    obj_screen2_input_prenom.value = '';
    obj_screen2_input_nom.value = '';
    obj_screen2_input_adresse.value = '';
    obj_screen2_input_ville.value = '';
    obj_screen2_input_telephone_un.value = '';
    obj_screen2_input_province.value = '';
    obj_screen2_input_telephone_deux.value = '';
    obj_screen2_input_code_postal.value = '';
    obj_screen2_input_courriel.value = '';
    obj_screen2_input_pays.value = '';
    obj_screen2_input_date_inscription.value = '';
    obj_current_screen = OBJ_SCREEN_1;
    init_user_interface();
}

function on_nav_btn_1_click(event) {
    // Aller à l'écran 1
    event.stopPropagation();
    obj_current_screen = OBJ_SCREEN_1;
    init_user_interface();
}

function on_nav_btn_2_click(event) {
    // Aller à l'écran 2
    event.stopPropagation();
    obj_current_screen = OBJ_SCREEN_2;
    init_user_interface();
    init_click_table();
}

function on_nav_btn_3_click(event) {
    // Aller à l'écran 3
    event.stopPropagation();
    obj_current_screen = obj_screen_3;
    init_user_interface();
}

function on_nav_btn_4_click(event) {
    // Aller à l'écran 4
    event.stopPropagation();
    obj_current_screen = obj_screen_4;
    init_user_interface();
}

function on_nav_btn_5_click(event) {
    // Aller à l'écran 5
    event.stopPropagation();
    obj_current_screen = obj_screen_5;
    init_user_interface();
}

function on_cancel_user_btn_click(event) {
    // Annuler la sélection d'un usager
    event.stopPropagation();
    obj_screen2_input_id.value = '';
    obj_screen2_input_prenom.value = '';
    obj_screen2_input_nom.value = '';
    obj_screen2_input_adresse.value = '';
    obj_screen2_input_ville.value = '';
    obj_screen2_input_telephone_un.value = '';
    obj_screen2_input_province.value = '';
    obj_screen2_input_telephone_deux.value = '';
    obj_screen2_input_code_postal.value = '';
    obj_screen2_input_courriel.value = '';
    obj_screen2_input_pays.value = '';
    obj_screen2_input_date_inscription.value = '';
}

function listen_nav_btns() {
    // Écoute d'événements
    OBJ_NAV_BTN_2.addEventListener(ELEMENT_CLICK, on_nav_btn_2_click);
    OBJ_NAV_BTN_3.addEventListener(ELEMENT_CLICK, on_nav_btn_3_click);
    OBJ_NAV_BTN_4.addEventListener(ELEMENT_CLICK, on_nav_btn_4_click);
    OBJ_NAV_BTN_5.addEventListener(ELEMENT_CLICK, on_nav_btn_5_click);
    obj_screen2_back_screen1_btn.addEventListener(ELEMENT_CLICK, on_nav_btn_1_click_from_screen_2);
    obj_screen3_back_screen1_btn.addEventListener(ELEMENT_CLICK, on_nav_btn_1_click);
    obj_screen4_back_screen1_btn.addEventListener(ELEMENT_CLICK, on_nav_btn_1_click);
    obj_screen5_back_screen1_btn.addEventListener(ELEMENT_CLICK, on_nav_btn_1_click);
    OBJ_SCREEN_1_TO_SCREEN_2_BTN.addEventListener(ELEMENT_CLICK, on_nav_btn_2_click);
    OBJ_SCREEN_1_TO_SCREEN_3_BTN.addEventListener(ELEMENT_CLICK, on_nav_btn_3_click);
    OBJ_SCREEN_1_TO_SCREEN_4_BTN.addEventListener(ELEMENT_CLICK, on_nav_btn_4_click);
    OBJ_SCREEN_1_TO_SCREEN_5_BTN.addEventListener(ELEMENT_CLICK, on_nav_btn_5_click);
    obj_cancel_select_user_btn.addEventListener(ELEMENT_CLICK, on_cancel_user_btn_click);
    obj_add_user_btn.addEventListener(ELEMENT_CLICK, on_add_user_btn_click);
    obj_update_user_btn.addEventListener(ELEMENT_CLICK, on_update_user_btn_click);
    obj_delete_user_btn.addEventListener(ELEMENT_CLICK, on_delete_user_btn_click);
}

function build_livre_table(data) {
    // Ajout des livres de la base de données dans un tableau
    var table = document.getElementById('livre_table')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i][0]}</td>
                        <td>${data[i][1]}</td>
                        <td>${data[i][2]}</td>
                        <td>${data[i][3]}</td>
                        <td>${data[i][4]}</td>
                        <td>${data[i][5]}</td>
                    </tr>`
                    table.innerHTML += row
    }
}

const on_livre_http_request_response = function(event) {
    event.stopPropagation();
    try {
        if (xhr_livre.readyState === XMLHttpRequest.DONE) {
            if (xhr_livre.status === 200) {
                console.log('Perfect! Well received');
                let obj_txt = JSON.parse(xhr_livre.responseText);
                data = xhr_livre.responseText;
                build_livre_table(obj_txt);
            }
            else {
                console.log('Error! ' + xhr_livre.status);
            }
        }
        else {
            console.log('Not ready yet.');
        }
    }
    catch (err) {
        console.error(err);
    }
}

function build_pret_table(data) {
    // Ajout des prêts de la base de données dans un tableau
    var table = document.getElementById('pret_table')
    if (data.length == 0) {
        table.innerHTML = "Aucune donnée";
    }
    else {
        for (var i = 0; i < data.length; i++) {
            var row = `<tr>
                            <td>${data[i][0]}</td>
                            <td>${data[i][1]}</td>
                            <td>${data[i][2]}</td>
                        </tr>`
                        table.innerHTML += row
        }
    }

}

const on_pret_http_request_response = function(event) {
    event.stopPropagation();
    try {
        if (xhr_pret.readyState === XMLHttpRequest.DONE) {
            if (xhr_pret.status === 200) {
                console.log('Perfect! Well received');
                let obj_txt = JSON.parse(xhr_pret.responseText);
                data = xhr_pret.responseText;
                build_pret_table(obj_txt);
            }
            else {
                console.log('Error! ' + xhr_livre.status);
            }
        }
        else {
            console.log('Not ready yet.');
        }
    }
    catch (err) {
        console.error(err);
    }
}

function build_employe_table(data) {
    // Ajout des employés de la base de données dans un tableau
    var table = document.getElementById('employe_table')
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i][0]}</td>
                        <td>${data[i][1]}</td>
                        <td>${data[i][2]}</td>
                        <td>${data[i][3]}</td>
                        <td>${data[i][4]}</td>
                        <td>${data[i][5]}</td>
                        <td>${data[i][6]}</td>
                        <td>${data[i][7]}</td>
                        <td>${data[i][8]}</td>
                        <td>${data[i][9]}</td>
                        <td>${data[i][10]}</td>
                        <td>${data[i][11]}</td>
                    </tr>`
                    table.innerHTML += row
    }
}

const on_employe_http_request_response = function(event) {
    event.stopPropagation();
    try {
        if (xhr_employe.readyState === XMLHttpRequest.DONE) {
            if (xhr_employe.status === 200) {
                console.log('Perfect! Well received');
                let obj_txt = JSON.parse(xhr_employe.responseText);
                data = xhr_employe.responseText;
                build_employe_table(obj_txt);
            }
            else {
                console.log('Error! ' + xhr_employe.status);
            }
        }
        else {
            console.log('Not ready yet.');
        }
    }
    catch (err) {
        console.error(err);
    }
}

function build_usager_table(data) {
    // Ajout des usagers de la base de données dans un tableau
    var table = document.getElementById('usager_table');
    for (var i = 0; i < data.length; i++) {
        var row = `<tr onclick="addRowHandlers()">
                        <td>${data[i][0]}</td>
                        <td>${data[i][1]}</td>
                        <td>${data[i][2]}</td>
                        <td>${data[i][3]}</td>
                        <td>${data[i][4]}</td>
                        <td>${data[i][5]}</td>
                        <td>${data[i][6]}</td>
                        <td>${data[i][7]}</td>
                        <td>${data[i][8]}</td>
                        <td>${data[i][9]}</td>
                        <td>${data[i][10]}</td>
                        <td>${data[i][11]}</td>
                    </tr>`
                    table.innerHTML += row
    }
}

const on_usager_http_request_response = function(event) {
    event.stopPropagation();
    try {
        if (xhr_usager.readyState === XMLHttpRequest.DONE) {
            if (xhr_usager.status === 200) {
                console.log('Perfect! Well received');
                let obj_txt = JSON.parse(xhr_usager.responseText);
                data = xhr_usager.responseText;
                build_usager_table(obj_txt);
            }
            else {
                console.log('Error! ' + xhr_usager.status);
            }
        }
        else {
            console.log('Not ready yet.');
        }
    }
    catch (err) {
        console.error(err);
    }
}

function init_click_table() {
    // Ajout des informations d'un usager dans les champs lorsque l'usager est sélectionné
    let table = document.getElementById("tableId");
    let rows = table.getElementsByTagName("tr");
    for (i = 1; i < rows.length; i++) {
        row = table.rows[i];
        row.onclick = function(){
            let cellule_id = this.getElementsByTagName("td")[0];
            let cellule_prenom = this.getElementsByTagName("td")[2];
            let cellule_nom = this.getElementsByTagName("td")[1];
            let cellule_adresse = this.getElementsByTagName("td")[3];
            let cellule_ville = this.getElementsByTagName("td")[4];
            let cellule_telephone_un = this.getElementsByTagName("td")[8];
            let cellule_province = this.getElementsByTagName("td")[6];
            let cellule_telephone_deux = this.getElementsByTagName("td")[9];
            let cellule_code_postal = this.getElementsByTagName("td")[5];
            let cellule_courriel = this.getElementsByTagName("td")[10];
            let cellule_pays = this.getElementsByTagName("td")[7];
            let cellule_date_inscription = this.getElementsByTagName("td")[11];
            let selected_id = cellule_id.innerHTML;
            let selected_prenom = cellule_prenom.innerHTML;
            let selected_nom = cellule_nom.innerHTML;
            let selected_adresse = cellule_adresse.innerHTML;
            let selected_ville = cellule_ville.innerHTML;
            let selected_telephone_un = cellule_telephone_un.innerHTML;
            let selected_province = cellule_province.innerHTML;
            let selected_telephone_deux = cellule_telephone_deux.innerHTML;
            let selected_code_postal = cellule_code_postal.innerHTML;
            let selected_courriel = cellule_courriel.innerHTML;
            let selected_pays = cellule_pays.innerHTML;
            let selected_date_inscription = cellule_date_inscription.innerHTML;
            obj_screen2_input_id.value = selected_id;
            obj_screen2_input_prenom.value = selected_prenom;
            obj_screen2_input_nom.value = selected_nom;
            obj_screen2_input_adresse.value = selected_adresse;
            obj_screen2_input_ville.value = selected_ville;
            obj_screen2_input_telephone_un.value = selected_telephone_un;
            obj_screen2_input_province.value = selected_province;
            obj_screen2_input_telephone_deux.value = selected_telephone_deux;
            obj_screen2_input_code_postal.value = selected_code_postal;
            obj_screen2_input_courriel.value = selected_courriel;
            obj_screen2_input_pays.value = selected_pays;
            obj_screen2_input_date_inscription.value = selected_date_inscription;
        };
    }
}

// __________________________________________________________
// init / start
OBJ_WINDOW_TITLE.textContent = i18n_current.title;

// Écran 1
OBJ_SCREEN_1_SCREEN_TITLE.textContent = i18n_current.screen1.title;
OBJ_SCREEN_1_TO_SCREEN_2_BTN.textContent = i18n_current.screen1.btn_screen2;
OBJ_SCREEN_1_TO_SCREEN_3_BTN.textContent = i18n_current.screen1.btn_screen3;
OBJ_SCREEN_1_TO_SCREEN_4_BTN.textContent = i18n_current.screen1.btn_screen4;
OBJ_SCREEN_1_TO_SCREEN_5_BTN.textContent = i18n_current.screen1.btn_screen5;

// Écran 2
OBJ_SCREEN_2_SCREEN_TITLE.textContent = i18n_current.screen2.title;
OBJ_NAV_BTN_2.textContent = i18n_current.screen2.btn_nav;
obj_cancel_select_user_btn.textContent = i18n_current.screen2.btn_cancel_select_user;
obj_add_user_btn.textContent = i18n_current.screen2.btn_add_user;
obj_update_user_btn.textContent = i18n_current.screen2.btn_update_user;
obj_delete_user_btn.textContent = i18n_current.screen2.btn_delete_user;
obj_screen2_back_screen1_btn.textContent = i18n_current.btn_retour;
obj_screen2_table_id.textContent = i18n_current.screen2.tab_id;
obj_screen2_table_nom.textContent = i18n_current.screen2.tab_nom;
obj_screen2_table_prenom.textContent = i18n_current.screen2.tab_prenom;
obj_screen2_table_adresse.textContent = i18n_current.screen2.tab_adresse;
obj_screen2_table_ville.textContent = i18n_current.screen2.tab_ville;
obj_screen2_table_code_postal.textContent = i18n_current.screen2.tab_code_postal;
obj_screen2_table_province.textContent = i18n_current.screen2.tab_province;
obj_screen2_table_pays.textContent = i18n_current.screen2.tab_pays;
obj_screen2_table_telephone_un.textContent = i18n_current.screen2.tab_telephone_un;
obj_screen2_table_telephone_deux.textContent = i18n_current.screen2.tab_telephone_deux;
obj_screen2_table_courriel.textContent = i18n_current.screen2.tab_courriel;
obj_screen2_table_date_inscription.textContent = i18n_current.screen2.tab_date_inscription;

// Écran 3
obj_s3_screen_title.textContent = i18n_current.screen3.title;
OBJ_NAV_BTN_3.textContent = i18n_current.screen3.btn_nav;
obj_screen3_back_screen1_btn.textContent = i18n_current.btn_retour;
obj_screen3_table_id.textContent = i18n_current.screen3.tab_id;
obj_screen3_table_nom.textContent = i18n_current.screen3.tab_nom;
obj_screen3_table_prenom.textContent = i18n_current.screen3.tab_prenom;
obj_screen3_table_adresse.textContent = i18n_current.screen3.tab_adresse;
obj_screen3_table_ville.textContent = i18n_current.screen3.tab_ville;
obj_screen3_table_code_postal.textContent = i18n_current.screen3.tab_code_postal;
obj_screen3_table_province.textContent = i18n_current.screen3.tab_province;
obj_screen3_table_pays.textContent = i18n_current.screen3.tab_pays;
obj_screen3_table_telephone_un.textContent = i18n_current.screen3.tab_telephone_un;
obj_screen3_table_telephone_deux.textContent = i18n_current.screen3.tab_telephone_deux;
obj_screen3_table_courriel.textContent = i18n_current.screen3.tab_courriel;
obj_screen3_table_date_embauche.textContent = i18n_current.screen3.tab_date_embauche;

// Écran 4
obj_s4_screen_title.textContent = i18n_current.screen4.title;
OBJ_NAV_BTN_4.textContent = i18n_current.screen4.btn_nav;
obj_screen4_back_screen1_btn.textContent = i18n_current.btn_retour;
obj_screen4_table_id.textContent = i18n_current.screen4.tab_id;
obj_screen4_table_titre.textContent = i18n_current.screen4.tab_titre;
obj_screen4_table_auteur.textContent = i18n_current.screen4.tab_auteur;
obj_screen4_table_editeur.textContent = i18n_current.screen4.tab_editeur;
obj_screen4_table_pages.textContent = i18n_current.screen4.tab_pages;
obj_screen4_table_date_parution.textContent = i18n_current.screen4.tab_date_parution;

// Écran 5
obj_s5_screen_title.textContent = i18n_current.screen5.title;
OBJ_NAV_BTN_5.textContent = i18n_current.screen5.btn_nav;
obj_screen5_back_screen1_btn.textContent = i18n_current.btn_retour;
obj_screen5_table_id.textContent = i18n_current.screen5.tab_id;
obj_screen5_table_date_pret.textContent = i18n_current.screen5.tab_pret;
obj_screen5_table_date_retour.textContent = i18n_current.screen5.tab_retour;

init_user_interface();
listen_nav_btns();

// Affichage des livres dans le tableau
const xhr_livre = new XMLHttpRequest();
console.log('sending livre request...');
xhr_livre.onreadystatechange = on_livre_http_request_response;
const xhr_livre_url = 'http://127.0.0.1:8000/livre';
on_open_send_xhr(xhr_livre, 'GET', xhr_livre_url, true, null);

// Affichage des employés dans le tableau
const xhr_employe = new XMLHttpRequest();
console.log('sending employe request...');
xhr_employe.onreadystatechange = on_employe_http_request_response;
const xhr_employe_url = 'http://127.0.0.1:8000/employe';
on_open_send_xhr(xhr_employe, 'GET', xhr_employe_url, true, null);

// Affichage des prêts dans le tableau
const xhr_pret = new XMLHttpRequest();
console.log('sending pret request...');
xhr_pret.onreadystatechange = on_pret_http_request_response;
const xhr_pret_url = 'http://127.0.0.1:8000/pret';
on_open_send_xhr(xhr_pret, 'GET', xhr_pret_url, true, null);

// Affichage des usagers dans le tableau
const xhr_usager = new XMLHttpRequest();
console.log('sending usager request...');
xhr_usager.onreadystatechange = on_usager_http_request_response;
const xhr_usager_url = 'http://127.0.0.1:8000/usager/';
on_open_send_xhr(xhr_usager, 'GET', xhr_usager_url, true, null);