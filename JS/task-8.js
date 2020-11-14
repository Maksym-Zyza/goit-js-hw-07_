// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

console.log("Task8:");

const divRef = document.querySelector("#controls");
const inputRef = divRef.querySelector("input");
// console.log(inputRef);

const renderRef = document.querySelector('[data-action="render"]');
// console.log(renderRef);

const destroyRef = document.querySelector('[data-action="destroy"]');
// console.log(destroyRef);

const boxesRef = document.querySelector("#boxes");
console.log(boxesRef);

let total = 0;
inputRef.addEventListener("change", (e) => {
  total = e.target.value;
});

renderRef.addEventListener("click", createBoxes);

const newDivList = [];
function createBoxes(event) {
  let newDiv = "";
  for (let i = 0; i < Number(total); i += 1) {
    newDiv = `<div></div>`;
    newDivList.push(newDiv);
  }
  console.log(newDivList);
  return newDivList;
}

console.log(newDivList);

// const createBoxes = (amount) => {
//   for (let i = 0; i < Number(amount); i += 1) {
//     console.log(`<div>as</div>`);
//   }
//   console.log(Number(amount));
// };
// console.log(createBoxes(total));
// const destroyBoxes = (amount) => {};

// boxesRef.insertAdjacentHTML("beforeend", createBoxes);
