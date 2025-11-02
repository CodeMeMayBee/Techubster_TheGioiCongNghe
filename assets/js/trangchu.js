window.addEventListener("DOMContentLoaded", function() {
    addImgBanner("/thegioicongnghe-frontend/assets/img/banners/banner0.gif", "/thegioicongnghe-frontend/assets/img/banners/banner0.gif");
    var numBanners = 9;
    for(var i = 1; i <= numBanners; i++) {
        var imglink = "/thegioicongnghe-frontend/assets/img/banners/banner" + i + ".png";
        addImgBanner(imglink, imglink);
    }
    bannerSwiper(".banner__large-swiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev"); //Animation Banner
});