// function myFunction(e) {
//   console.log("Test",e);
// }

// window.onkeydown = myFunction;

// function C (){
//   console.log("C cagirildi");
// }

// function startGame (deyer){
//   console.log("B cagirildi",deyer);
// }

// function windowKeydown (callback){
//   callback?.("Enter")
//   console.log("A cagirildi");
// }

// windowKeydown(startGame)

// function salamDe(){
//   return "salam!"
// }

// function name(params) {
//   console.log(params());
// }

// name(salamDe);

// function xalidMasini(gelenDeyer) {
//   console.log("Xalid ucun Gelen deyer", gelenDeyer);
// }

// function ruslaninMasini(gelenDeyer) {
//   console.log("Gelen deyer", gelenDeyer);
// }

// function sum(a, b) {
//   let result = a + 10;
//   b(result);
//   return "Tamamlandi"
// }

// let a = sum(10, ruslaninMasini);
// console.log(a);
// sum(5, xalidMasini);

// var arr = [1, 2, 4];

// function my(item) {
//   if (item % 2 === 0) {
//     return "Bolunur";
//   }
//   return "Bolunmur";
// }

// addEventListener("click",my)
// arr.map(my)
// arr.filter(my)
// arr.find(my)
// let newArr = arr.map((item) => {
//   if (item % 2 === 0) {
//     return "Bolunur";
//   }
//   return "Bolunmur";
// });

// console.log(newArr);

// let sendButton = document.getElementById("send");
// let infoInput = document.getElementById("info");

// let data = [];

// const pushData = (value) => {
//   data.push(value);
//   console.log(data);
// };

// const createPhrase = (value) => {
//   console.log(`Bu ${value} deyerinin cumlesi yaradildi!`);
// };

// const addData = (callback) => {
//   callback(infoInput.value);
// };

// sendButton.addEventListener("click", () => addData(pushData));

const toplama = (eded) => {

  return eded + 5;
};

const cixma = (eded) => {
  return eded - 5;
};

const riyaziHesablama = (eded, riyaziFunksiya) => {
  let result = riyaziFunksiya(eded);
  console.log(`Bu ${eded} uzerinde emeliyyat aparildi ve cavab ${result} oldu!`);

};

riyaziHesablama(46, cixma);
