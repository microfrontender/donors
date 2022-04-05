export default function FoodMobile() {

    let food = document.querySelector('.food-popup');
    let foodItem = document.querySelector('.food__item');
    let close = document.querySelector('.food__popup-close');
    let header = document.querySelector('.header');

    let food__btns = document.querySelectorAll('.food__btn');


    function openFood() {
        food.classList.add('active');
        document.querySelector('header').style.display = 'none';
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('body').style.height = '100%';
        document.querySelector('main').style.height = '100%';
        document.querySelector('main').style.pointerEvents = 'none';

        document.querySelector('body').classList.add('prevent-scroll');
    }

    function closeFood() {

        document.querySelector('header').style.display = '';
        document.querySelector('body').style.overflow = '';
        document.querySelector('body').style.height = '';
        document.querySelector('main').style.height = '';
        document.querySelector('main').style.pointerEvents = '';

        document.querySelector('body').classList.remove('prevent-scroll');
        food.classList.remove('active');

    }

    // openFood();
    close.addEventListener('click', closeFood);

    function setTab(index) {
        document.querySelector('.food__tab.active').classList.remove('active');
        document.querySelector(`.food__tab--${index}`).classList.add('active');
    }

    food__btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            document.querySelector('.food__btn.active').classList.remove('active');
            btn.classList.add('active');
            setTab(index + 1);
        });
    });
    foodItem.addEventListener('click', () => {
        openFood();
    });


}