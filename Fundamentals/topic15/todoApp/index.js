console.log(myBookStoreDB);

let bookCollection = myBookStoreDB.ref("/books");

document.querySelector("#addTodo").addEventListener("click", function (e) {
  e.preventDefault();

  let book_title = document.querySelector("#bookTitle").value;
  let book_price = document.querySelector("#bookPrice").value;

  let formData = {
    book_title,
    book_price,
  };
  console.log(formData);

  bookCollection.push().set(formData);
});

bookCollection.on("value", function (snap) {
  let data = Object.entries(snap.val()).map((item) => {
    return {
      id: item[0],
      ...item[1],
    };
  });

  console.log(data);
  renderPage(data);

});


function removeBook(button){
    let bookID = button.value
    console.log(bookID);
    bookCollection.child(bookID).remove()
}



function renderPage(arr) {
  document.querySelector("table tbody").innerHTML = arr
    .map((item) => {
      return ` <tr><td>${item.book_title}</td><td>${item.book_price}</td><td><button onclick="removeBook(this)" value="${item.id}" >sil</button></td></tr>`;
    })
    .join("");
}


let a = [3,4.5]

let b = [...a]