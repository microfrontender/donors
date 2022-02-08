import LocomotiveScroll from 'locomotive-scroll';


export default function Scroller() {


	const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		direction: 'horizontal',
		resetNativeScroll: false
	});

	let spines = document.querySelectorAll('.spine[data-spine-section]');


	scroll.on('scroll', () => {

		spines.forEach((spine) => {
			let attr = spine.getAttribute('data-spine-section');
			let section = document.querySelector(`section[data-spine-section='${attr}']`);
			
				if (section.getBoundingClientRect().left <= spine.offsetWidth * attr ) {
					spine.classList.add('fixed');
					spine.classList.remove('active');
					spine.style.left = '';
				} else if (section.getBoundingClientRect().left >= window.innerWidth - spine.offsetWidth * (5 - attr)) {
					spine.classList.add('init');
					spine.classList.remove('active');
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


	// scroll.scrollTo(document.querySelector('#section-1'),{
	// 	duration: 10,
	// 	offset: -64
	// });
	
}