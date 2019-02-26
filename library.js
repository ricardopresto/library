let library = [];

let modal = document.getElementById("modal");
let addBtn = document.getElementById("addBtn");
let submit = document.getElementById("submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let year = document.getElementById("year");
let card = document.getElementById("card");
let container = document.getElementById("container");


function book(title, author, year) {
	this.title = title;
	this.author = author;
  this.year = year;
}

addBtn.onclick = function() {
  modal.style.display = "flex";
  title.focus();
}

submit.onclick = function() {
  let newbook = new book(title.value, author.value, year.value);
  library.push(newbook);
  let newcard = card.cloneNode(true);
  container.appendChild(newcard);
  //alert(library[library.length-1].title);
  
  modal.style.display = "none";
}