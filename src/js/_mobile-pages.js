import Cover from './_cover';

export default function Page() {

    const menuItems = document.querySelectorAll('.header__menu-link[data-href]');

    const spineItems = document.querySelectorAll('.spine[data-href]');
    const header = document.querySelector('.header');

    const burger = document.querySelector('.header__burger--mobile');
    const labelCover = document.querySelector('.cover__label--bottom');
    const headerNumber = document.querySelector('.header__number');
    const headerTitle = document.querySelector('.header__title');
    const popup = document.querySelector('.header__popup');

    let stageCover = 0;
    const data = {
        'cover': "Инфографика х donorsearch",
        'prep': "подготовка",
        'donation': "Сдача крови",
        'test': "Куда идет кровь",
        'benefit': "Польза для донора",

    }

    let isInit = false;
    let isOpen = false;

    function setPage(href, index) {
        document.body.classList = `page-${href}`;
        headerTitle.textContent = data[href];
        headerNumber.textContent = `0${index}`;
        // включить на прод
        window.scrollTo(0, 0);
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.querySelector('body').classList.remove('prevent-scroll');
    }
    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            let href = item.getAttribute('data-href');
            closePopup();
            setPage(href, index);

        });
    });

    burger.addEventListener('click', () => {
        isOpen = !isOpen;
    });
    spineItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            let href = item.getAttribute('data-href');
            setPage(href, index + 1);

        });
    });

    function closePopup() {

        burger.classList.remove('header__burger--open');
        header.classList.remove('header--open');

        document.querySelector('body').classList.remove('prevent-scroll');
        popup.classList = 'header__popup';
        document.querySelector('body').style.overflow = '';
        document.body.style.height = '';
        document.querySelector('main').style.pointerEvents = '';
        isOpen = false;
    }


    setPage('cover', 1);
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.querySelector('body').classList.add('prevent-scroll');
    let isMoving = false;
    let startingY;
    document.addEventListener('touchstart', tStart);
    document.addEventListener('wheel', onMouseWheel);

    function tStart(e) {
        if (document.querySelector('body').classList.contains('page-cover') && !document.querySelector('.cover').classList.contains('cover--stage-0') && !isInit && !isOpen && !isMoving) {
            startingY = e.touches[0].pageY;
            document.addEventListener('touchmove', tMove);
            document.addEventListener('touchend', tEnd);
        }
    }

    function tMove(e) {
        let currentY = e.touches[0].pageY;
        let delta = currentY - startingY;
        if (delta > 0 && !isMoving) {

            tTimeout();
            Cover(1);
            stageCover = 1;

        }
        if (delta < 0 && !isMoving) {

            tTimeout();
            Cover(2);
            stageCover=2;
            if (!isInit) {
                isInit = true;
                setTimeout(() => {
                    document.querySelector('body').style.overflow = '';
                    document.body.style.height = '';

                    document.querySelector('body').classList.remove('prevent-scroll');
                }, 1000);
            }
        }
    }

    function tTimeout(index = 1) {

        if (!isMoving) {
            isMoving = true;

            setTimeout(() => {
                isMoving = false;

            }, 1500 * index);
        }
    }
    tTimeout(2);

    function tEnd() {
        document.removeEventListener('touchmove', tMove, false);
        document.removeEventListener('touchend', tEnd, false);
    }

    function onMouseWheel(event) {
        if (document.querySelector('body').classList.contains('page-cover') && !document.querySelector('.cover').classList.contains('cover--stage-0') && !isInit && !isOpen && !isMoving) {
            let delta = event.wheelDelta / 30 || -event.detail;
            //If the user scrolled up, it goes to previous slide, otherwise - to next slide
            if (delta > 0 && !isMoving) {
                Cover(1);
                stageCover = 1;
                tTimeout();

            }
            if (delta < 0 && !isMoving) {
                Cover(2);
                stageCover = 2;
                tTimeout();
                if (!isInit) {
                    isInit = true;
                    setTimeout(() => {
                        document.querySelector('body').style.overflow = '';
                        document.body.style.height = '';

                        document.querySelector('body').classList.remove('prevent-scroll');
                    }, 1000);
                }
            }
        } else {
            return false
        }
    }

    setTimeout(() => {
        
    labelCover.addEventListener('click', ()=>{
        if(stageCover === 2){
            setPage('prep', 1);
        }else{
            Cover(2);
            stageCover = 2;
            tTimeout();
            if (!isInit) {
                isInit = true;
                setTimeout(() => {
                    document.querySelector('body').style.overflow = '';
                    document.body.style.height = '';

                    document.querySelector('body').classList.remove('prevent-scroll');
                }, 1000);
            }
        }
    });
    }, 2500);
}