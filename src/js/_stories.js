
import bridge from '@vkontakte/vk-bridge';
export default function Stories(){

	const btns = document.querySelectorAll('.stories');

	const toDataURL = url => fetch(url)
	.then(response => response.blob())
	.then(blob => new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onloadend = () => resolve(reader.result)
		reader.onerror = reject
		reader.readAsDataURL(blob)
	}))
	btns.forEach(btn => {
		btn.addEventListener('click', (e)=>{
			let href = btn.href;
			let download = btn.download;
			if(!btn.classList.contains('active')){
				e.preventDefault();
				btnOpen(btn);
			} else if(window.isVkMiniApp !== undefined && window.isVkMiniApp){
				e.preventDefault();
				// bridge.send("VKWebAppDownloadFile", {"url": href, "filename": `${download}.jpg`});
				toDataURL(href)
				.then(dataUrl => {
					bridge.send("VKWebAppShowStoryBox", { "background_type" : "image", "blob" : dataUrl });
				})
				

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