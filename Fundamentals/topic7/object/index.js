// var personalInfo = ["name", "age", "children"];
// var personalValue = ["Sarkhan", "27"];

// // console.log(personalInfo[0] + " " + personalValue[0]);

// //JSON
// //JavaScript Object National

// var personal = {
//   name: "Sarkhan",
//   age: 27,
//   address: ["filan street", "job street"],
//   married: true,
//   family: {
//     name: "Asyley",
//     role: "father",
//     age: 50,
//   },
//   children: [
//     {
//       name: "Marry",
//       age: 4,
//       education: [
//         {
//           school: "Baxca",
//           address: "Ahmedli",
//         },
//       ],
//     },
//     {
//       name: "John",
//       age: 2,
//       education: [],
//     },
//   ],
// };

// // console.log(personal.children[1].name);
// console.log(personal);

// // for (key in personal){
// //     console.log(personal[key]);
// // }

// // console.log(personal.children[1]);
// // console.log(personal["age"]);

// var car = {
//   marka: "BMW",
//   model: "X6",
//   year: 2007,
//   isSpeed: 0,

//   showThis: function () {
//     console.log(this);
//     // var copyThis = this

//     // var A = function(){
//     //     console.log("daxili this",copyThis);
//     // }

//     var A = () => {
//       console.log("daxili this", this);
//     };

//     A();
//   },

//   start: function (suret) {
//     this.isSpeed = suret;
//     console.log("Masin yerinden goturuldu " + this.isSpeed);
//   },

//   stop: function () {
//     car.isSpeed = 0;
//   },
// };

// var car2 = { ...car };

// car.country = "Germany";

// car.firma = car.marka

// delete car.marka;

// car.year = 2011;

// car.deadlineYear = car.year

// car.year = 2015

// car.start(50);

// car2.start(100);

// car.showThis();
// car2.showThis();

// console.log("car1", car);
// console.log("car2", car2);

// var car1 = {
//   marka: "BMW",
//   model: "X6",
//   year: 2007,
//   isNew: false,
//   img: null,
//   speed: 0,
//   models: [
//     {
//       marka: "BMW",
//       model: "X5",
//     },
//     {
//       marka: "BMW",
//       model: "X5",
//     },
//     {
//       marka: "BMW",
//       model: "X5",
//     },
//   ],

//   start: function (suret) {
//     if (suret >= 50) {
//       console.log("Yavas biraz");
//       // console.log(this);
//       this.goster();
//     }
//     this.speed = suret;
//     console.log("Masin yerinden goturuldu!!! " + this.speed + "km/s");
//   },

//   goster: function () {
//     console.log("Masin sazdi");
//   },
// };

// car1.fuel = "Benzin";

// // car1.start(50);

// var car2 = { ...car1 };

// car2.start(60)

// console.log("car2",car2);
// delete car1.marka

// var a = car1.year
// console.log(a);

// console.log(car1.models[1].model);

// function test() {

//   console.log(this);

// }

// var a = {
//   name: "Obj1",
//   show: function () {
//     console.log("show this", this);

//     // var copyThis = this

//     var B = () => {
//       console.log("this b", this);
//     };

//     B();
//   },
// };

// a.show();

// var a = [
//   ["name", "John"],
//   ["surname", "Doe"],
//   ["age", 45],
// ];

var personal = {
  name: "John",
  surname: "Doe",
  age: 45,
  marry: false,
};

// var arr = Object.keys(personal)
// var arr = Object.values(personal)
// var arr = Object.entries(personal);

// console.log(arr);

// var titleDate = document.querySelector("#titleDate");

// titleDate.dataset.age = 34;

// console.log(titleDate.dataset);

// call apply bind

var obj1 = {
  name: "Obj1",
  age: 45,

  zengEt: function () {
    console.log("Zeng edilir....");
  },
};

var obj2 = {
  number: +994513993897,

  show: function () {
    console.log("Contacts...." + this.number);
  },
};


function stop(a, b, c) {
  // console.log(a + " ve " + b + c);
  this.show();
  console.log(this);
  // this.zengEt();
  // console.log("stop", this);
}

// stop.call(obj1, "Sarkhan", false, 5);

// stop.call(obj2);

var result = stop.bind(obj2);


console.log(result);