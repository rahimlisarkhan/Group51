var container = document.querySelector("body");

container.style.backgroundColor = "green";

//Yaratdim
let aboutContent = document.createElement("div");
let aboutTitle = document.createElement("h1");
let aboutDesc = document.createElement("p");
let aboutImg = document.createElement("img");

//Elave olundu
container.appendChild(aboutContent);
aboutContent.append(aboutTitle, aboutDesc, aboutImg);

aboutTitle.innerHTML = "About title";
aboutTitle.setAttribute("class", "textTitle");
aboutDesc.innerHTML = "About desc information ........";
aboutImg.setAttribute(
  "src",
  "https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
);
aboutImg.style.width = "200px";
