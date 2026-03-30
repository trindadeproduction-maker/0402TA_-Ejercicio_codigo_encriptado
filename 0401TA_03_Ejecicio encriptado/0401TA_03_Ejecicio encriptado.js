// 1º pedimos los datos, prompt devuelve texto

let edad = Number(prompt("introduce tu edad:"));
let nivel = prompt("Introduce tu nivel (junior, mid, senior):");
let numeroFavorito = Number (prompt("Introduce tu numero favorito:"));

nivel = nivel.toLocaleLowerCase();

// 2º - aplicamos la logica condicional usando variable, Letra con ternario

let letra = (edad < 18) ? "X": (edad <= 35) ? "A": (edad <= 60) ? "B" : "C";

// 3º nº1 con ternario

let num1 = (nivel === "junior") ? 1 : (nivel === "mid") ? 2 : 3;

// 4º nº 2

let num2 = numeroFavorito % 10;

// codigo final

let codigo = letra + num1 + num2;

// mostrar resultado
alert("El codigo del candodo es:" + codigo);