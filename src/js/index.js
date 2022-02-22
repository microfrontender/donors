


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



LottieInit();
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
	
	const lazysliders = new LazyLoad({
        elements_selector: ".lazy img",
		unobserve_entered: true
      });

	//   let items = document.querySelectorAll('.lazy');
	//   	items.forEach((element, index) => {
	//   		// if(!element.classList.contains('loaded') && element.getBoundingClientRect().left - window.innerWidth*2 < 0 ){
	//   			// console.log(element.querySelectorAll('[data-srcset]').length);
	//   			element.classList.add('loaded');
	//   			if(element.querySelectorAll('[data-srcset]').length > 0){
	//   				element.querySelectorAll('[data-srcset]').forEach((item)=>{
	//   					item.srcset = item.getAttribute('data-srcset');
	//   				});
	//   			}
				  
	//   			if(element.querySelectorAll('[data-src]').length > 0){
	//   			element.querySelector('[data-src]').src = element.querySelector('[data-src]').getAttribute('data-src');
				  
	//   			element.querySelector('[data-src]').onload = ()=>{
	//   				element.querySelector('[data-src]').classList.add('loaded');
	//   			}
	//   			}
	//   		// }
			  
	//   	});

}