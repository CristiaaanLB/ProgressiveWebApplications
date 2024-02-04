const readline = require('readline');
const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/todos";
const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var exitFlag = false;

function amazingTitle(){
    console.log("  _   _ ______ _          _____               _ _            _            ");
    console.log(" | \\ | |  ____| |     _  |  __ \\             | (_)          | |           ");
    console.log(" |  \\| | |__  | |    (_) | |__) |__ _ __   __| |_  ___ _ __ | |_ ___  ___ ");
    console.log(" | . ` |  __| | |        |  ___/ _ \\ '_ \\ / _` | |/ _ \\ '_ \\| __/ _ \\/ __|");
    console.log(" | |\\  | |    | |____ _  | |  |  __/ | | | (_| | |  __/ | | | ||  __/\\__ \\");
    console.log(" |_| \\_|_|    |______(_) |_|   \\___|_| |_|\\__,_|_|\\___|_| |_|\\__\\___||___/");
}

function showMenu(){
    console.log("\n");
    console.log("1. Lista de todos los pendientes (solo IDs)");
    console.log("2. Lista de todos los pendientes (IDs y Titles)");
    console.log("3. Lista de todos los pendientes sin resolver (IDs y Titles)");
    console.log("4. Lista de todos los pendientes resueltos (IDs y Titles)");
    console.log("5. Lista de todos los pendientes (IDs y UserIDs)");
    console.log("6. Lista de todos los pendientes resueltos (IDs y UserIDs)");
    console.log("7. Lista de todos los pendientes sin resolver (IDs y UserIDs)");
    console.log("8. Salir");
}

function handleOption(option){
    switch(option){
        case "1":
            console.log("\nLista de todos los pendientes (solo IDs):");
            allTodosOnlyIds();
            break;
        case "2":
            console.log("\nLista de todos los pendientes (IDs y Titles):");
            allTodosIdsAndTitles();
            break;
        case "3":
            console.log("\nLista de todos los pendientes sin resolver (IDs y Titles):");
            uncompletedTodosIdsAndTitles();
            break;
        case "4":
            console.log("\nLista de todos los pendientes resueltos (IDs y Titles):");
            completedTodosIdsAndTitles();
            break;
        case "5":
            console.log("\nLista de todos los pendientes (IDs y UserIDs):");
            allTodosIdsAndUserIds();
            break;
        case "6":
            console.log("\nLista de todos los pendientes resueltos (IDs y UserIDs):");
            completedTodosIdsAndUserIds();
            break;
        case "7":
            console.log("\nLista de todos los pendientes sin resolver (IDs y UserIDs):");
            uncompletedTodosIdsAndUserIds();
            break;
        case "8":
            console.log("¡Hasta luego!");
            exitFlag = true;
            rline.close();
            break;
        default:
            console.log("Por favor, seleccione una opción válida:");
            break;
    }
}

function getInput() {
    rline.question('Seleccione una opción: \n', (input) => {
        handleOption(input);
    });
}

async function allTodosOnlyIds(){
    try {
        const response = await axios.get(url);

        response.data.forEach(element => {
            console.log(element.id);
        });
        
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
    }

    repetir();
}

async function allTodosIdsAndTitles(){
    try {
        const response = await axios.get(url);

        response.data.forEach(element => {
            console.log(element.id + " | " + element.title);
        });
        
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
    }

    repetir();
}

async function uncompletedTodosIdsAndTitles(){
    try {
        const response = await axios.get(url);

        response.data.forEach(element => {
            if (!element.completed){
                console.log(element.id + " | " + element.title);
            }
        });
        
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
    }

    repetir();
}

async function completedTodosIdsAndTitles(){
    try {
        const response = await axios.get(url);

        response.data.forEach(element => {
            if (element.completed){
                console.log(element.id + " | " + element.title);
            }
        });
        
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
    }

    repetir();
}

async function allTodosIdsAndUserIds(){
    try {
        const response = await axios.get(url);

        response.data.forEach(element => {
            console.log(element.id + " | " + element.userId);
        });
        
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
    }

    repetir();
}

async function completedTodosIdsAndUserIds(){
    try {
        const response = await axios.get(url);

        response.data.forEach(element => {
            if (element.completed){
                console.log(element.id + " | " + element.userId);
            }
        });
        
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
    }

    repetir();
}

async function uncompletedTodosIdsAndUserIds(){
    try {
        const response = await axios.get(url);

        response.data.forEach(element => {
            if (!element.completed){
                console.log(element.id + " | " + element.userId);
            }
        });
        
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
    }

    repetir();
}

function repetir(){
    if (!exitFlag) {
        showMenu();
        getInput();
    }
}

amazingTitle();
repetir();