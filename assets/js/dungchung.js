function addImgBanner(img, link) {
    var newBanner = 
    `
        <div class="swiper-slide">
            <a target="_blank" href=` + link + `>
                <img src=` + img + `>
            </a>
        </div>
    `
    var banner = document.getElementsByClassName("swiper-wrapper")[0];
    banner.innerHTML += newBanner;
}

function bannerSwiper(idSwiper, swiperPagination, swiperBtnNext, swiperBtnPrev) {
    const swiper = new Swiper(idSwiper, {
        slidesPerView: 1,  
        spaceBetween: 100,   
        centeredSlides: true,
        loop: false,          
        speed: 400,          
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: swiperPagination,
            clickable: true,
        },
        navigation: {
            nextEl: swiperBtnNext,
            prevEl: swiperBtnPrev,
        },
    });
}

