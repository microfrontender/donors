export default function Page(){

	const menuItems = document.querySelectorAll('.header__menu-link[data-href]');
	
	const spineItems = document.querySelectorAll('.spine[data-href]');
	const header = document.querySelector('.header');
	
	const burger = document.querySelector('.header__burger');
	const headerNumber = document.querySelector('.header__number');
	const headerTitle = document.querySelector('.header__title');
	const popup = document.querySelector('.header__popup');

	const data = {
		'cover': "Инфографика х donorsearch",
		'prep': "подготовка",
		'donation': "Сдача крови",
		'test': "Куда идет кровь",
		'benefit': "Польза для донора",

	}

	function setPage(href, index){
		document.body.classList = `page-${href}`;
		headerTitle.textContent = data[href];
		headerNumber.textContent = `0${index}`;
		// включить на прод
		window.scrollTo( 0, 0 );
	}
	menuItems.forEach((item, index) => {
		item.addEventListener('click', ()=>{
			let href = item.getAttribute('data-href');
			closePopup();
			setPage(href, index);
			
		});
	});

	spineItems.forEach((item, index) => {
		item.addEventListener('click', ()=>{
			let href = item.getAttribute('data-href');
			setPage(href, index+1);
			
		});
	});
	function closePopup(){
		
		burger.classList.remove('header__burger--open');
		header.classList.remove('header--open');
		popup.classList = 'header__popup';
	}

	
	setPage('cover', 1);
}