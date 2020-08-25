"use strict";
let numberOfFilms = prompt("How much films do you seen ?","");

let personalMovieDB = {
    count: numberOfFilms,
    movis: {},
    actors: {},
    genres: [],
    privat: false
}

let LastFilm = prompt("One of the las seeing films ?","");
let MarkFilm = prompt("How mark you give about this film ?","");
let LastFilm2 = prompt("One of the las seeing films ?","");
let MarkFilm2 = prompt("How mark you give about this film ?","");
  
personalMovieDB.movis[LastFilm] = MarkFilm;
personalMovieDB.movis[LastFilm2] = MarkFilm2;

console.log(personalMovieDB);

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

