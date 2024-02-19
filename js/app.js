let menu__selector = document.querySelector('.menu')

let close__selector = document.querySelector('.close')

let menu__main = document.querySelector('.nav__menu__inner__main')

let menu__links = document.querySelector('.nav__menu__inner__links')

let body = document.querySelector('.body')

let scuderia = document.querySelector('.scuderia')

let logo = document.querySelector('.logo')

let scrolledPast200 = false;

/* functions */

menu__selector.addEventListener('click', function() {

    /* Hidden menu button */

    menu__selector.classList.remove('fade');
    menu__selector.classList.add('fade-out');

    setTimeout(function() {
        menu__selector.classList.add('display-out');
        close__selector.classList.remove('display-out');
    }, 500);
    
    setTimeout(function() {
        close__selector.classList.remove('fade-out');
        close__selector.classList.add('fade');
    }, 510);

    /* Animation menu__main / menu__links */

    setTimeout(function() {
        menu__main.classList.toggle('nav__menu__inner__main-active');
        menu__main.classList.toggle('nav__menu__inner__main-disable');
    }, 250);

    setTimeout(function() {
        menu__links.classList.toggle('nav__menu__inner__links-active');
        menu__links.classList.toggle('nav__menu__inner__links-disable');
    }, 300);

    /* Scrollbar */

    body.classList.toggle('menu__close');
    body.classList.toggle('menu__open');

    /* Logos */

    scuderia.classList.remove('fade');
    scuderia.classList.add('fade-out');

    setTimeout(function() {
        scuderia.classList.remove('display');
        scuderia.classList.add('display-out');
    }, 500);
    
    logo.classList.remove('fade');
    logo.classList.add('fade-out');

    setTimeout(function() {
        logo.classList.remove('display');
        logo.classList.add('display-out');
    }, 500);

});

close__selector.addEventListener('click', function() {

    /* Hidden close button */

    close__selector.classList.remove('fade');
    close__selector.classList.add('fade-out');

    setTimeout(function() {
        close__selector.classList.add('display-out');
        menu__selector.classList.remove('display-out');
    }, 500);
    
    setTimeout(function() {
        menu__selector.classList.remove('fade-out');
        menu__selector.classList.add('fade');
    }, 650);

    /* Animation menu__main / menu__links */

    menu__main.classList.toggle('nav__menu__inner__main-active');
    menu__main.classList.toggle('nav__menu__inner__main-disable');

    setTimeout(function() {
        menu__links.classList.toggle('nav__menu__inner__links-active');
        menu__links.classList.toggle('nav__menu__inner__links-disable');
    }, 100);

    /* Scrollbar */

    body.classList.toggle('menu__close');
    body.classList.toggle('menu__open');

    /* Logos */

    if (window.pageYOffset > 200) {
        logo.classList.remove('display-out');
        logo.classList.add('display');

        setTimeout(function() {
            logo.classList.add('fade');
            logo.classList.remove('fade-out');
        }, 500);
    }

    else {
        scuderia.classList.remove('display-out');
        scuderia.classList.add('display');

        setTimeout(function() {
            scuderia.classList.add('fade');
            scuderia.classList.remove('fade-out');
        }, 500);
    }
});

/* Mudança Layout Header Scroll */ 

window.addEventListener('scroll', function() {

    if (window.scrollY > 100) {

        if (!scrolledPast200) {

            scrolledPast200 = true;

            scuderia.classList.remove('display','fade');
            scuderia.classList.add('fade-out');

            menu__selector.classList.add('fade-out');
            
            setTimeout(function() {

                scuderia.classList.add('display-out');

                logo.classList.remove('display-out');
                logo.classList.add('display');

                menu__selector.classList.add('nav__item__back');

            }, 500);

            setTimeout(function() {

                logo.classList.add('fade');
                logo.classList.remove('fade-out');

                menu__selector.classList.remove('fade-out');
                menu__selector.classList.add('fade');

            }, 520);
        }
    } 
    
    else {

        if (scrolledPast200) {

            scrolledPast200 = false;

            logo.classList.remove('display', 'fade');
            logo.classList.add('fade-out');

            menu__selector.classList.remove('fade');
            menu__selector.classList.add('fade-out');

            setTimeout(function() {

                logo.classList.add('display-out');

                scuderia.classList.remove('display-out');
                scuderia.classList.add('display');

                menu__selector.classList.remove('nav__item__back');

            }, 500);

            setTimeout(function() {

                scuderia.classList.add('fade');
                scuderia.classList.remove('fade-out');

                menu__selector.classList.add('fade');
                menu__selector.classList.remove('fade-out');

            }, 520);
        }
    }
});  
