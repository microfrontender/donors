import Cover from './_cover';

export default function Checklist(){

	const checklist = document.querySelector('.prep__checklist');
	const checklistWrap = document.querySelector('.prep__checklist-wrap');
	const section = document.querySelector('.section.prep');
	let isOpen = true;
	checklistWrap.addEventListener('click', (e)=>{
		if(!isOpen){
			e.preventDefault();
			openChecklist();
		}
	});
	function openChecklist(){
		isOpen = true;
		setTimeout(() => {
			
		checklistWrap.addEventListener('mouseleave', closeChecklist);
		}, 100);
		checklist.classList.add('active');
	}
	function closeChecklist(){

		isOpen = false;
		checklist.classList.remove('active');
		checklistWrap.removeEventListener('mouseleave', closeChecklist, false);
	}
	document.addEventListener('scroll', ()=>{
		if(document.body.classList.contains('page-prep')){
			
			if(document.querySelector('.prep__item--2').getBoundingClientRect().bottom - window.innerHeight < 0){
				checklist.style.transform = 'translateY(0)';
			} else {
				checklist.style.transform = '';
			}
			if(window.scrollY > window.innerHeight*2){
				isOpen = false;
				checklist.classList.remove('active');
			} 
			// console.log(section.getBoundingClientRect().bottom);
			if(section.getBoundingClientRect().bottom - window.innerHeight <= 0){
				checklistWrap.style = `position: absolute; left: 50%; transform: translate(-50%); width: 23.44rem`;
			}else{
				checklistWrap.style = '';
			}
			// document.querySelector('.prep__checklist').style.transform = 'translateY(0)';
		// }else{
		// 	document.querySelector('.prep__checklist').style.transform = '';
		// }
		}
	});
	

}