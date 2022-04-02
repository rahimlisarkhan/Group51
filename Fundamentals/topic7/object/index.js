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

var car = {
  marka: "BMW",
  model: "X6",
  year: 2007,
  isSpeed: 0,

  showThis: function () {
    console.log(this);
    // var copyThis = this

    // var A = function(){
    //     console.log("daxili this",copyThis);
    // }

    var A = () => {
      console.log("daxili this", this);
    };

    A();
  },

  start: function (suret) {
    this.isSpeed = suret;
    console.log("Masin yerinden goturuldu " + this.isSpeed);
  },

  stop: function () {
    car.isSpeed = 0;
  },
};

var car2 = { ...car };

// car.country = "Germany";

// car.firma = car.marka

// delete car.marka;

// car.year = 2011;

// car.deadlineYear = car.year

// car.year = 2015

car.start(50);

car2.start(100);

// car.showThis();
// car2.showThis();

// console.log("car1", car);
// console.log("car2", car2);
