import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Header from "./category/Header";

function Library() {
  const element = document.createElement("div");

  const APP = `
    <div class="container">
        ${Header()}
    </div>
    
    `;

  // element.setAttribute("class","red")
  // // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = APP;

  return element;
}

document.body.appendChild(Library());
