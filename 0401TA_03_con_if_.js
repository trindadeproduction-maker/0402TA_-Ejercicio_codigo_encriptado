//input
let edad = Number (prompt ("Introduce tu edad:"));
let Nivel = (prompt ("Introduce to nivel (Junior, mid, senior):"));
let numFavorito = Number (prompt("Introduce tu nº favorito:"));


//generamos variable letra
let letra = "";

if (edad < 18){
    letra = "X";
}else if (edad >= 18 && edad <= 35){
    letra = "A";

}else if(edad >= 36 && edad <= 60){
    letra = "B";
}else {
    letra = "C";
}

// genera el primer nº
let num1 = 0;

switch (Nivel){
    case "Junior":
    num1 = 1;
    break;
    case "mid":
    num1 = 2;
    break;
    case "senior":
    num1 = 3;
    break;
}

// genera el segundo nº
let num2 = 0;

if (numFavorito % 2 === 0){
    num2 = numFavorito * 2;
}else{
    num2 = numFavorito + 5;
}

// codigo final

let codigo = letra + num1 + num2;

alert("codigo del candado:" + codigo);