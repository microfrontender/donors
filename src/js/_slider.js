export default function Slider(){

	let sliderBtnPrev= document.querySelector('.slider__btn--prev');
	let sliderBtnNext= document.querySelector('.slider__btn--next');
	
	let currentSlide = 1 ;

	sliderBtnPrev.addEventListener('click', ()=>{
		setSlide(--currentSlide);

	});
	sliderBtnNext.addEventListener('click', ()=>{
		setSlide(++currentSlide);

	});
	
	const setSlide = (index) =>{
		if(index == 1){
			sliderBtnPrev.style.visibility = 'hidden';
		}else{
			sliderBtnPrev.style.visibility = 'visible';
		}
		if(index == 3){
			sliderBtnNext.style.visibility = 'hidden';
		}else{
			sliderBtnNext.style.visibility = 'visible';
		}
		document.querySelector('.slider__slide.show').classList.remove('show');
		document.querySelector(`.slider__slide--${index}`).classList.add('show');
	};

	setSlide(1);
	
}