"use strict";

window.addEventListener("load", windowLoad);
const html = document.documentElement;

function windowLoad() {
	document.addEventListener("click", documentActions);
	html.classList.add("loaded");
}

function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest(".icon-menu")) {
		html.classList.toggle("open-menu");
	}

	if (
		(targetElement.closest(".menu__link") ||
			targetElement.closest(".actions-header__button")) &&
		html.classList.contains("open-menu")
	) {
		html.classList.remove("open-menu");
	}
}
