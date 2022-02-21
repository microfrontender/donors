import LocomotiveScroll from 'locomotive-scroll';
import Lottie from './_lottie';

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

export default function Scroller() {




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
	
	let init = false;

	if(!init){
		init = true;
		data.forEach((element) => {
			let img = new Image();
			img.src = element.src.assets[0].u+element.src.assets[0].p;
			document.querySelector(element.selector).appendChild(img);

		});
	}

	const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		direction: 'horizontal',
		gestureDirection: 'both',
		touchMultiplier: 1,
		resetNativeScroll: true
	});

	let spines = document.querySelectorAll('.spine[data-spine-section]');
	
	let updater = false;
	function updateScroll(){
		if(!updater){
			updater = true;
			
			setTimeout(()=>{
				scroll.update();
				updater = false;
			}, 5000);
		}
	}
	

	// let lottieOffset = [];
	// dataLottie.forEach(element => {
	// 	lottieOffset.push(document.querySelector(element.selector).getBoundingClientRect().left);
	// });
	// console.log(lottieOffset);

	function checkLottie(){
		let items = document.querySelectorAll('.lottie-item');
		items.forEach((element, index) => {
			if(!element.classList.contains('init') && element.getBoundingClientRect().left - window.innerWidth < 0 && element.getBoundingClientRect().left + window.innerWidth > 0){
				element.classList.add('init')
				
				
				Lottie(index);
			}
			
		});
		// Lottie(lottieElement);
	}


	function lazyload(){
		let items = document.querySelectorAll('.lazy');
		items.forEach((element, index) => {
			if(!element.classList.contains('loaded') && element.getBoundingClientRect().left - window.innerWidth < 0 && element.getBoundingClientRect().left + window.innerWidth > 0){
				console.log(element.querySelectorAll('[data-srcset]').length);
				element.classList.add('loaded');
				if(element.querySelectorAll('[data-srcset]').length > 0){
					element.querySelectorAll('[data-srcset]').forEach((item)=>{
						item.srcset = item.getAttribute('data-srcset');
					});
				}
				
				if(element.querySelectorAll('[data-src]').length > 0){
				element.querySelector('[data-src]').src = element.querySelector('[data-src]').getAttribute('data-src');
				
				element.querySelector('[data-src]').onload = ()=>{
					element.querySelector('[data-src]').classList.add('loaded');
				}
				}
			}
			
		});
	}
	scroll.on('scroll', () => {
		updateScroll();
		checkLottie();
		lazyload();
		spines.forEach((spine) => {
			let attr = spine.getAttribute('data-spine-section');
			let section = document.querySelector(`section[data-spine-section='${attr}']`);
			
				if (section.getBoundingClientRect().left <= spine.offsetWidth * attr ) {
					spine.classList.add('fixed');
					spine.classList.remove('init');
					spine.classList.remove('active');
					spine.style.left = '';
				} else if (section.getBoundingClientRect().left >= window.innerWidth - spine.offsetWidth * (5 - attr)) {
					spine.classList.add('init');
					spine.classList.remove('active');
					spine.classList.remove('fixed');
					spine.style.left = '';
				} else {
					spine.classList.add('active');
					spine.classList.remove('init');
					spine.classList.remove('fixed');
				}

				if (spine.classList.contains('active')) {
					spine.style.left = section.getBoundingClientRect().left + 'px';
				}


		});
	});



	const menuItems = document.querySelectorAll('.header__menu-link[data-href]');
	
	const spineItems = document.querySelectorAll('.spine[data-href], .spine__title[data-href]');
	const header = document.querySelector('.header');
	
	const burger = document.querySelector('.header__burger');
	const headerSpine = document.querySelector('.header__spine');
	const popup = document.querySelector('.header__popup');

	menuItems.forEach((item, index) => {
		item.addEventListener('click', ()=>{
			let href = item.getAttribute('data-href');
			closePopup();
			goToSection(href, index);
			
		});
	});

	spineItems.forEach((item) => {
		item.addEventListener('click', ()=>{
			let href = item.getAttribute('data-href');
			let index = item.getAttribute('data-spine-section')
			goToSection(href, index);
			
		});
	});
	function closePopup(){
		
		burger.classList.remove('header__burger--open');
		header.classList.remove('header--open');
		popup.classList = 'header__popup';
	}
	function goToSection(href, index){
		scroll.scrollTo(document.querySelector(`#${href}`),{
			duration: 100,
			offset: 1-headerSpine.offsetWidth*index,
		});
	}
	// scroll.scrollTo(document.querySelector('#benefit'),{
	// 	duration: 10,
	// 	// offset: -276
	// });
	
}