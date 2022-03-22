// SWITCH

// var age = 25;
// var position = "designer";

// if (age > 18 && position === "telebe") {
//   console.log("Daxil olsun");
// } else if (position === "designer") {
//   console.log("yas ferqi yoxdur iceri burax");
// } else if (position === "designer") {
//   console.log("yas ferqi yoxdur iceri burax");
// } else if (position === "designer") {
//   console.log("yas ferqi yoxdur iceri burax");
// } else {
//   console.log("Sertler odenmedi deye gozleyin");
// }

// var raiting = 6;

// switch (raiting) {
//   case 0:
//     console.log("I sorry for platform");
//     break;
//   case 2:
//     console.log("Not bad");
//     break;
//   case 5:
//     console.log("Good");
//     break;
//   default:
//     console.log("Please choose max 5 number");
// }

// let arr = [1, 2, 3, 4, 5, 6];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

// var a = 0

// while(a < 10){
//     console.log("salam");

//     a = a + 1
// }

// var a = 0;

// do {
//   console.log("salam");

//   a = a + 1;
// } while (a < 10);
// var a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a <= 10);

var arr = ["Salam", "Hola", "Hello", "Merhaba", "Sagol"];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// var arr = [
//   ["jale", 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];


// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log("salam" + j);
//   }
// }

// for (el of arr) {
//   console.log(el);
// }

// for (index in arr) {
//   console.log(arr[index]);
// }

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var i = 0;
// while (i < numbers.length) {
//   if (numbers[i] % 2 === 1) {
//     console.log(numbers[i]);
//   }

//   i++;
// }

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// for (num of numbers) {
//   if (num % 2 !== 0) {
//     console.log(num);
//   }
// }

// for (i in numbers) {
//   if (numbers[i] % 2 !== 0) {
//     console.log(numbers[i]);
//   }
// }


for(var i = 0; i < 5; i++){

    if(i === 2 ){
        break
    }

    for(var j = 0; j < 5; j++){
        console.log("salam " + i + " " + j);

        // if(j === 2 ){
        //     break anafor
        // }
    }

}