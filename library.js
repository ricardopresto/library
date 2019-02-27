let library = [];

let modal = document.getElementById("modal");
let addBtn = document.getElementById("addBtn");
let submit = document.getElementById("submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let year = document.getElementById("year");
let card = document.getElementById("card0");
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
  let index = library.length-1;
  if (index == 0) {
    let details = card.childNodes;
    details[1].textContent = newbook.title;
    details[3].textContent = newbook.author;
    details[5].textContent = newbook.year;
  }
  else {
  let newcard = card.cloneNode(true);
  container.appendChild(newcard);
  let details = newcard.childNodes;
  details[1].textContent = newbook.title;
  details[3].textContent = newbook.author;
  details[5].textContent = newbook.year;
  newcard.id = `card${index}`;
  }
  title.value = "";
  author.value = "";
  year.value = "";
  modal.style.display = "none";
}