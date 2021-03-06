import bridge from '@vkontakte/vk-bridge';
export default function Menu() {

    let header = document.querySelector('.header');
    let burger = document.querySelector('.header__burger');
    let about = document.querySelector('.header__menu-item--about');
    let links = document.querySelectorAll('.header__menu-link[data-href]');
    let back = document.querySelector('.header__about-back');
    let popup = document.querySelector('.header__popup');
    let copyLinks = document.querySelectorAll('.copy-link');
    let benefitSocials = document.querySelector('.benefit__socials');
    let benefitBtn = document.querySelector('.benefit__social-btn');
    let alertPanel = document.querySelector('.copy-alert');
    let vkshare = document.querySelectorAll('.vk-share');
    let isOpen = false;

    if (window.innerWidth < 768) {
        burger = document.querySelector('.header__burger--mobile');
    }

    function closePopup() {
        header.classList.remove('header--open');
        popup.classList = 'header__popup';
        document.querySelector('body').style.overflow = '';
        document.querySelector('main').style.pointerEvents = '';
        
        if(history.state !== null && window.innerWidth < 768){
        history.back();
        }
        document.querySelector('body').classList.remove('prevent-scroll');
        isOpen = false;
        // document.body.style.height = '';
    }
    window.addEventListener('popstate', function(e) {
        // код обработчика события
        // console.log(e);
        if (window.innerWidth < 768) {
            closePopup();
            return false;
        }
    });
    function openPopup(page) {
        if (window.innerWidth < 768) {
        history.pushState({menu: 'open'}, "", "?menu=open");
        }
        header.classList.add('header--open');
        popup.classList = `header__popup header__popup--${page}`;
        burger.classList.add('header__burger--open');
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('main').style.pointerEvents = 'none';

        document.querySelector('body').classList.add('prevent-scroll');
        isOpen = true;
        // document.body.style.height = '100vh';
    }
    links.forEach(link => {
        link.addEventListener('click', ()=>{
            closePopup();
        });
    });
    burger.addEventListener('click', () => {

        if (isOpen) {
            closePopup();
            burger.classList.remove('header__burger--open');
        } else {
            openPopup('menu');
        }
    });
    about.addEventListener('click', () => {
        openPopup('about');
    });
    back.addEventListener('click', () => {
        openPopup('menu');
    });


    copyLinks.forEach(element => {
        element.addEventListener('click', () => {
            
            copyAlert();
            if(window.isVkMiniApp !== undefined && window.isVkMiniApp){
                bridge.send("VKWebAppCopyText", {"text": "vk.com/app8087070"});

            } else{
                navigator.clipboard.writeText('https://infografika.donorsearch.org/');
            }
            
        });
    });
    
    vkshare.forEach(element => {
        element.addEventListener('click', (e) => {
            
            if(window.isVkMiniApp !== undefined && window.isVkMiniApp){
                e.preventDefault();
                bridge.send("VKWebAppShare", {"link": "vk.com/app8087070"});

            } 
            
        });
    });
    

    let alertShown = false;
    const copyAlert = ()=>{
        if(!alertShown){
            alertPanel.style.opacity = 1;
            setTimeout(() => {
                alertPanel.style.opacity = 0;
            }, 500);
        }
    }
    // openPopup('about');

    benefitBtn.addEventListener('click', () => {
        benefitSocials.classList.toggle('active');
    });

    // if(window.isVkMiniApp !== undefined && window.isVkMiniApp){
    //     e.preventDefault();
    //     // bridge.send("VKWebAppDownloadFile", {"url": href, "filename": `${download}.jpg`});
    //     bridge.send("VKWebAppShowStoryBox", { "background_type" : "image", "url" : href });

    // }
}