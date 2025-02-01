// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

header.addEventListener("mouseover", () => {
	footer.classList.add("active");
});

header.addEventListener("mouseout", () => {
	footer.classList.remove("active");
});
