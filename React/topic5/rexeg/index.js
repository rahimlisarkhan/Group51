//https://yellowpages.az/

// let text = `diqqet - baki`
// let text = "t"
// let a = new RegExp(/\d/)

// let netice = text.match(/\s/)
// let netice = /am/.test(text)
// let netice = /^s/.test(text)
// let netice = 5/t$/.test(text)
// let netice = /^t$/.test(text)

// let netice = /^t$/.test(text)
// let test = '        '.replace(/[\s\t\r]/g,"")

// For Real work project
// const array = [
//   { title: "lale", price: 2.9 },
//   { title: "baki", price: 2.9 },
//   { title: "bura bakidir", price: 2.9 },
//   { title: "salam La", price: 2.9 },
// ];
// let newAray = array.filter((item) => /^la/ig.test(item.title));

// console.log(newAray);

// const rex = new RegExp(/\d/)

// const text = "bura bakidir";
// const text = "baki bakidir Ildir";

// const text = `

// te  st

// `

// const myRex = /^a/;
// const myRex = /^baki$/;
// const myRex = /i/ig;
// const myRex = /[\s\t\r]/g;
// const myRex = /^\s/g;

// const netice = myRex.test(text);

// console.log(netice);

// let yeniSoz = text.replace(myRex,"u")
// let yeniSoz = text.replace(/\s/,"")

// console.log(yeniSoz);
// let newWord = text.replace(/\^/g,"")

// console.log(newWord,"newWord");


// let netice = /\d/.test(text)
// let netice = /[0-9]/.test(text)

// let netice = /\w/.test(text)
// let netice = /[a-zA-Z0-9]/.test(text);

// let netice = /\$/.test(text)

// let netice = /\\/.test(text)

// let netice = /a.a/g.test(text)
// let netice = text.match(/a.a/g)
// let netice = text.match(/\d/g)
// let netice = text.match(/\D/g)
// let netice = text.match(/[^0-9]/g)

// let netice = /\d/.test(text)
// let netice = /[0-9]/.test(text)
// let netice = /[^0-9]/.test(text)
// let netice = /^[0-9]/.test(text)
// let netice = /^\w/.test(text)
// let netice = /^\W/.test(text)
// let netice = /\w/.test(text)
// let netice = /\W/.test(text)
// let netice = /\s/.test(text)
// let netice = /\n/.test(text)

// let text = `diqqet daaaat deeeeet`;

// let netice = /diqq\d?et/.test(text)


// let netice = /diqq*et/.test(text)
// let netice = /d.*t/g.test(text)
// let netice = /^d.*t$/.test(text)
// let netice = /^d.+t$/.test(text)
// let netice = /^d.+t$/.test(text)


// let netice = /d.{4}t/g.test(text)
// let netice = /[di|da]{4}/.test(text)

// let newArray  = text.match(/[da|di]{4}/g)

// console.log(newArray, " result");
// console.log(netice, " result");



// let email = "elsad@gmail.inbox"
// let emailString = "<div> <span>elsad@gmail.com</span> dsdas dddadd sarkhan@info.ru dadaddsds @  <h1>dsadad</h1> test@mail.ru </div>"

// // let emailRegex = /^[a-zA-Z0-9][\w\.]+@\w\.[a-zA-Z]{3}/
// let emailRegex = /\w+@\w+\.[a-zA-Z]{1,3}/g

// // let emailRegex1 = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/
// // let netice = emailRegex.test(email)

// let emailsStrings = emailString.match(emailRegex)

// console.log(emailsStrings,"netice");


// let netice = /^[a-zA-Z0-9][\w\.]+@\w+\.[a-zA-Z]{1,5}$/.test(email)
// let netice = /\w+@\w+\.[a-zA-Z]{1,5}/.test(email)
// let netice = email.match(/\w+@\w+\.[a-zA-Z]{1,5}/g)

// let phone = "+(994) 77 399-38-97"
// let phoneRegex = /^\+\(\d{3}\)\s[1-9]{1}\d{1}\s\d{3}-\d{2}-\d{2}$/
// let phoneRegex1 = /^\+\(\d{1,6}\)\s\d{1,6}\s\d+-\d{2}-\d{2}$/


// let netice = phoneRegex.test(phone)

// console.log(netice);


// let netice = /^\+\(\d{1,6}\)\s\d{1,6}\s\d+-\d{2}-\d{2}$/.test(email)

// console.log(netice);

let phoneRex = /\+[0-9]{12}/g
let nummbers = nummbersHTML.match(phoneRex)

console.log(nummbers);