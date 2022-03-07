export default function CirclesMobile() {

    let circles = document.querySelector('.circles-popup');
    let pathTop = document.querySelector('.donation__circles .circles__path--top');
    let pathBottom = document.querySelector('.donation__circles .circles__path--bottom');
    let closes = document.querySelectorAll('.circles__close');
    let isOpened = false;

    pathTop.addEventListener('click', () => {

        openPopup('top');

    });
    pathBottom.addEventListener('click', () => {

        openPopup('bottom');


    });


    closes.forEach(element => {

        element.addEventListener('click', closePopup);

    });

    function openPopup(popup) {
        if (!isOpened) {
            circles.classList.add('active');
            document.querySelector(`.circles-popup .circles__path--${popup}`).classList.add('active');
            document.querySelector('header').style.display = 'none';
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('body').style.height = '100%';
            document.querySelector('main').style.height = '100%';
            // document.body.style.height = '100vh';
            // document.querySelector('body').style.overflow = 'hidden';

            isOpened = true;
        }
    }

    function closePopup() {
        circles.classList.remove('active');
        
        document.querySelector(`.circles-popup .circles__path.active`).classList.remove('active');
        document.querySelector('header').style.display = '';
        document.querySelector('body').style.overflow = '';
        document.querySelector('body').style.height = '';
        document.querySelector('main').style.height = '';
        // document.body.style.height = '';
        setTimeout(() => {

            isOpened = false;
        }, 100);
    }

}