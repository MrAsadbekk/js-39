const content = document.querySelector(".content");

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Science Fiction",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Fiction",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
  },
];

books.sort((a, b) => {
  return a.year - b.year;
});

const card = books.map((num) => {
  return `
   <div class="box">
     <p>Id: ${num.id}</p>
     <h2>${num.title}</h2>
     <p>Author: ${num.author}</p>
     <p>Year: ${num.year}</p>
     <p>genre: ${num.genre}</p>
   </div>
      `;
});

content.innerHTML = card.join("");

//////////////////////////////////////////////////////////////////

const box1 = document.querySelector(".box-one");
const form = document.querySelector(".box__form");
const myInput = document.querySelector(".box__id");
const btn = document.querySelector(".box__btn");

const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "C" },
  { id: 3, name: "Charlie", grade: "B" },
  { id: 4, name: "Dave", grade: "A" },
  { id: 5, name: "Eve", grade: "B" },
];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const id = myInput.value;

  const checkStudent = students.find((student) => student.id == id);

  if (checkStudent) {
    box1.innerHTML = `<h2>Name: ${checkStudent.name}</h2>
  <p>grade: ${checkStudent.grade}</p>
  `;
  } else {
    box1.innerHTML = `<p>Bunday id li o'quvchi yo'q</p>`;
  }

  form.reset();
});
