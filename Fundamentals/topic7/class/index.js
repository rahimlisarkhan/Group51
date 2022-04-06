class Car {
  marka = "";
  model = "";
  year = null;

  constructor(ad, modeli, ili) {
    if (!ad && !modeli && !ili) {
      return;
    }

    this.marka = ad;
    this.model = modeli;
    this.year = ili;
    console.log("Yaradildi");
  }

  start() {
    console.log("Masin start goturuldu!!");
  }
}

var car1 = new Car();
var car2 = new Car("BMW", "X6", 2011);
var car3 = new Car("Mercedez", "180", 1986);

console.log("car1", car1);
console.log("car2", car2);
console.log("car3", car3);
