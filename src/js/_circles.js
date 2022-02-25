export default function Circles(){

	let circles= document.querySelector('.donation__circles.circles');
	let pathTop= document.querySelector('.donation__circles .circles__path--top');
	let pathBottom= document.querySelector('.donation__circles .circles__path--bottom');
	
	let isActive = false;
	let currentPath = 0;


	pathTop.addEventListener('click', ()=>{
		if(!isActive){
			isActive = true;
			currentPath = 1;
			circles.classList = `donation__circles circles circles--top active`;
		} else if(currentPath !== 1){
			circles.classList = `donation__circles circles circles--top active`;
			
			currentPath = 1;
		} else{
			circles.classList = `donation__circles circles`;
			
			isActive = false;
			currentPath = 0;
		}
	});
	pathBottom.addEventListener('click', ()=>{
		if(!isActive){
			isActive = true;
			currentPath = 2;
			circles.classList = `donation__circles circles circles--bottom active`;
		} else if(currentPath !== 2){
			circles.classList = `donation__circles circles circles--bottom active`;
	
			currentPath = 2;
		} else{
			circles.classList = `donation__circles circles`;
			
			isActive = false;
			currentPath = 0;
		}
	
	});
	
	
}