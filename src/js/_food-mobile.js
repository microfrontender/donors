export default function FoodMobile(){

	let food = document.querySelector('.food');
	let foodItem = document.querySelector('.food__item');
	let close = document.querySelector('.food__popup-close');
	let header = document.querySelector('.header');
	
	let food__btns = document.querySelectorAll('.food__btn');
	
	
	function openFood(){
		food.classList.add('open');
		food.classList.add('active');
		document.querySelector('html').style.overflow = 'hidden';
		// document.body.style.height = '100vh';
		header.style.display = 'none';
	}
	function closeFood(){
		
		document.querySelector('html').style.overflow = '';
		header.style.display = '';
		// document.body.style.height = '';
		food.classList.remove('active');
		food.classList.remove('open');
	}

	// openFood();
	close.addEventListener('click', closeFood);
	function setTab(index){
		document.querySelector('.food__tab.active').classList.remove('active');
		document.querySelector(`.food__tab--${index}`).classList.add('active');
	}

	food__btns.forEach((btn, index) => {
		btn.addEventListener('click', ()=>{
			document.querySelector('.food__btn.active').classList.remove('active');
			btn.classList.add('active');
			setTab(index+1);
		});
	});
	foodItem.addEventListener('click',()=>{
		openFood();
	});


}