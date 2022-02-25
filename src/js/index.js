


import '../sass/index.sass';
import Scroller from './_scroll';
import Menu from './_menu';
import Food from './_food';
import Hints from './_hints';
import Slider from './_slider';
import Circles from './_circles';
import Accordion from './_accordion';
import LazyLoad from "vanilla-lazyload";
import Page from './_mobile-pages';
import FoodMobile from './_food-mobile';
import Stories from './_stories';
import CirclesMobile from './_circles-mobile';
import LottieInit from './_lottie-init';
import LottieMobile from './_lottie-mobile';
import bridge from '@vkontakte/vk-bridge';
import '../img/og-image.png';
bridge.send('VKWebAppInit');
LottieInit();
Menu();
if (window.innerWidth > 767) {
	Scroller();
	Food();
	Circles();
} else {
	Page();
	FoodMobile();
	Stories();
	CirclesMobile();
	LottieMobile();
	function fullHeight() {
		let vh = window.innerHeight * 0.01;
		let body = document.querySelector('body');
		body.style.setProperty('--vh', `${vh}px`);
	}
	fullHeight();
	window.addEventListener('resize', () => {
		fullHeight();
	});
}
Hints();
Slider();
Accordion();
window.onload = () => {

	const lazysliders = new LazyLoad({
		elements_selector: ".lazy img",
		unobserve_entered: true
	});

}