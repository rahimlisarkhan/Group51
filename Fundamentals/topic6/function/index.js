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

// function saitleriQaytaran(soz) {
//   var result = [];
//   var saitler = ["a", "e", "i", "o", "u"];

//   for (el of saitler) {
//     if (soz.indexOf(el) !== -1) {
//       result.push(el);
//     }
//   }

//   return result.join();
// }

// var userName = "Sarkhan";

// var netice = saitleriQaytaran(userName);

// console.log(netice);

// function sum() {
//   return 15;
// }

// var a = sum //10

// var b = a

// console.log(b());
// console.log(a());

// function sum(gelenArr) {
//   var total = 0;

//   for (el of gelenArr) {
//     total += el;
//   }

//   return total;
// }

// function multible(num, sumArr) {
//   return num * sum(sumArr);
// }

// var result = multible(100, [2, 5, 7, 11, 20]);

// function ziyaniHesablayan(satisArray) {
//   var totalSalary = sum(satisArray);

//   if (totalSalary > 100) {
//     return "Good sales";
//   } else if (totalSalary >= 50 && 100 >= totalSalary) {
//     return "Normal sales";
//   } else {
//     return "Very bad sales";
//   }
// }

// console.log(ziyaniHesablayan([100, 100]));

// var a = ["jale", 2, 3];
// var c = ["Tariyel", 10, 3];

// // a[1] = 105

// var b = a.concat(c)


// c[1] = 15

// console.log("b", b);
// console.log("a", a);
// console.log("b", b);

// var b = []

// for (el of a) {
//   console.log(el);
//   b = [...b, el]
// }



// function test(a, b, d, e, ...c) {

//   console.log(a, b, d, e, c);
//   // var total = 0

//   // for (el of arguments) {
//   //   total += el
//   // }

//   // return total

// }


// test(5, 4, 3, 100, 102, 105)


// (
//   function sayHello() {
//     console.log("Salam");
//   }

// )()


// total(5)(4)(2)


// function total(a) {

//   return function (b) {
//     return a + b
//   }

// }


// let netice = total(5)(7)

// console.log(netice);





// console.log(a);



// function maxEded(...arr) {

//   var num = 0

//   for (el of arr) {

//     if (num < el) {
//       num = el
//     }
//   }

//   return num
// }


// let a = maxEded(1,2,20)

// var students = ["Jale", "Ayten", "Lamiya", "Rovshana"]
// let a = Math.max(2, 1, 45, 25)
// var a = Math.min(...reqemler)
// var a = Math.ceil(5.9)
// var a = Math.floor(5.9)
// var a = Math.round(5.9)
// var a = Math.random() * students.length

// var c = Math.floor(a)

// console.log(students[c]);


// var tarix = new Date()

// var istediyimTarix = tarix.getTime()
// tarix.setFullYear(2019)
// tarix.setMonth(5)
// tarix.setDate(tarix.getDate() + 100)

console.log(tarix);