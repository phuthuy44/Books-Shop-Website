const searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
}
const userlogin = document.querySelector('.login-form-container');
document.querySelector('#login-btn ').onclick = () => {
    userlogin.classList.toggle('active');
}
const closeLogin = document.querySelector('.login-form-container');
document.querySelector('#close-login-btn').onclick = () => {
    closeLogin.classList.remove('active');
}
window.onscroll = () => {
    searchform.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active')
    }
}
window.onload = () => {
    closeLogin.classList.remove('active');
    searchform.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active')
    }
    fadeOut();
}

function loader() {
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
    setTimeout(loader, 4000);
}
const swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        650: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 3,
        },
    },
});
const swiper1 = new Swiper(".featured-slider", {
    spaceBetween: 11,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5200,
        disableOnInteraction: false,
    },
    navigator: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 4,
        },
    },
});
let swiper3 = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3100,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
let swiper4 = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2100,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
let swiper5 = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});