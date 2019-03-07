let library = [];
let cardindex = 0;
let totalbooks = 0;

let modal = document.getElementById("modal");
let addBtn = document.getElementById("addBtn");
let submit = document.getElementById("submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let year = document.getElementById("year");
let card = document.getElementById("card");
let container = document.getElementById("container");
let remove = document.getElementById("rem");
let total = document.getElementById("total");

function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

addBtn.onclick = function() {
  modal.style.display = "flex";
  title.focus();
};

submit.onclick = function() {
  let newbook = new book(title.value, author.value, year.value);
  library.push(newbook);

  let newcard = card.cloneNode(true);
  let details = newcard.getElementsByTagName("*");
  details[0].textContent = newbook.title;
  details[1].textContent = newbook.author;
  details[3].textContent = newbook.year;
  details[4].id = `rem${cardindex}`;
  newcard.id = `card${cardindex}`;
  container.appendChild(newcard);
  newcard.style.display = "flex";
  details[4].addEventListener("click", removeFunction);
  cardindex = cardindex + 1;
  totalbooks = totalbooks + 1;

  title.value = "";
  author.value = "";
  year.value = "";
  modal.style.display = "none";
  total.textContent = "Total: " + String(totalbooks);
};

function removeFunction() {
  let toRemove = String(event.srcElement.id).slice(3);
  toRemove = Number(toRemove);
  let rem = document.getElementById(`card${toRemove}`);
  container.removeChild(rem);
  library.splice(toRemove, 1);
  totalbooks = totalbooks -1;
  total.textContent = "Total: " + String(totalbooks);
}
