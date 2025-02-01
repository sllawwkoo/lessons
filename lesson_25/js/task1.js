// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

document.addEventListener("click", documentAction);

function documentAction(e) {
	const targetElement = e.target;

	if (targetElement.closest(".item")) {
		targetElement.classList.toggle("active");
		let contentElement = targetElement.dataset.name;
		targetElement.textContent = targetElement.classList.contains("active")
			? "Active"
			: contentElement;
	}
}
