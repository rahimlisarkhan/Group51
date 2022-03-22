// function cevreSahesi(radius) {

//     radius = 100

//     let pi = 3.14;

//   var uzunluq = radius * pi * 2;

//   return uzunluq;
// }

// var menimCevrem = cevreSahesi(50)

// console.log("radiusu 50 olan: ", cevreSahesi(50));
// console.log("radiusu 40 olan: ", cevreSahesi(40));
// console.log("radiusu 10 olan: ", cevreSahesi(10));

// var netice = cemiHesablayan(10, 15, 20, 100);

// console.log("netice", netice);

// function cemiHesablayan(a, b, c, d) {
//   //   var a = 8;
//   //   var b = 6;

//   var result = a + b + c + d;

//   return result;

//   // if(result === 11){
//   //     return result
//   // }else{
//   //     return "Hooray"
//   // }

//   // switch (result){
//   //     case 1:
//   //         return "1di"
//   //     default:
//   //         return "hecne yoxdu"
//   // }
// }

// function writeLogArray(arr) {

//   for (el of arr) {
//     console.log(el);
//   }

//   console.log("------------------");
// }

// // Various Arrays
// var brands = ["Acer", "Apple", "Sony", "Samsung"];
// var heroes = [
//   "Black Panther",
//   "Cyborg",
//   "Black Canary",
//   "Donna Troy",
//   "Huntress",
//   "Blue Beetle",
//   "Captain Atom",
// ];
// var booksOnMyShelf = [
//   "Calculus Early Transcendentals",
//   "Ravens",
//   "The Self Illusion",
//   "Harry Potter",
// ];
// var thingsInFrontOfMe = ["Laptop", "Beanbag", "Cats", "Slippers"];
// var howIFeel = ["Sleep Deprived", "Wired on Coffee", "Excited"];

// writeLogArray(brands);
// writeLogArray(howIFeel);
// writeLogArray(thingsInFrontOfMe);

// function tamEdedleriQaytaranArray(arr) {
//   var result = [];

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var netice = tamEdedleriQaytaranArray(numbers);

// var cumle = netice.join("-");

// console.log(cumle);


function saitleriQaytaran(soz) {
  var result = [];
  var saitler = ["a", "e", "i", "o", "u"];


  for (el of saitler) {
    if (soz.indexOf(el) !== -1) {
      result.push(el);
    }
  }

  return result.join();
}

// var userName = "Sarkhan";

// var netice = saitleriQaytaran(userName);

// console.log(netice);