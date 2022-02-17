export default function Hints() {

	let hoverItem = document.querySelectorAll('.section__hover');
	let hintCloseBtn = document.querySelectorAll('.section__hint-close');
	let currentHintParent;
	let currentHintOverlay;
	let currentHint;

	hoverItem.forEach(element => {
		element.addEventListener('mouseover', () => {
			showHint(element.getAttribute('data-hint'));
		});
	});

	hintCloseBtn.forEach(element => {
		element.addEventListener('click', () => {
			hideHint();
		});
	});

	const showHint = (index) => {

		currentHint = document.querySelector(`.section__hint[data-hint='${index}']`);
		currentHintParent = currentHint.closest('.section__hints');
		currentHintOverlay = currentHintParent.querySelector('.section__hints-overlay');
		currentHintParent.classList.add('show');
		currentHint.classList.add('show');
		if (window.innerWidth > 767) {
			currentHint.addEventListener('mouseleave', hideHint);
		} else {
			setTimeout(() => {
				currentHintOverlay.addEventListener('click', hideHint);
			}, 500);
		}
	}
	const hideHint = () => {
		currentHint.classList.remove('show');
		if (window.innerWidth > 767) {

			currentHintParent.classList.remove('show');

			currentHint.removeEventListener('mouseleave', hideHint, false);
			currentHintParent = null;
			currentHintOverlay = null;
		} else {
			setTimeout(() => {

				currentHintParent.classList.remove('show');
				currentHintOverlay.removeEventListener('click', hideHint, false);

				currentHintParent = null;
				currentHintOverlay = null;
			}, 500);
		}
		currentHint = null;
	}
}