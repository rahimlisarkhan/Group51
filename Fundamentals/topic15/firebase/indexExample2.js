let globalDATA = null

// let count = 0;
// let sayBudagi =  myDatabase.ref("/say")


// document.querySelector("#decrement").addEventListener("click", function () {
//   count--;
//   console.log(count);
//   sayBudagi.set({ count });
// });
// document.querySelector("#increment").addEventListener("click", function () {
//   count++;
//   console.log(count);
//   sayBudagi.set({ count });

// });

//   myDatabase.ref("/telebeler").set({name:"Jale"})
// console.log(myDatabase);
// let db = firebase.database();


//Telebeler
// let telebeBudagi =  myDatabase.ref("/bookaz/group51/telebeler")
// let telebeBudagi =  myDatabase.ref("telebeler/")


// //CREATE EDIR POST ISI GORUR
// telebeBudagi.push().set({name:"Ruslan",age:30,job:"Developer"}) //POST GORUR SANKI

// document.querySelector("#decrement").addEventListener("click", function () {
//     telebeBudagi.push().set({name:"Ayten",age:30,job:"Developer"}) //POST GORUR SANKI

// });


//PUT ISI GORUR UPDATE
// let xalidinBudagi = myDatabase.ref("telebeler/-N1t8LGyXWzHsqU1P8K0") // PUT oxsardi
// xalidinBudagi.update({name:"Xalid",age:29,job:"Developer"}) //PUT ISLERIN GORUR SANKI



//DELETE ETMEK DELETE METHOD
// telebeBudagi.child("--N1t8I9ZcWkgt2U6Vqil").remove()
// telebeBudagi.child("eacamp").set({"weclome":5})
// telebeBudagi.child("eacamp").remove()


//GET method kimi is goren READ
// telebeBudagi.on("value",function(snap){

//     let realTimeData = snap.val()

//     let arrayVersion = Object.entries(realTimeData)

//     let idObjectArray = arrayVersion.map(item =>{
//         return {
//             id:item[0],
//             ...item[1]
//         }
//     })
//     console.log("Nese geldi",idObjectArray);
//     renderPage(idObjectArray)
//     globalDATA = idObjectArray
// })



// function renderPage(arr){
//     document.querySelector("#telebeList").innerHTML = arr.map(item=>{
//         return `<li id="${item.id}"> ${item.name} </li>`
//     }).join("")
// }



let onlaynBudagi =  myDatabase.ref("onlayndakilar/")

// myDatabase.ref("onlayndakilar/chat").set(1)

onlaynBudagi.on("value",function(snap){

    let budaqdaOlanChildBudaqlarinSayi = snap.numChildren()


    // let userGeldi = onlaynBudagi.push({
    //     fullName: "Xalid"
    // })

    // userGeldi.onDisconnect().remove()

    console.log(budaqdaOlanChildBudaqlarinSayi);

    // let beleBirBudaqVarmi = snap.child("chat").exists()

    // if(!beleBirBudaqVarmi){
    //     myDatabase.ref("onlayndakilar/chat").set(1)
    // }

    // console.log("varmi",beleBirBudaqVarmi);

})



onlaynBudagi.once("value",function(snap){

    let usaqGeldi = onlaynBudagi.push({fullname:"Xalid"})
    usaqGeldi.onDisconnect().remove()

    console.log(snap.numChildren());

})