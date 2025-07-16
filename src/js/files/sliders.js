/*
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

if (document.querySelector('.main-home__slider')) {
	new Swiper('.main-home__slider', {
		modules: [Navigation, Pagination, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 10,
		autoHeight: false,
		speed: 800,
		loop: true,
		preloadImages: true,
		lazy: true,

		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		// Пагинация
		pagination: {
			el: '.main-home__pagination',
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.main-home__arrow-prev',
			nextEl: '.main-home__arrow-next',
		},

		// Брейкпоинты
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
		// События
		on: {

		}
	});
}

document.querySelectorAll('.product').forEach(n => {
	const productSwiper = new Swiper(n.querySelector('.product-slider'), { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 8,
		speed: 300,
		allowTouchMove: true,
		lazy: true,
		freeMode: true,
		watchOverflow: true,
		preloadImages: true,

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.product-arrow-prev'),
			nextEl: n.querySelector('.product-arrow-next'),
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1462: {
				slidesPerView: 4,
			},
		},
	});
});

document.querySelectorAll('.images-product').forEach(n => {
	const thumbsSwiper = new Swiper(n.querySelector('.images-product__thumbs'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 8,
		speed: 800,
		allowTouchMove: true,
		preloadImages: true,
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.images-product__arrow-prev'),
			nextEl: n.querySelector('.images-product__arrow-next'),
		},
	});
	const thumbsSwiper_2 = new Swiper(n.querySelector('.images-product__thumbs-2'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 8,
		speed: 800,
		//allowTouchMove: true,
		preloadImages: true,
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.images-product__arrow-prev'),
			nextEl: n.querySelector('.images-product__arrow-next'),
		},
	});
	const mainThumbsSwiper_2 = new Swiper(n.querySelector('.images-product__slider-2'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		thumbs: {
			swiper: thumbsSwiper_2
		},
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 2,
		speed: 800,
		watchSlidesProgress: true,
		allowTouchMove: true,
		preloadImages: true,
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.images-product__arrow-prev'),
			nextEl: n.querySelector('.images-product__arrow-next'),
		},
	});
	const mainThumbsSwiper = new Swiper(n.querySelector('.images-product__slider'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		thumbs: {
			swiper: thumbsSwiper
		},
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 2,
		speed: 800,
		watchSlidesProgress: true,
		allowTouchMove: true,
		preloadImages: true,
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.images-product__arrow-prev'),
			nextEl: n.querySelector('.images-product__arrow-next'),
		},
	});
});