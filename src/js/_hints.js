export default function Hints(){

	let hoverItem = document.querySelectorAll('.section__hover');
	let hints = document.querySelector('.section__hints');
	let currentHint ;

	hoverItem.forEach(element => {
		element.addEventListener('mouseover', ()=>{
			showHint(element.getAttribute('data-hint'));
		});
	});
	
	const showHint = (index)=>{
		console.log(index);
		currentHint = document.querySelector(`.section__hint[data-hint='${index}']`);
		console.log(currentHint);
		hints.classList.add('show');
		currentHint.classList.add('show');
		currentHint.addEventListener('mouseleave', hideHint);
	}
	const hideHint = ()=>{
		currentHint.classList.remove('show');
		hints.classList.remove('show');
		currentHint.removeEventListener('mouseleave', hideHint, false);
		currentHint = null;
	}
}