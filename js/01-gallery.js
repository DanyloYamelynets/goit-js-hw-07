import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1
const categoriesList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});

// 2
const ingredientsList = document.querySelector("#ingredients");
const liIngredients = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.toggle("item");
  ingredientsList.append(li);
});

// 3
const imagesList = document.querySelector(".gallery");
imagesList.classList.add("list");
const markup = images
  .map(
    ({ url, alt }) =>
      `<li>
      <img src="${url}" alt="${alt}" width=400 />
    </li>`
  )
  .join("");
imagesList.insertAdjacentHTML("beforeend", markup);

// 4
let Value = 0;
const counterValue = document.querySelector("#value");
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');

const decrementClick = () => {
  Value -= 1;
  counterValue.textContent = Value;
};
const incrementClick = () => {
  Value += 1;
  counterValue.textContent = Value;
};

btnDec.addEventListener("click", decrementClick);
btnInc.addEventListener("click", incrementClick);


// 5
const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onInputChange);

function onInputChange(event) {
  outputName.textContent = event.currentTarget.value || "Anonymous";
}


// 6
const inputValidation = document.querySelector("#validation-input");
const textLength = document.querySelector("[data-length]");

inputValidation.addEventListener("blur", (e) => {
  if (e.target.value.length === Number(textLength.dataset.length)) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  } else {
    inputValidation.classList.add("invalid");
    inputValidation.classList.remove("valid");
  }
});



// 7
const textSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

textSize.addEventListener("input", () => {
  text.style.fontSize = `${textSize.value}px`;
});


// 8
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onloginFormSubmit);

function onloginFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    return alert("All inputs should be filled");
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  event.currentTarget.reset();
}



// 9
const myColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", onChangeColor);

function onChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  myColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  console.log(document.body);
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
