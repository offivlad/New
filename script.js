"use strict";
let sex = confirm('Do you have 18+ ?');
if (sex == true){
    let name = prompt('You name ?', '');
    alert (`Hello, ${name} !`);
}
else{ 
    let x=1;
    while(x<=3){
        document.write(`${x} \n`);
        ++x;
    }
    document.write("Warning!!!")
    
}
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

