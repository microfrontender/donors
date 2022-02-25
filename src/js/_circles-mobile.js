export default function CirclesMobile(){

	let circles= document.querySelector('.circles');
	let pathTop= document.querySelector('.circles__path--top');
	let pathBottom= document.querySelector('.circles__path--bottom');
	let closes = document.querySelectorAll('.circles__close');
	let isOpened = false;

	pathTop.addEventListener('click', ()=>{
		
		openPopup('top');
		
	});
	pathBottom.addEventListener('click', ()=>{
	
		openPopup('bottom');
		
		
	});
	

	closes.forEach(element => {
		
		element.addEventListener('click', closePopup );
	
	});

	function openPopup(popup){
		if(!isOpened){
			circles.classList = `donation__circles circles circles--${popup}-popup circles--active-popup`;
			document.querySelector('header').style.display = 'none';
			document.querySelector('html').style.overflow = 'hidden';
			// document.body.style.height = '100vh';
			// document.querySelector('body').style.overflow = 'hidden';
			
			isOpened = true;
		}
	}
	function closePopup(){
		circles.classList = `donation__circles circles`;
		document.querySelector('header').style.display = '';
		document.querySelector('html').style.overflow = '';
		// document.body.style.height = '';
		setTimeout(() => {
				
			isOpened = false;
			}, 100);
	}
	
}