// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDb9gJHdInzAe7zcU_LdAQoz9WiJsjPRO8",
    authDomain: "testapp-cc335.firebaseapp.com",
    databaseURL: "https://testapp-cc335-default-rtdb.firebaseio.com",
    projectId: "testapp-cc335",
    storageBucket: "testapp-cc335.appspot.com",
    messagingSenderId: "909484413616",
    appId: "1:909484413616:web:7e755affb3cc880bb46175"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let db = firebase.database();

console.log(db);

// let count = 0
db.ref("/test").set({
            count: 8888,
        })

//Database yazirma WRITE --------------------------------------------
// document.querySelector('#go').onclick = function () {
//     count++

//     db.ref("/jobs").set({
//         count: count,
//         price: 11,
//         total_price: 11 * count
//     })

// }

// let usersBudagi = db.ref("/users/")

// document.querySelector('#go').onclick = function () {
//     count++

// usersBudagi.push().set({
//     full_name: "Yasar",
//     age: 22
// })

// }


//Update ucun ---------------------------------------------------------
// document.querySelector('#go').onclick = function () {
//     count++

//     db.ref("/users/-MqynhoZSDRCSQuzpmln").set({
//         full_name: "Elsad", // evvel john idi
//         age: 24
//     })

// }

// var globalData = null

//Read-----------------------------------------------------
// usersBudagi.on("value", function (snap) {
//     let data = snap.val()

//     let yeniArrayIDli = Object.entries(data).map(kicikArrayler => {
//         istifadeciObyekti = {
//             id: kicikArrayler[0],
//             ...kicikArrayler[1]
//         }

//         return istifadeciObyekti
//     })

//     globalData = yeniArrayIDli

//     render(globalData)
// })


// setTimeout(function(){
//     console.log(globalData);
// },5000)


// let jobsBudagi = db.ref('jobs')

// jobsBudagi.on("value",function(snap){


//     if(snap.child('price').exists()){
//         snap.child('price').set(115)


//     }else{
//         console.log('Get admini yarat');
//     }

//     console.log(deyer);
// })


// jobsBudagi.child('count').set(105);



// let usersBudagi = db.ref('users')

// usersBudagi.on("value",function( snap ){
//     let saylari = snap

//     console.log( saylari.numChildren() );

// })






let userAdi = prompt('Adiniz nedi?')

let connectionsUser = db.ref('/connections')


connectionsUser.once("value", function () {

    let userGeldi = connectionsUser.push({
        fullName: userAdi
    })

    userGeldi.onDisconnect().remove()

})




connectionsUser.on("value", function (snap) {
    let div = document.createElement('h1')
    div.innerText = snap.numChildren()

    document.body.appendChild(div)
})