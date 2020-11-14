// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

console.log("Task7:");

const inputRef = document.querySelector("#font-size-control");
console.log(inputRef);

const spanRef = document.querySelector("#text");
console.log(spanRef);

inputRef.addEventListener("input", function () {
  spanRef.style.fontSize = inputRef.value + "px";
});
