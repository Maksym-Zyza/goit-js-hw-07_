// Todo
// Парс HTML, теги и элементы
// Построение DOM и блокирующие скрипты
// Иерархия DOM-узлов
// Объекты window и document
// Поиск DOM-узлов с querySelector
// Свойства элемента и свойство textContent
// Работа с classList и атрибутами
// Создание узлов с createElement
// Вставка узлов: appendChild, insertBefore, append, prepend и т. д.
// Удаление: removeChild и remove

// ====== querySelector - ссилка на первий елемент
// const titleRef = document.querySelector(".page-title");
// console.dir(titleRef);

// ====== querySelectorAll - ссилка на все елементи
// const listRef = document.querySelectorAll(".list");
// console.log(listRef);

// // ====== textContent - изменяет текст
// // titleRef.textContent = "Привет Мир!!!";

// // ====== стандартние свойства :src, alt - изменяее свойств обьекта
// const imageRef = document.querySelector(".hero-imege");
// console.dir(imageRef);
// imageRef.src = "https://m.33korovy.in.ua/pic/images/cat-revnuet.jpg";
// imageRef.alt = "Это кот бандит:)";

// // ====== style - изменяет стили
// const activRef = document.querySelector(".list.activ");
// console.dir(activRef);
// // activRef.hidden = true;
// activRef.textContent = "New string 2";
// activRef.style.color = "red";

// // ====== classList.add - добавление класса
// activRef.classList.add("nav_link_primary");

// ====== Создание елемента в пам'яти для добавление в DOM
// const titleRef = document.createElement("h1");
// titleRef.textContent = "Динамическое сознадине заголовка! Вау!";
// titleRef.classList.add("site-title");
// titleRef.id = "title";
// console.log(titleRef);

// ======  prepend/insertBefore  - Добавление елемента в начало списка
// const nav = document.querySelector(".nav");
// console.log(nav);

// const listItemRef = document.createElement("li");
// listItemRef.textContent = "NEW String";
// // nav.prepend(listItemRef);
// nav.insertBefore(listItemRef, nav.firstElementChild);

// ====== СОЗДАНИЕ ДИНАМИЧЕСКОГО ЕЛЕМЕНТА
const product = {
  name: "Сервоприводы",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
  price: 2000,
  available: true,
};

{
  /* <div>
  <h2>Сервоприводы</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet
    tempora, officiis corrupti ex possimus dolor impedit, reiciendis cum dolorem
    voluptatum. Nostrum eius temporibus magni totam dolorem eum. Optio, nemo!
  </p>
  <p>Цена: 2000</p>
</div>; */
}
// ======= Создаем елемент в пам'яти для добавление в DOM
const conteinerRef = document.createElement("div");
conteinerRef.classList.add("product-card");
// console.log(conteinerRef);

const titleRef = document.createElement("h2");
titleRef.textContent = product.name;
titleRef.classList.add("card-title");
// console.log(titleRef);

const textRef = document.createElement("p");
textRef.textContent = product.description;
textRef.classList.add("card-text");
// console.log(textRef);

const priceRef = document.createElement("p");
priceRef.textContent = product.price;
priceRef.classList.add("card-prise");
// console.log(priceRef);

const availableRef = document.createElement("span");
availableRef.textContent = product.available;
availableRef.classList.add("card-available");
// console.log(availableRef);

// ======  Сбираем DOM-дерево (гроздь елементов)
// conteinerRef.appendChild(availableRef);
// conteinerRef.appendChild(titleRef);
// conteinerRef.appendChild(textRef);
// conteinerRef.appendChild(priceRef);
conteinerRef.append(availableRef, titleRef, textRef, priceRef);

// ======  Добавляем в ДОМ - нужно добавить в существующий тег:
//  Добавляем в <div id="root"></div>
const cardRootRef = document.querySelector("#root");
cardRootRef.appendChild(conteinerRef);
console.log(cardRootRef);

// ====== СОЗДАНИЕ ДИНАМИЧЕСКОГИХ ЕЛЕМЕНТОВ ФУНКЦИЯМИ - JS/create-card.js
