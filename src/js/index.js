


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
import Lottie from './_lottie';



Menu();
if(window.innerWidth > 767){

	Scroller();
	Food();
	
Circles();
}else{
	Page();
	FoodMobile();
	Stories();
	CirclesMobile();
}
Hints();
Slider();
Accordion();
window.onload = () =>{
	
	// const lazysliders = new LazyLoad({
    //     elements_selector: ".lazy img",
	// 	unobserve_entered: true
    //   });

}