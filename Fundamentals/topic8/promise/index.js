// function a (){

//     if(data){
//       b(data)
//     }
//     else{
//       console.log("Error");
//     }
//   }

//   a()

// let myPromise = new Promise((resolve, reject) => {
//   let data = 5;
//   if (data > 0) {
//     resolve("Eladi hersey");
//   } else {
//     reject("Xeta");
//   }
// });

// myPromise.then(
//   (res) => {
//     {
//       console.log(res);
//     }
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// myPromise.then(
//     (res) => {
//       {
//         console.log(res);
//       }
//     }
//   ).then().catch((err) => {
//     console.log(err);
//   })

//   ;

// ``

let listElement = document.querySelector("#list");

function renderPage(data) {
  console.log("renderin ici", data);

  listElement.innerHTML = data
    .map(
      (book) => `
  <div>
    <div>
    ${book.title}
    </div>
    <div>
    ${book.author}
    </div>
    <strong>
    ${book.price}
    </strong>
  </div>
  `
    )
    .join("");
}

function errorMessage(err) {
  listElement.innerHTML = err;
}

let myPromise = new Promise((resolve, reject) => {
  let data = null;

  setTimeout(() => {
    if (data) {
      resolve(data);
    } else {
      reject("Error server data");
    }
  }, 2000);
});



const fillData = async () => {
  try {
    let data = await myPromise;
    console.log(data);
    renderPage(data);
  } catch (err) {
    errorMessage(err);
  } finally {
    console.log("Hersey eladi");
  }
};

fillData();

// async function b(){
//     console.log("i am b");
// }

// function c(){
//     console.log("I am c");
// }

// async function a (){

//     await b()

//     c()

// }

// a()
// myPromise
//   .then((res) => {
//     console.log("then", res);
//     renderPage(res);
//   })
//   .catch((err) => {
//     errorMessage(err);

//     console.log("Bug");
//     ß;
//   })
//   .finally(() => {
//     alert("Emeliyyat bitdi");
//   });

// myPromise
//   .then((res) => {
//     console.log("then", res);

//     return res

// }).then(yuxaridanGelen => {
//     console.log("yuxaridaki geldi",yuxaridanGelen);
//     renderPage(yuxaridanGelen);
//   })
//   .catch((err) => {
//     errorMessage(err);

//     console.log("Bug");
//     ß;
//   }).finally(()=>{
//       alert("Emeliyyat bitdi")
//   });

try {
  console.log(a);
  let a = 5;
} catch (err) {
    document.querySelector("h1").innerHTML =err
 
    throw new Error('Xetaolu')
  console.log(err);
}

// function otureceyimCallback(resolve,reject){

//   if(car){
//     resolve("Hersey bomba kimidi")
//   }else{
//     reject("Server")
//   }

// }

// let a = new Promise(otureceyimCallback)

