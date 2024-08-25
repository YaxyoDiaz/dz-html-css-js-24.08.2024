// Запрашиваем у пользователя имя
const userName = prompt("Введите ваше имя:");

// Запрашиваем у пользователя цвет фона для всей страницы
const pageColor = prompt("Введите цвет фона для всей страницы (например, 'lightblue'):");

// Запрашиваем у пользователя цвет фона для карточки
const boxColor = prompt("Введите цвет фона для карточки (например, 'white'):");

// Устанавливаем имя в элемент h1
document.getElementById("name").innerText = userName;

// Применяем цвет фона для страницы
document.body.style.backgroundColor = pageColor;

// Применяем цвет фона для .box
document.querySelector(".box").style.backgroundColor = boxColor;