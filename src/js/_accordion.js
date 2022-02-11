export default function Accordion(){

	let accordions= document.querySelectorAll('.accordion');
	accordions.forEach(element => {
		element.addEventListener('click', ()=>{
			element.classList.toggle('active');
		});
	});
}