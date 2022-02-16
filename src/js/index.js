
import lottie from "lottie-web";

import '../sass/index.sass';
import Scroller from './_scroll';
import Menu from './_menu';
import Food from './_food';
import Hints from './_hints';
import Slider from './_slider';
import Circles from './_circles';
import Accordion from './_accordion';
import Lazy from './_lazyloading';
import LazyLoad from "vanilla-lazyload";
Menu();
Scroller();
Food();
Hints();
Slider();
Circles();
Accordion();
window.onload = () =>{

	const lazysliders = new LazyLoad({
        elements_selector: ".lazy img"
      });
	let lottie1 = require("./lottie/1/data.json");

	let lottieSvg1 = lottie.loadAnimation({
		container: document.querySelector('.prep__lottie'), // the dom element that will contain the animation
		renderer: 'svg',
		loop: true,
		autoplay: true,
		animationData: lottie1  // the path to the animation json
	  });
	


}