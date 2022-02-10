export default function Hints(){

	let hoverItem = document.querySelectorAll('.section__hover');
	let currentHintParent ;
	let currentHint ;

	hoverItem.forEach(element => {
		element.addEventListener('mouseover', ()=>{
			showHint(element.getAttribute('data-hint'));
		});
	});
	
	const showHint = (index)=>{
		
		currentHint = document.querySelector(`.section__hint[data-hint='${index}']`);
		currentHintParent = currentHint.closest('.section__hints');
		currentHintParent.classList.add('show');
		currentHint.classList.add('show');
		currentHint.addEventListener('mouseleave', hideHint);
	}
	const hideHint = ()=>{
		currentHint.classList.remove('show');
		currentHintParent.classList.remove('show');
		currentHint.removeEventListener('mouseleave', hideHint, false);
		currentHint = null;
	}
}