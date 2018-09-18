// Names and Input
var hacker1 = 'Ana';
console.log("The driver's name ist: "+hacker1);
var hacker2;
hacker2 = window.prompt("Imput the navigator's friend: ");
console.log("The navigator's name ist: "+hacker2);

//Conditionals
var longName;
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longer name, it has "+hacker1.length + " characters");

}else if (hacker1.length < hacker2.length){
  console.log("yo, navigator got the longer name, it has "+hacker2.length + " characters");
  
}else {
  console.log("wow, you both got equally long names, " +hacker1.length + " characters");
}

//LOOPS
var upperDriver = hacker1.toUpperCase();
var newDriver = "";
//console.log(upperDriver);
for (var i=0; i<hacker1.length; i++){
  if (i === hacker1.length-1){
    newDriver += upperDriver[i];  
  }else{
    newDriver += upperDriver[i]+ " ";
  }
}
console.log(newDriver);

//var upperNav = hacker2.toUpperCase();
var newNav = "";
//console.log(upperDriver);
for (var i=hacker2.length-1; i>=0; i--){
 newNav += hacker2[i];
}
console.log(newNav);

if (hacker1 < hacker2){
  console.log("The driver's name goes first");
}else if (hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely");
}else {console.log("What?! You both got the same name");}

//Bonus

var palindromo1;
var palindromo2 = '';
var palindromo3 = '';
palindromo1 = window.prompt("Introduzca una cadena: ");
var palindromo1L = palindromo1.toLowerCase();

for (var i=palindromo1L.length-1; i>=0; i--){
  if (palindromo1L[i].match(/^[a-z]+$/)){
  palindromo2 += palindromo1L[i];
  }
 }
 for (var j=0; j<palindromo1L.length; j++){
  if (palindromo1L[j].match(/^[a-z]+$/)){
  palindromo3 += palindromo1L[j];
  }
 }
 console.log(palindromo2);
 console.log(palindromo3);
if (palindromo3 === palindromo2){
  console.log("Es palíndromo " +palindromo1);
}
// Lorem ipsum generator
var parrafo0 = "Lorem";
var parrafo1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada justo vel diam imperdiet, in placerat leo consequat. Nam ornare at odio in cursus. Aliquam condimentum tincidunt.";
//var parrafo2 = "Fusce arcu nulla, feugiat id suscipit tincidunt, dignissim vitae erat. Maecenas eget quam quis mi dignissim scelerisque. Quisque a ultricies lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent nec convallis metus, in rutrum nibh. Phasellus lacinia, dui ut blandit viverra, arcu leo venenatis odio, non rhoncus lacus lorem eget velit. Proin pretium auctor lacus, sed porta nulla auctor ac.";
//var parrafo3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis tellus eu mauris pellentesque rhoncus. Vestibulum ultrices dolor in orci porttitor faucibus. Mauris lacus ligula, mollis vitae iaculis eget, mattis vel ante. Maecenas in laoreet nisl. Etiam consectetur auctor accumsan. Etiam fringilla lorem sapien, at posuere leo lobortis quis. Mauris vitae posuere neque. Donec in nulla sit amet erat maximus porta non eget dui. Maecenas maximus varius convallis. Aenean vehicula lectus nec nisi aliquam hendrerit.";
var palabras = 0;

  for (var k=0; k< parrafo1.length; k++){ // Aqui tenemos un problema porque si contamos
    if (parrafo1[k] === ' '){   // una palabra por cada espacio en blanco, la última palabra
      palabras++;  // No la cuenta, o si sólo hubiese 1 palabra
    }

  } 
  if (parrafo1[0] !== ' '){ //Si la primera letra "existe", sumamos una
    palabras++;
  }
// Esto es un parche, porque si la variable no tiene asignado un valor, dará error


  console.log("El número de palabras es: "+ palabras);

//Sacado de uno de los ejemlos de MDN
var count = 0;
var pos = parrafo1.indexOf('et');

while (pos !== -1) {
  count++;
  pos = parrafo1.indexOf('et', pos + 1);
}

console.log("El número de veces que aparece et es: "+count);
