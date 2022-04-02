// var a = 15

// var b = a > 5 ? "5den boyukdur" : "5den kicik deyeridr"

// if(a > 5){
//   b ="sdssdsddss"
// }else{
//   b = "dasadasdasdasasdsad"
// }

var bankAccount = {
  fullName: "Sarkhan Rahimli",
  money: 0,

  balansiGoster: function () {
    var answer = this.money > 0 ? "varlisan pulun var" : "Cibinde sican oynayr";

    console.log(`Sizin balansiniz: ${this.money} manatdir!`);
    console.log(answer);
  },

  balansiArtir: function () {
    var pul = parseInt(prompt("Zehmet vasiti daxil edin"));
    this.money += pul;
    console.log(`Sizin balans ugurla ${pul} manat artirildi.Xeyre xercle`);
  },

  odenisEt: function () {
    if (this.money === 0) {
      alert("Pulunuz catmir");
      return;
    }

    var pul = parseInt(prompt("Zehmet vasiti daxil edin"));

    if (pul <= this.money) {
      this.money -= pul;
      console.log(`Ugurla ${pul} manat odenis olundu!!!`);
      return;
    } else {
      alert("Duzgun daxil edin");
    }
  },
};

window.onkeydown = function (e) {
  switch (e.key) {
    case "s":
      bankAccount.balansiGoster();
      return;
    case "a":
      bankAccount.balansiArtir();
      return;
    case "c":
      bankAccount.odenisEt();
      return;
    default:
      return;
  }
};
