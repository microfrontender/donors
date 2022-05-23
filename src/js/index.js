


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
import Checklist from './_checklist-mobile';
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

let isMobile = detectMob();
bridge.send('VKWebAppInit', {});
bridge.subscribe(e => {
	if(e.detail.type === "VKWebAppInitResult"){
		if(e.detail.data.result === true){
			window.isVkMiniApp = true;
			if(isMobile){
				document.body.setAttribute('data-mini-app', true);
			}
		}
	}
});
bridge.send("VKWebAppSetViewSettings", {"status_bar_style": "dark", "action_bar_color": "#f8f1e6"});
LottieInit();
Menu();
if (window.innerWidth > 767) {
	Scroller();
	Food();
	Circles();
	document.querySelector('.prep__checklist').href = './doc/DonorSearch_checklist.pdf';
} else {
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	}
	Page();
	FoodMobile();
	Stories();
	CirclesMobile();
	LottieMobile();
	
	Checklist();
	function fullHeight() {
		let vh = window.innerHeight * 0.01;
		let body = document.querySelector('body');
		body.style.setProperty('--vh', `${vh}px`);
	}
	fullHeight();
	window.addEventListener('resize', () => {
		fullHeight();
	});
	document.querySelector('.prep__checklist').href = './doc/DonorSearch_checklist_mobile.png';
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