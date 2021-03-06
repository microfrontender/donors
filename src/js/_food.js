export default function Food(){

	let food = document.querySelector('.prep__food.food');
	let foodItem = document.querySelector('.prep__food .food__item');
	let foodPopup = document.querySelector('.prep__food .food__popup');
	let foodWrap = document.querySelector('.prep__food .food__wrap');
	let foodPopupWidth = foodItem.offsetWidth*.85;
	let food__btns = document.querySelectorAll('.prep__food .food__btn');
	let open = false;
	let isActive = false;

	foodPopup.style.width = '0';
	function openFood(){
		food.classList.add('open');
		food.classList.add('active');
		foodPopup.style.width = foodWrap.offsetWidth+'px';
	}
	// openFood();
	function closeFood(){
		foodPopup.style.width = foodPopupWidth +'px';
		
		food.classList.remove('active');
		setTimeout(() => {
			
		food.classList.remove('open');
		}, 1000);
	}

	function setTab(index){
		document.querySelector('.prep__food .food__tab.active').classList.remove('active');
		document.querySelector(`.prep__food .food__tab--${index}`).classList.add('active');
	}

	food__btns.forEach((btn, index) => {
		btn.addEventListener('click', ()=>{
			document.querySelector('.prep__food .food__btn.active').classList.remove('active');
			btn.classList.add('active');
			setTab(index+1);
		});
	});
	foodItem.addEventListener('click',()=>{
		if(!isActive){
			isActive = true;
			setTimeout(() => {
				isActive = false
			}, 1000);
			if(!open){
				openFood();
				open = true;
			}else{
				closeFood();
				open = false;
			}
		}
	});

	// burger.addEventListener('click', ()=>{
	// 	if(burger.classList.contains('header__burger--open')){
	// 		closePopup();
	// 		burger.classList.remove('header__burger--open');
	// 	}else{
	// 		openPopup('menu');
	// 	}
	// });
	// about.addEventListener('click', ()=>{
	// 	openPopup('about');
	// });
	// back.addEventListener('click', ()=>{
	// 	openPopup('menu');
	// });
}