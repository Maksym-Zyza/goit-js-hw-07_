// ====== СОЗДАНИЕ ДИНАМИЧЕСКОГО ЕЛЕМЕНТА
import products from "./products.js";
console.log(products);
/* <div>
  <h2>Сервоприводы</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita amet
    tempora, officiis corrupti ex possimus dolor impedit, reiciendis cum dolorem
    voluptatum. Nostrum eius temporibus magni totam dolorem eum. Optio, nemo!
  </p>
  <p>Цена: 2000</p>
</div>; */

// ======= Функция создания и сбора елемент в DOM-дерево
const createProductCard = (product) => {
  // ======= Создаем елемент в пам'яти для добавление в DOM
  const conteinerRef = document.createElement("div");
  conteinerRef.classList.add("product-card");

  const titleRef = document.createElement("h2");
  titleRef.textContent = product.name;
  titleRef.classList.add(
    "card-title",
    product.available ? "card-title--available" : "card-title--not-available"
  );

  const textRef = document.createElement("p");
  textRef.textContent = product.description;
  textRef.classList.add("card-text");

  const priceRef = document.createElement("p");
  priceRef.textContent = product.price;
  priceRef.classList.add("card-prise");

  // ======  Сбираем DOM-дерево (гроздь елементов)
  conteinerRef.append(titleRef, textRef, priceRef);

  return conteinerRef;
};
// console.log(createProductCard(products[0]));
// console.log(createProductCard(products[1]));

// ======  Собираем в массив собранние елементи (созданние карточки)
const ProductCards = products.map((product) => createProductCard(product));
// console.log(ProductCards);

// ======  Добавляем в ДОМ распиленний массив созданих елементов (в существующий тег)
const productsListRef = document.querySelector(".js-products");
productsListRef.append(...ProductCards);
console.log(productsListRef);
