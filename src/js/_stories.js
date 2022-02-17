export default function Stories(){

	const btns = document.querySelectorAll('.stories');

	btns.forEach(btn => {
		btn.addEventListener('click', (e)=>{

			if(!btn.classList.contains('active')){
				e.preventDefault();
				btnOpen(btn);
			}

		});
	});

	function btnOpen(btn){
		btn.addEventListener('mouseleave', btnClose);
		btn.classList.add('active');
		btn.querySelector('.stories__text').style.width = btn.querySelector('.stories__text span').offsetWidth +'px';
	}
	function btnClose(){
		document.querySelector('.stories.active').removeEventListener('mouseleave', btnClose, false)
		document.querySelector('.stories.active').querySelector('.stories__text').style.width = '0px';
		document.querySelector('.stories.active').classList.remove('active');
	}
}