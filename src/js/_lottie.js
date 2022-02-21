import lottie from "lottie-web";

import srcLottie1 from '/lottie/1/data.json';
import srcLottie2 from '/lottie/2/data.json';
import srcLottie3 from '/lottie/3/data.json';
import srcLottie4 from '/lottie/4/data.json';
import srcLottie5 from '/lottie/5/data.json';
import srcLottie6 from '/lottie/6/data.json';
import srcLottie7 from '/lottie/7/data.json';
import srcLottie8 from '/lottie/8/data.json';
import srcLottie9 from '/lottie/9/data.json';
import srcLottie10 from '/lottie/10/data.json';
import srcLottie11 from '/lottie/11/data.json';
import srcLottie12 from '/lottie/12/data.json';
import srcLottie13 from '/lottie/13/data.json';
import srcLottie14 from '/lottie/14/data.json';

export default function Lottie(index){


	const data = [
		{
			'src': srcLottie1,
			'selector': '.prep__lottie--1'
		},
		{
			'src': srcLottie2,
			'selector': '.prep__lottie--2'
		},
		{
			'src': srcLottie3,
			'selector': '.prep__lottie--3'
		},
		{
			'src': srcLottie4,
			'selector': '.prep__lottie--4'
		},
		{
			'src': srcLottie5,
			'selector': '.prep__lottie--5'
		},
		{
			'src': srcLottie5,
			'selector': '.donation__lottie--3'
		},
		{
			'src': srcLottie5,
			'selector': '.test__lottie--4'
		},
		{
			'src': srcLottie5,
			'selector': '.benefit__lottie--4'
		},
		{
			'src': srcLottie6,
			'selector': '.donation__lottie--1'
		},
		{
			'src': srcLottie7,
			'selector': '.donation__lottie--2'
		},
		{
			'src': srcLottie8,
			'selector': '.test__lottie--1'
		},
		{
			'src': srcLottie9,
			'selector': '.test__lottie--2'
		},
		{
			'src': srcLottie10,
			'selector': '.test__lottie--3'
		},
		{
			'src': srcLottie11,
			'selector': '.benefit__lottie--1 '
		},
		{
			'src': srcLottie12,
			'selector': '.benefit__lottie--2'
		},
		{
			'src': srcLottie13,
			'selector': '.benefit__lottie--3'
		},
		// {
		// 	'src': srcLottie14,
		// 	'selector': '.prep__lottie--6'
		// },
		
	];
	// let lottie1 = require("./lottie/1/data.json");
	// let food = document.querySelector('.prep__food.food')
	// food.classList = 'prep__food';
	// console.log(srcLottie13.assets[0].u+srcLottie13.assets[0].p);


	let lottieItem = lottie.loadAnimation({
		container: document.querySelector(data[index].selector), // the dom element that will contain the animation
		renderer: 'canvas',
		loop: true,
		autoplay: false,
		animationData: data[index].src  // the path to the animation json
	  });
	//   if(element.selector === '.prep__lottie--6'){
	// 	document.querySelector('.prep__food.food').classList = 'prep__food food';
	// }
	  lottieItem.addEventListener('loaded_images', ()=>{
		// lottie.setQuality('medium') ;
		document.querySelector(`${data[index].selector} img`).style.opacity = '0';
		document.querySelector(`${data[index].selector} canvas`).style.opacity = '1';
		lottieItem.play();
		
	  });



	// let lottieSvg1 = lottie.loadAnimation({
	// 	container: document.querySelector('.prep__lottie'), // the dom element that will contain the animation
	// 	renderer: 'svg',
	// 	loop: true,
	// 	autoplay: false,
	// 	animationData: srcLottie1  // the path to the animation json
	//   });
	  
	//   lottieSvg1.addEventListener('loaded_images', ()=>{
	// 	lottieSvg1.play();
	//   });
}