export default function Menu(){

	let header = document.querySelector('.header');
	let burger = document.querySelector('.header__burger');
	let about = document.querySelector('.header__menu-item--about');
	let back = document.querySelector('.header__about-back');
	let popup = document.querySelector('.header__popup');

	if(window.innerWidth < 768){
		burger = document.querySelector('.header__burger--mobile');
	}

	function closePopup(){
		header.classList.remove('header--open');
		popup.classList = 'header__popup';
	}
	function openPopup(page){

		header.classList.add('header--open');
		popup.classList = `header__popup header__popup--${page}`;
		burger.classList.add('header__burger--open');
	}

	burger.addEventListener('click', ()=>{
		console.log('ss');
		if(burger.classList.contains('header__burger--open')){
			closePopup();
			burger.classList.remove('header__burger--open');
		}else{
			openPopup('menu');
		}
	});
	about.addEventListener('click', ()=>{
		openPopup('about');
	});
	back.addEventListener('click', ()=>{
		openPopup('menu');
	});

	// openPopup('about');
}