// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

const item = document.querySelector(".item");
let delayNumber = parseInt(item.dataset.delay) || 1000;
let endNumber = parseInt(item.dataset.endNumber) || 10;

const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.3,
};

const callback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {

			let counter = Number(item.textContent);

			let timer = setInterval(() => {
				if (counter >= endNumber) {
					clearInterval(timer);
				} else {
					counter++;
					item.textContent = counter;
				}
			}, delayNumber);

			observer.unobserve(item);
		}
	});
};

let observer = new IntersectionObserver(callback, options);
observer.observe(item);
