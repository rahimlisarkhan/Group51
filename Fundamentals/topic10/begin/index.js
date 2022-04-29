// setTimeout

// function a() {
//   console.log("Cagirildi");
// }

// let b = setTimeout(a, 2000);

// document.querySelector("button").addEventListener("click", function () {
//   clearTimeout(b);
// });

// console.log("b", b);



// setInterval

// function a() {
//   console.log("---------");
//   console.log("Cagirildi");
//   console.log("----------");
// }

let b = setInterval(()=>{
  console.log("---------");
  console.log("Cagirildi");
  console.log("----------");
}, 1000);

document.querySelector("button").addEventListener("click", function () {
  clearInterval(b);
});

console.log("b", b);