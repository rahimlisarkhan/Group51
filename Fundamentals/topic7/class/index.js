// // class Car {
// //   marka = "";
// //   model = "";
// //   year = null;

// //   constructor(ad, modeli, ili) {
// //     if (!ad && !modeli && !ili) {
// //       return;
// //     }

// //     this.marka = ad;
// //     this.model = modeli;
// //     this.year = ili;
// //     console.log("Yaradildi");
// //   }

// //   start() {
// //     console.log("Masin start goturuldu!!");
// //   }
// // }

// // var car1 = new Car();
// // var car2 = new Car("BMW", "X6", 2011);
// // var car3 = new Car("Mercedez", "180", 1986);

// // console.log("car1", car1);
// // console.log("car2", car2);
// // console.log("car3", car3);

// class DateTime {
//   timeZone = document.getElementById("timeZone");

//   sec = 0;
//   min = 0;
//   hr = 0;

//   constructor(hr, min, sec) {
//     this.hr = hr;
//     this.min = min;
//     this.sec = sec;
//   }

//   getHour(newHr) {
//     // if (newHr) {
//     //   return newHr;
//     // }

//     var hour = newHr ? newHr : this.hr;

//     return hour;
//   }

//   getMin() {
//     return this.min;
//   }

//   getSec() {
//     return this.sec;
//   }

//   getNow() {
//     if (this.hr > 18) {
//       this.timeZone.style.color = "blue";
//     } else {
//       this.timeZone.style.color = "yellow";
//     }
//     timeZone.innerHTML = `${this.hr}:${this.min}:${this.sec}`;
//     return `${this.hr}:${this.min}:${this.sec}`;
//   }
// }

// var timeBaku = new DateTime(19, 38, 05);
// var timeLondon = new DateTime(16, 38, 05);

// // var a = time.hasOwnProperty("hr")

// // console.log(timeBaku.getNow());
// console.log(timeBaku.getHour(21));

class AsanImza {
  personalTelInputDOM = document.querySelector("#personalTel");
  vetendas = "";
  #tel = "";

  constructor(adi, nomre) {
    this.vetendas = adi;
    this.#tel = nomre;
  }

  get number() {
    return this.#tel;
  }

  set number(a) {
    this.#tel = a;
  }

  adinDeyis(ad) {
    if (ad.trim() === "") {
      alert("Zehmet olmasa sisteme duzgun daxil edin");
      return;
    }

    this.vetendas = ad;
    alert("Ugurla ad deyisdi");
  }

  tesekkur() {
    alert("Tesekkur edirik Emeliyyata gore");
  }

  nomreElaveEt() {
    var nomre = this.personalTelInputDOM.value;

    if (nomre.trim() === "") {
      alert("Zehmet olmasa sisteme duzgun daxil edin");
      return;
    }

    console.log("inputdan gelen", nomre);
    this.#tel = nomre;
    alert("Ugurla nomre elave olundu");
    this.tesekkur();
  }
}

var personal = new AsanImza("Sarkhan", "9454656565");

// personal.#tel = "

// personal.number = 54565645465

// console.log(personal.number);
document.querySelector("#addPersonalTel").addEventListener("click", () => {
  personal.nomreElaveEt();
});

// console.log(personal);

// class A {
//   static name = "Tariyel";

//   static start() {
//     console.log(this.name + " xos geldi");
//   }
// }

// A.start();
// console.log(A.name);





class Canli {
  nefes = true
  olur = true
  inkisad = true

  yatmaq(){
    console.log("Hergun yatmalidir");
  }
}



class Heyvan extends Canli {
  ayaqlar = 4
  yirtici = true
}


class Insan extends Canli{
  ad = ""
  ayaqlar = 2
  ozuOzuzunMehfEtme = true

  constructor(ad){
    super()

    this.ad = ad
    this.nefes = "alir"
  }


  durmaq(){

    super.yatmaq()
  }
}


var ejdaha = new Heyvan()

var personal = new Insan("John")

console.log(personal);
console.log(ejdaha);


class Baby extends Insan{
  aglamaq = true
}



var usaq = new Baby()

console.log(usaq);
