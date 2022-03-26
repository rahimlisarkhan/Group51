var title = document.querySelector("#bookTitle");
// var body = document.querySelector("body");
var body = document.body
console.log(document.URL);
// title.innerHTML = "Hey yazdim <strong>salam</strong>"
// var a = title.innerHTML

// title.setAttribute('class',"text-danger")
// let a = title.getAttribute('id');
title.style.width = "100px";
title.style.backgroundColor = "red";
title.style.color = "yellow";
// console.log(a);

let h5 = document.createElement("h5");
h5.innerHTML = " yeni yaradilan ";
h5.style.color = "blue";
h5.style.fontSize = "50px";
h5.setAttribute("id", "yeniID");
console.log(h5);

// body.appendChild(h5);
// body.replaceChild(h5,title)
// body.removeChild(title);
