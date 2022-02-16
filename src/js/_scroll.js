import LocomotiveScroll from 'locomotive-scroll';

export default function Scroller() {


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

	scroll.on('scroll', () => {
		updateScroll();
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