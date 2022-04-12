"use strict";

// a = 5

// console.log(a);

// let a

// console.log(a);

// var a = 5

// name()

// let name = () => {

//     console.log("Salam");

// }

// function name() {

//     console.log("Salam");

// }

// {

//     console.log(a);
//     var a = 5

// }

const makeCounter = () => {
  var a = 0;
  return () => {
    return a++;
  };
};

var tariyelinSaygaci = makeCounter();
var ruslaninSaygaci = makeCounter();

// console.log("tariyel",tariyelinSaygaci());
// console.log("tariyel",tariyelinSaygaci());
// console.log("ruslan",ruslaninSaygaci());
// console.log("ruslan",ruslaninSaygaci());
// console.log("tariyel",tariyelinSaygaci());
// console.log("tariyel",tariyelinSaygaci());

// const useState = (data) => {
//   var a = data;

//   return () => {
//     return { deyer: (a += 5) };
//   };
// };

// const deyerState = useState(10);

// deyerState()
// deyerState()
// deyerState()
// deyerState()
// deyerState()

// let { deyer } = deyerState();
// console.log(deyer);
