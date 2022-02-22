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

export default function LottieMobile() {


	const data = [
		// {
		// 	'src': srcLottie1,
		// 	'selector': '.prep__lottie--1'
		// },
		{
			'src': srcLottie2,
			'selector': '.prep__lottie--2'
		},
		{
			'src': srcLottie3,
			'selector': '.prep__lottie--3'
		},
		// {
		// 	'src': srcLottie4,
		// 	'selector': '.prep__lottie--4'
		// },
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
		// {
		// 	'src': srcLottie7,
		// 	'selector': '.donation__lottie--2'
		// },
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
		{
			'src': srcLottie14,
			'selector': '.prep__lottie--6'
		},

	];


	document.addEventListener('scroll', () => {
		data.forEach((element, index) => {
			console.log( document.querySelector('.prep__lottie--5').getBoundingClientRect().top - window.innerHeight);
			if (!document.querySelector(element.selector).classList.contains('init') && document.querySelector(element.selector).getBoundingClientRect().top - window.innerHeight * 2 < 0 && document.querySelector(element.selector).getBoundingClientRect().top !==0) {

				document.querySelector(element.selector).classList.add('init');

				let lottieItem = lottie.loadAnimation({
					container: document.querySelector(element.selector), // the dom element that will contain the animation
					renderer: 'canvas',
					loop: true,
					autoplay: false,
					animationData: element.src
				});

				lottieItem.addEventListener('loaded_images', () => {
					lottie.setQuality('low');

					document.querySelector(`${element.selector} img`).style.opacity = '0';
					document.querySelector(`${element.selector} canvas`).style.opacity = '1';
					lottieItem.play();

				});
			}

		});

	});
}