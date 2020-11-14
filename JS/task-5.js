// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

console.log("Task5:");

const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const spanRef = document.querySelector("#name-output");
console.log(spanRef);

const textInpute = (e) => {
  spanRef.textContent = e.target.value;
  if (spanRef.textContent === "" || e.target.value === " ") {
    spanRef.textContent = "незнакомец";
  }
};

const dellTextInpute = (e) => {
  e.target.value = "";
  spanRef.textContent = "незнакомец";
};

inputRef.addEventListener("input", textInpute);
inputRef.addEventListener("click", dellTextInpute);
