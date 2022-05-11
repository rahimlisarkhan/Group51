// // document.cookie = "name=Sarkhan;"
// // document.cookie = "age=27;"


// function getItemCookie(key) {

//     let cookieArr = document.cookie.split(';')

//     for (element of cookieArr) {
//         let elArr = element.split('=')

//         if (elArr[0].trim() === key) {
//             return elArr[1];
//         }
//     }

// }

// function setItemCookie(key, value) {
//     document.cookie = key + '=' + value + ";"
// }

// setItemCookie("moodle","Wasf3746ksd")


// let a = getItemCookie("name")


// console.log(a);

// let myObj = {

// }

// myObj.deyer = "name=sarkhan"

// let a = myObj.deyer



//Cookie yazmaq set
document.cookie = "name=SArkhan;"
document.cookie = "yas=27;"


//Cookie den oxumaq get

let oxumaq = document.cookie

let yeniArray = oxumaq.split(";")

let adi = yeniArray[1].split("=")[1]
let yasi = yeniArray[0].split("=")[1]

console.log(adi);
console.log(yasi);
console.log(yeniArray);