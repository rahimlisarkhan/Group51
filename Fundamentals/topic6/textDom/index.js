// // var container = document.querySelector("body");
// var container = document.body;


// document.title = "Test yazildi"

// container.style.backgroundColor = "green";

// //Yaratdim
// let aboutContent = document.createElement("div");
// let aboutTitle = document.createElement("h1");
// let aboutDesc = document.createElement("p");
// let aboutImg = document.createElement("img");

// //Elave olundu
// container.appendChild(aboutContent);
// aboutContent.append(aboutTitle, aboutDesc, aboutImg);

// aboutTitle.innerHTML = "About title";
// aboutTitle.setAttribute("class", "textTitle");
// aboutDesc.innerHTML = "About desc information ........";
// aboutImg.setAttribute(
//   "src",
//   "https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
// );
// aboutImg.style.width = "200px";

// aboutImg.src = "https://elshadaghazade.com/assets/logos/elshadaghazade-logo.jpg"
// aboutImg.alt = "elsad agazade"
// aboutImg.id="sekilID"
// console.log(aboutImg.src);



// var contactTitle = document.getElementsByClassName("contactTitle")
var contactTitle = document.querySelector(".contactTitle")

// contactTitle.parentNode.style.backgroundColor = "yellow"
// contactTitle.childNodes[1].style.backgroundColor = "yellow"
// contactTitle.nextElementSibling.style.backgroundColor = "yellow"

console.log(contactTitle.nextElementSibling);