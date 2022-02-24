import Cover from './_cover';

export default function Page(){

	const menuItems = document.querySelectorAll('.header__menu-link[data-href]');
	
	const spineItems = document.querySelectorAll('.spine[data-href]');
	const header = document.querySelector('.header');
	
	const burger = document.querySelector('.header__burger--mobile');
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

		if(window.innerWidth < 768 && href === 'prep'){
			document.querySelector('.prep__checklist').style.transform = 'translateY(0)';
		}else{
			document.querySelector('.prep__checklist').style.transform = '';
		}
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
		document.querySelector('body').style.overflow = '';
	}

	
	setPage('cover', 1);

	let isMoving = false;
	let startingY;
	document.addEventListener('touchstart',tStart);
	
	function tStart(e){
		if(document.querySelector('body').classList.contains('page-cover') && !document.querySelector('.cover').classList.contains('cover--stage-0') ){
		startingY = e.touches[0].pageY;
		document.addEventListener('touchmove', tMove);
		document.addEventListener('touchend', tEnd);
		} else {
			return false;
		}
	}
	function tMove(e){
		let currentY = e.touches[0].pageY;
		let delta = currentY - startingY;
		if(delta > 0 && !isMoving){
			Cover(1);
			tTimeout();
			
		}
		if(delta < 0 && !isMoving){
			Cover(2);
			tTimeout();
		}
	}
	function tTimeout(){
		
		if(!isMoving){
		isMoving = true;
	
			setTimeout(() => {
				isMoving = false;
				
			document.body.style.overflow = 'unset';
			}, 1000);
		}
	}
	function tEnd(){
		document.removeEventListener('touchmove',tMove, false);
		document.removeEventListener('touchend', tEnd, false);
	}
}