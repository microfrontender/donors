export default function Slider(){

	let sliderBtn= document.querySelector('.slider__btn');
	
	let currentSlide = 1 ;

	sliderBtn.addEventListener('click', ()=>{
		setSlide(++currentSlide);

	});
	
	const setSlide = (number) =>{
		let index = number;
		if(index > 3){
			currentSlide = 1;
			index = 1;
		}
		document.querySelector('.slider__slide.show').classList.remove('show');
		document.querySelector(`.slider__slide--${index}`).classList.add('show');
	};

	setSlide(1);
	
}