import { bodyLock, bodyUnlock, } from "../files/functions.js";

//Фильтр
function filter() {
	const filterBlockIcon = document.querySelector('.tabs-filter__filter-block-icon');

	if (filterBlockIcon) {
		const filterBlock = document.querySelector('.filter__filter-block');
		const filterBlockClose = document.querySelector('.filter-block-mob__close');
		const filterBlockClear = document.querySelector('.selected-products__remove');

		filterBlockIcon.addEventListener("click", function (e) {
			filterBlock.classList.add("_active")
			bodyLock();
		});
		filterBlockClose.addEventListener("click", function (e) {
			filterBlock.classList.remove("_active")
			bodyUnlock();
		});
		filterBlockClear.addEventListener("click", function (e) {
			const filterBlockCheckbox = document.querySelector('.filter__filter-block-spollers');
			var inputFilterBlock = filterBlockCheckbox.querySelectorAll("input[type=checkbox]");
			inputFilterBlock.forEach(function (el) {
				el.checked = false;
			});
		});
	}
}
filter()

//========================================================================================================================================================

//Корзина

function basket() {
	const basketButton = document.querySelector('.bottom-header__basket');
	if (basketButton) {
		const basketClose = document.querySelector('.basket__close');
		const basketOpacity = document.querySelector('.basket__shadow');
		basketButton.addEventListener("click", function (e) {
			document.documentElement.classList.add("basket-open");
			bodyLock();
		});
		basketClose.addEventListener("click", function (e) {
			document.documentElement.classList.remove("basket-open");
			bodyUnlock();
		});
		basketOpacity.addEventListener("click", function (e) {
			document.documentElement.classList.remove("basket-open");
			bodyUnlock();
		});
	}

}

basket()

//========================================================================================================================================================

//Подсказки

const tippyIcons = document.querySelectorAll('.features-product-card__icon');

if (tippyIcons) {
	tippyIcons.forEach(icon => {
		icon.addEventListener("click", function (e) {
			let elem_active = icon.classList.contains("_active")
			tippyIcons.forEach(el => { el.classList.remove('_active'); });
			icon.classList.toggle("_active", !elem_active)
		});
		window.addEventListener('click', e => {
			const target = e.target
			if (!target.closest('.features-product-card__icon') && !target.closest('.features-product-card__icon-tippy')) {
				icon.classList.remove('_active')
			}
		})
	});
}

//========================================================================================================================================================

//Смена фотографии
document.addEventListener("click", ({ target }) => {
	if (target.tagName !== "BUTTON") {
		return;
	}

	const wrapper = target.closest(".slide-product");
	if (wrapper === null) {
		return;
	}

	const image = wrapper.querySelector(".picture img");
	const activeButton = wrapper.querySelector(".slide-product__item button._active");
	if (image === null || activeButton === null) {
		return;
	}
	activeButton.classList.remove("_active");

	const button = target;
	button.classList.add("_active");

	image.src = button.dataset.src;
	image.srcset = button.dataset.src;
});