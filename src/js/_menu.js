import bridge from '@vkontakte/vk-bridge';
export default function Menu() {

    let header = document.querySelector('.header');
    let burger = document.querySelector('.header__burger');
    let about = document.querySelector('.header__menu-item--about');
    let back = document.querySelector('.header__about-back');
    let popup = document.querySelector('.header__popup');
    let copyLinks = document.querySelectorAll('.copy-link');
    let benefitSocials = document.querySelector('.benefit__socials');
    let benefitBtn = document.querySelector('.benefit__social-btn');


    if (window.innerWidth < 768) {
        burger = document.querySelector('.header__burger--mobile');
    }

    function closePopup() {
        header.classList.remove('header--open');
        popup.classList = 'header__popup';

        document.querySelector('body').style.overflow = '';
        document.querySelector('main').style.pointerEvents = '';

        document.querySelector('body').classList.remove('prevent-scroll');

        // document.body.style.height = '';
    }

    function openPopup(page) {

        header.classList.add('header--open');
        popup.classList = `header__popup header__popup--${page}`;
        burger.classList.add('header__burger--open');
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('main').style.pointerEvents = 'none';

        document.querySelector('body').classList.add('prevent-scroll');
        // document.body.style.height = '100vh';
    }

    burger.addEventListener('click', () => {

        if (burger.classList.contains('header__burger--open')) {
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
            if(window.isVkMiniApp !== undefined && window.isVkMiniApp){
                bridge.send("VKWebAppShare", {"link": "vk.com/app8087070"});

            } else{

                navigator.clipboard.writeText('https://infografika.donorsearch.org/')
            }

        });
    });
    // openPopup('about');

    benefitBtn.addEventListener('click', () => {
        benefitSocials.classList.toggle('active');
    });

    if(window.isVkMiniApp !== undefined && window.isVkMiniApp){
        e.preventDefault();
        // bridge.send("VKWebAppDownloadFile", {"url": href, "filename": `${download}.jpg`});
        bridge.send("VKWebAppShowStoryBox", { "background_type" : "image", "url" : href });

    }
}