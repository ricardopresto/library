let library = [];

let modal = document.getElementById("modal");
let addBtn = document.getElementById("addBtn");
let submit = document.getElementById("submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let year = document.getElementById("year");
let card = document.getElementById("card0");
let container = document.getElementById("container");
let remove = document.getElementById("rem0");

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
    let details = card.getElementsByTagName("*");
    details[0].textContent = newbook.title;
    details[1].textContent = newbook.author;
    details[3].textContent = newbook.year;
    details[4].addEventListener("click", removeFunction);
  }
  else {
    let newcard = card.cloneNode(true);
    let details = newcard.getElementsByTagName("*");
    details[0].textContent = newbook.title;
    details[1].textContent = newbook.author;
    details[3].textContent = newbook.year;
    details[4].id = `rem${index}`;
    newcard.id = `card${index}`;
    container.appendChild(newcard);
    details[4].addEventListener("click", removeFunction);
  }
  title.value = "";
  author.value = "";
  year.value = "";
  modal.style.display = "none";
}

function removeFunction() {
  let toRemove = String(event.srcElement.id).slice(3);
  toRemove = Number(toRemove);
  let rem = document.getElementById(`card${toRemove}`);
  container.removeChild(rem);
  //TO DO:
  //also remove from library array
  //check removal of card0
}