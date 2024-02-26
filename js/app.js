let menu__selector = document.querySelector('.menu')

let close__selector = document.querySelector('.close')

let menu__main = document.querySelector('.nav__menu__inner__main')

let menu__links = document.querySelector('.nav__menu__inner__links')

let body = document.querySelector('.body')

let scuderia = document.querySelector('.scuderia')

let logo = document.querySelector('.logo')

let menu__patrocinio = document.querySelector('.home__patrocinio')

let menu__seja = document.querySelector('.home__seja__um')

let main = document.querySelector('.main')

let scrolledPast200 = false;

let scrolledPast = false;

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

    /* Hidden menu */

    main.classList.remove('fade')
    main.classList.add('fade-out')

});

var classes = document.querySelectorAll('.close, .home__menu, .sobre__menu, .sobre__areas, .sobre__patrocinio, .sobre__contato, .sobre__noticia');

classes.forEach(function(classe) {

    classe.addEventListener('click', function() {

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

        /* Hidden menu */

        setTimeout(function() {
            main.classList.add('fade')
            main.classList.remove('fade-out')
        }, 700);

    })

})

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

/* Animação patrocinio 1*/

function animateElement1(index) {

    let patros = ['.p__1__1', '.p__1__2', '.p__1__3'].map(selector => document.querySelector(selector));

    if (index >= patros.length) {

        /* Reinicia a animação do começo */

        patros[0].classList.remove('disable');
        patros[0].classList.add('active');
        animateElement1(0);
        return;

    }

    let patro = patros[index];

    gsap.from(patro, {

        x: -200,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),

        onComplete: function () {

            gsap.to(patro, {

                delay: 3,
                y: 200,
                duration: 1,
                ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),

                onComplete: function () {

                    patro.classList.remove('active');
                    patro.classList.add('disable');

                    gsap.to(patro, {

                        y: 0,
                        x: 0,

                    })

                    if (index + 1 < patros.length) {

                        patros[index + 1].classList.remove('disable');
                        patros[index + 1].classList.add('active');
                        animateElement1(index + 1);

                    } 

                    else {

                        /* Reinicia a animação do começo */
                        
                        patros[0].classList.remove('disable');
                        patros[0].classList.add('active');
                        animateElement1(0);

                    }
                }
            });
        }
    });
}

animateElement1(0);

/* Animação patrocinio 2 */

function animateElement2(index) {

    let patros = ['.p__2__1', '.p__2__2', '.p__2__3'].map(selector => document.querySelector(selector));

    if (index >= patros.length) {

        /* Reinicia a animação do começo */

        patros[0].classList.remove('disable');
        patros[0].classList.add('active');
        animateElement2(0);
        return;

    }

    let patro = patros[index];

    gsap.from(patro, {

        y: -200,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),

        onComplete: function () {

            gsap.to(patro, {

                delay: 3,
                x: 200,
                duration: 1,
                ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),

                onComplete: function () {

                    patro.classList.remove('active');
                    patro.classList.add('disable');

                    gsap.to(patro, {

                        y: 0,
                        x: 0,

                    })

                    if (index + 1 < patros.length) {

                        patros[index + 1].classList.remove('disable');
                        patros[index + 1].classList.add('active');
                        animateElement2(index + 1);

                    } 

                    else {

                        /* Reinicia a animação do começo */
                        
                        patros[0].classList.remove('disable');
                        patros[0].classList.add('active');
                        animateElement2(0);

                    }
                }
            });
        }
    });
}

animateElement2(0);

/* Animação patrocinio 2 */

function animateElement3(index) {

    let patros = ['.p__3__1', '.p__3__2', '.p__3__3'].map(selector => document.querySelector(selector));

    if (index >= patros.length) {

        /* Reinicia a animação do começo */

        patros[0].classList.remove('disable');
        patros[0].classList.add('active');
        animateElement3(0);
        return;

    }

    let patro = patros[index];

    gsap.from(patro, {

        x: 200,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),

        onComplete: function () {

            gsap.to(patro, {

                delay: 3,
                y: -200,
                duration: 1,
                ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),

                onComplete: function () {

                    patro.classList.remove('active');
                    patro.classList.add('disable');

                    gsap.to(patro, {

                        y: 0,
                        x: 0,

                    })

                    if (index + 1 < patros.length) {

                        patros[index + 1].classList.remove('disable');
                        patros[index + 1].classList.add('active');
                        animateElement3(index + 1);

                    } 

                    else {

                        /* Reinicia a animação do começo */
                        
                        patros[0].classList.remove('disable');
                        patros[0].classList.add('active');
                        animateElement3(0);

                    }
                }
            });
        }
    });
}

animateElement3(0);

/* Mudança primeiro */ 

let criamos = document.querySelector('.criamos')

let buscamos = document.querySelector('.buscamos')

let alcançamos = document.querySelector('.alcançamos')

let title__primeiro = document.querySelector('.title__main__primeiro')

window.addEventListener('scroll', function() {

    if (window.scrollY > 2050) {

        if (!scrolledPast) {

            scrolledPast = true;
            
            title__primeiro.classList.remove('fade')
            title__primeiro.classList.add('fade-out')

            criamos.classList.remove('fade')
            criamos.classList.add('fade-out')

            buscamos.classList.remove('fade')
            buscamos.classList.add('fade-out')

            alcançamos.classList.remove('fade')
            alcançamos.classList.add('fade-out')
            
            setTimeout(function() {

                title__primeiro.classList.add('fade')
                title__primeiro.classList.remove('fade-out')

                criamos.classList.add('fade')
                criamos.classList.remove('fade-out')

                buscamos.classList.add('fade')
                buscamos.classList.remove('fade-out')

                alcançamos.classList.add('fade')
                alcançamos.classList.remove('fade-out')

                criamos.innerHTML = 'Com'
                buscamos.innerHTML = 'O apoio'
                alcançamos.innerHTML = 'De vocês'

            }, 700);
        }
    } 
    
    else {

        if (scrolledPast) {

            scrolledPast = false;

            title__primeiro.classList.remove('fade')
            title__primeiro.classList.add('fade-out')

            criamos.classList.remove('fade')
            criamos.classList.add('fade-out')

            buscamos.classList.remove('fade')
            buscamos.classList.add('fade-out')

            alcançamos.classList.remove('fade')
            alcançamos.classList.add('fade-out')
            
            setTimeout(function() {

                title__primeiro.classList.add('fade')
                title__primeiro.classList.remove('fade-out')

                criamos.classList.add('fade')
                criamos.classList.remove('fade-out')

                buscamos.classList.add('fade')
                buscamos.classList.remove('fade-out')

                alcançamos.classList.add('fade')
                alcançamos.classList.remove('fade-out')

                criamos.innerHTML = 'Criamos'
                buscamos.innerHTML = 'Buscamos'
                alcançamos.innerHTML = 'Alcançamos'

            }, 700);

        }
    }
});

/* Animação popup1 */

let popup1 = document.querySelector('.popup1');
let popup1__text = document.querySelector('.popup1__text');

popup1.classList.remove('fade-out');
popup1.classList.add('fade');

gsap.from(popup1, {

    y: 50,
    duration: 1,
    ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),

});

setTimeout(function() {

    popup1__text.classList.remove('fade-out');
    popup1__text.classList.add('fade');

    gsap.from(popup1__text, {

        x: -5,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),
    
    });

}, 1000);

/* Animação popup2 */

let popup2 = document.querySelector('.popup2');
let popup2__text = document.querySelector('.popup2__text');



setTimeout(function() {

    popup2.classList.remove('fade-out');
    popup2.classList.add('fade');

    gsap.from(popup2, {

        y: 50,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),
    
    });

}, 200);

setTimeout(function() {

    popup2__text.classList.remove('fade-out');
    popup2__text.classList.add('fade');

    gsap.from(popup2__text, {

        x: -5,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),
    
    });

}, 1200);

/* Animação popup3 */

let popup3 = document.querySelector('.popup3');
let popup3__text = document.querySelector('.popup3__text');

setTimeout(function() {

    popup3.classList.remove('fade-out');
    popup3.classList.add('fade');

    gsap.from(popup3, {

        y: 50,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),
    
    });

}, 400);

setTimeout(function() {

    popup3__text.classList.remove('fade-out');
    popup3__text.classList.add('fade');

    gsap.from(popup3__text, {

        x: -5,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),
    
    });

}, 1400);

/* Animação button1 */

let button1 = document.querySelector('.section__button1');

setTimeout(function() {

    button1.classList.remove('fade-out');
    button1.classList.add('fade');

    gsap.from(button1, {

        x: -50,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),
    
    });

}, 1400);

/* Animação button2 */

let button2 = document.querySelector('.section__button2');

setTimeout(function() {

    button2.classList.remove('fade-out');
    button2.classList.add('fade');

    gsap.from(button2, {

        x: 50,
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.201,0 0.399,0.294 0.5,0.5 0.597,0.699 0.799,1 1,1 "),
    
    });

}, 1400);