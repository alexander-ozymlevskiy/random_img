// Рандомне число від 1 до 9
const randomImg = 1 + Math.floor(Math.random() * 9);

// Шлях до картинки
const pathToImage = `img/${randomImg}.jpg`;

// Створюємо елемент img
const imgElem = document.createElement("img");

// Підставляємо значення атрибуту від 1 до 9
imgElem.src = pathToImage;

// Додвємо в body
document.body.appendChild(imgElem);
