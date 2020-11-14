// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

/* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */

console.log("Task4:");

let counterValue = 0;
const valueRef = document.querySelector("#value");
const battonDecRef = document.querySelector("button");
const battonIncRef = document.querySelector("[data-action='increment']");

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

battonDecRef.addEventListener("click", decrement);

battonIncRef.addEventListener("click", increment);
