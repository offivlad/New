
/*
// методы и свойства
const str = "tests";
console.log (str.toUpperCase());
console.log (str);

const fruit = "Some fruit";
console.log(fruit.indexOf("q"));

const logg = "Hello word";

console.log(logg.slice(6, 11));

console.log(logg.slice(6));

console.log(logg.substr(6, 5));

const num = 12.5;
console.log(Math.round(num));
 
const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
*/

/*
// function declaration
function calc(a, b){
    return (a+b);
}
let a =+prompt("");
let b =+prompt("");
alert(calc(a,b));
// function expression
const logger = function(){
    console.log("Hello");
};
// стрелочная function
const calk = (a, b) => a + b;
*/

// practika2
'use strict';
/*do{
    var numberOfFilms = prompt("How much films do you seen ?","");
}
while(numberOfFilms==null || numberOfFilms.length>10){
}
*/
let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How much films do you seen ?","");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How much films do you seen ?","");
    }
}
start();

var personalMovieDB = {
    count: +numberOfFilms,
    movis: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms(){
    for(var i=0;i<2;i++){
        do{
          var LastFilm = prompt("One of the las seeing films ?","");
      } 
      
        while(LastFilm== null ||  LastFilm== ""||  LastFilm.length>10 ){
      }
      do{
          var MarkFilm = prompt("How mark you give about this film ?","");    
      } 
      
        while( MarkFilm== null ||  MarkFilm== "" ||  MarkFilm.length>10){
      }
      
      personalMovieDB.movis[LastFilm] = MarkFilm;
      }
      
}

rememberMyFilms();

function detectPersonallevel(){
    if(personalMovieDB.count<10){
        alert('You have seen few films');
    }
    else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
        alert('You are a classic cinema viewer');
    }
    else{
        alert('You are film fan');
    }
}

detectPersonallevel();

function writeYourGeneres(){
    for(var i = 1; i<4 ;i++){
    var j = prompt(`Your favorite genre by number ${i}`,);
    personalMovieDB.genres[i] = j;
    }
}

writeYourGeneres();

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

// alert(personalMovieDB.movis.LastFilm);
// alert(personalMovieDB.movis.MarkFilm);
// let sex = confirm('Do you have 18+ ?');
// if (sex == true){
//     let name = prompt('You name ?', '');
//     alert (`Hello, ${name} !`);
// }
// else{ 
//     let x=1;
//     while(x<=3){
//         document.write(`${x} \n`);
//         ++x;
//     }
//     document.write("Warning!!!")
    
// }
//   alert('Hello word!');

// let pi =1;
// let something;
//   console.log(something);
// let persone = {
//     name: "Vlad",
//     age: 22,
//     isMarried: false
// }
//   alert(persone.name);
//   alert(persone["age"]);

// let mass = [1 , 2 , 3 , 4];
//   alert(mass[3])

// // alert(x);
//   console.log(x);
// let x=3;
//   alert (x);