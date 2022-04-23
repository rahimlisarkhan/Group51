let words = ["Tariyel", "Ruslan", "Xalid", "Metin", "MehemmedAli"];
let sehfLimiti = 9;

let sozunYeri = document.querySelector("#sozunYeri");
let sehfLimitiDom = document.querySelector("#sehfLimitiDom");
let artiqTexminOlunan = document.querySelector("#artiqTexminOlunan");
let randomWord = (arr) => {
  let num = Math.random() * arr.length;
  let randomFloorNum = Math.floor(num);
  return arr[randomFloorNum];
};

let texminEdilecekSoz = randomWord(words).toLowerCase();
let texminEdilcekSozAltdanXett = "_".repeat(texminEdilecekSoz.length).split("");

//Bura domdu yalniz dom ucun istediyim hala saliram hesablamara aidiyyati yoxdur
sozunYeri.innerHTML = texminEdilcekSozAltdanXett.join(" ");
sehfLimitiDom.innerHTML = `Sehf limiti:${sehfLimiti} (Diqqetli ol sehf etdikce azalir!!!)`;

function checkWord(index, soz) {
  if (index !== -1) {
    texminEdilcekSozAltdanXett[index] = soz;
    console.log(texminEdilcekSozAltdanXett);
    sozunYeri.innerHTML = texminEdilcekSozAltdanXett.join(" ");
  } else {
    sehfLimiti -= 1;
    sehfLimitiDom.innerHTML = `Sehf limiti:${sehfLimiti} (Diqqetli ol sehf etdikce azalir!!!)`;

    let strong = document.createElement("strong");
    strong.innerHTML = ` ${soz} `;
    artiqTexminOlunan.append(strong);
    console.log("sehf limit", sehfLimiti);
  }
}

function startGame(e) {
  console.log(e);
  let texminEdilenHERF = e.key;

  let sozunIndexsi = texminEdilecekSoz.indexOf(texminEdilenHERF);

  console.log(texminEdilecekSoz);
  console.log(sozunIndexsi);
  checkWord(sozunIndexsi, texminEdilenHERF);
}

// window.onkeydown = startGame

function a() {
  b();

  console.log("t");
}

let myPromise5 = fetch("http://www.omdbapi.com/?apikey=ecad4790&s=netflix");

console.log(myPromise5);

myPromise5
  .then(function (res) {
    let ikinciQaytarilanPromise = res.json();
    return ikinciQaytarilanPromise;
  })
  .then(function (res2) {
    console.log(res2);
  });
