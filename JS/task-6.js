// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

console.log("Task6:");

const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
const dataRef = inputRef.getAttribute("data-length");

const addClass = (e) => {
  inputRef.classList = "";
  if (e.target.value.length === Number(dataRef)) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
};

const dellTextInpute = (e) => {
  e.target.value = "";
  inputRef.classList.remove("valid");
  inputRef.classList.remove("invalid");
};

inputRef.addEventListener("change", addClass);
inputRef.addEventListener("click", dellTextInpute);
