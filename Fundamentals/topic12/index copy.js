// rest API

// C reate   POST
// R ead     GET
// U ptade   PUT
// D elete   DEL

// header:{
//   kimterefinden:"22hh32h32",
//   melumat:"json"
// }

// body:{
//     melumat:{
//         basliq:"Titanic",
//         il:"1997"
//     }
// }

// $.ajax({
//     url: url,
//     dataType: "json",
//     type: "Post",
//     async: true,
//     data: { },
// })
let postData = {
  title: "AJAx ile Ruslana gore put etdik",
  body: "Consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
};

$(document).ready(function () {
  //   fetch("https://bloggy-api.herokuapp.com/posts/", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     // body:postData
  //   })
      // .then((res) => {
      //   let secondPromise = res.json();
      //   return secondPromise;
      // })
  //     .then((data) => {
  //       console.log(data);
  //     });

//   let promise = $.ajax({
//     url: "https://bloggy-api.herokuapp.com/posts",
//     method:"GET",
//     // headers:{
//     //     "api-key":"43jhfs",
//     //     "Content-Type":"application/json"
//     // }
//     // data:{
//     //     apiKey:"dsasd",
//     //     t:"titanic"
//     // }
//   });

//   promise.then((res) => {
//     console.log(res);
//   });











});
