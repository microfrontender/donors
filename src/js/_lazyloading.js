export default function Lazy() {
	let allLazy = document.querySelectorAll('.lazy');
	if (allLazy.length > 0) {

		allLazy.forEach(element => {
			// element.gets
			if (element.getBoundingClientRect().top - window.innerHeight * 2 < 0 && element.getBoundingClientRect().left - window.innerWidth * 2 < 0) {
				if (element.querySelectorAll('[data-src]').length > 0) {
					let images = element.querySelectorAll('[data-src]');
					images.forEach(image => {
						image.src = image.getAttribute('data-src');
					});
				}
				if (element.querySelectorAll('[data-srcset]').length > 0) {
					let sources = element.querySelectorAll('[data-srcset]');
					sources.forEach(source => {
						source.srcset = source.getAttribute('data-srcset');
					});
				}
				element.classList.remove('lazy');
			}

		});

	}
}