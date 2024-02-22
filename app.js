//Obteniendo los elementos del DOM y asignandolo a variables
let textoEncriptar = document.getElementById("texto-a-encriptar");
let textoFinal = document.getElementById("oracion-encriptada");
let elementosTextarea = document.getElementById("placeholde");
let datosEncriptacion = ["enter", "imea", "ai", "ober", "ufat"];
let regex = new RegExp(datosEncriptacion.join("|"), "g");

//Quitando las tíldes de las string para evitar errores
function quitarTildes(cadena){
    let tildes = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'ü': 'u',
        'ñ': 'n',
        'Á': 'A',
        'É': 'E',
        'Í': 'I',
        'Ó': 'O',
        'Ú': 'U',
        'Ü': 'U',
        'Ñ': 'N'
    };

    return cadena.replace(/[áéíóúüñÁÉÍÓÚÑ]/, function(match){
        return tildes[match]
    })
}

//Convirtiendo todo en minuscula y quitando carácteres
function quitarMayusculasyCaracteres(cadena){
    let sinTildes = quitarTildes(cadena)
    let string = sinTildes.replace(/[^a-zA-Z\s]/g, "").replace(/\d+/g).toLowerCase();
    return string
}

//Oculta los elementos del textarea
function ocultarElementos(){
    elementosTextarea.style.display = "none"
}

//Funcionalidad que encripta la string del usuario
function encriptar(){

    let provisional = textoEncriptar.value
    let temporal = quitarMayusculasyCaracteres(provisional)
    textoEncriptar.value = ""
    
    let datosEncriptacion = {
        "a" : "ai",
        "e" : "enter",
        "i" : "imea", 
        "o" : "ober",
        "u" : "ufat"
    },

    textoEncriptado = temporal.replace(/[aeiou]/g, function(match){
    return datosEncriptacion[match]
    })

    textoFinal.value = textoEncriptado
    ocultarElementos();
    
}

//Funcionalidad de autorezise para el input del usuario
textoEncriptar.addEventListener("input", function(){
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
})

//Funcionalidad para desencriptar el texto 
function desencriptar(){    
    let provisional = textoEncriptar.value
    let temporal = quitarMayusculasyCaracteres(provisional)
    textoEncriptar.value = ""
    
    let datosEncriptacion = {
        "ai" : "a",
        "enter" : "e",
        "imea" : "i", 
        "ober" : "o",
        "ufat" : "u"
    },

    textoEncriptado = temporal.replace(regex, function(match){
    return datosEncriptacion[match]
    })

    textoFinal.value = textoEncriptado
}