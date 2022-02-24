export default function Accordion(){

	let accordions= document.querySelectorAll('.accordion');
	accordions.forEach(element => {

		
		// element.classList.toggle('active');

		element.querySelector('.accordion__header').addEventListener('click', ()=>{
			toggleAccordion(element);
		});
	});

	function toggleAccordion(element){
		let isActive = element.classList.contains('active');
		if(	document.querySelectorAll('.accordion.active').length > 0){

			document.querySelector('.accordion.active .accordion__body').style.width = document.querySelector('.accordion.active .accordion__header').offsetWidth +'px';
			document.querySelector('.accordion.active .accordion__body').style.height = document.querySelector('.accordion.active .accordion__header').offsetHeight +'px';
			document.querySelector('.accordion.active').classList.remove('active');
		}
		if(isActive){

			element.querySelector('.accordion__body').style.width = element.querySelector('.accordion__header').offsetWidth +'px';
			element.querySelector('.accordion__body').style.height = element.querySelector('.accordion__header').offsetHeight*0.5 +'px';
			element.classList.remove('active');
		}else{
			
			element.querySelector('.accordion__body').style.width = element.querySelector('.accordion__inner').offsetWidth +'px';
			element.querySelector('.accordion__body').style.height = element.querySelector('.accordion__inner').offsetHeight +'px';
			element.classList.add('active');
		}
	}

	if(window.innerWidth < 768){
		toggleAccordion(document.querySelector('.accordion--1'))
	}
}