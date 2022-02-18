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
			document.body.style.overflow = 'hidden';
			
			
			isOpened = true;
		}
	}
	function closePopup(){
		circles.classList = `donation__circles circles`;
		document.querySelector('header').style.display = '';
		document.body.style.overflow = '';
		setTimeout(() => {
				
			isOpened = false;
			}, 100);
	}
	
}