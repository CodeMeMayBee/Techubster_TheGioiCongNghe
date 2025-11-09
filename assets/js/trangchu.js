window.addEventListener("DOMContentLoaded", function() {
    addImgBanner("/Techubster_TheGioiCongNghe/assets/img/banners/banner0.gif", "/Techubster_TheGioiCongNghe/assets/img/banners/banner0.gif");
    var numBanners = 9;
    for(var i = 1; i <= numBanners; i++) {
        var imglink = "/Techubster_TheGioiCongNghe/assets/img/banners/banner" + i + ".png";
        addImgBanner(imglink, imglink);
    }
    bannerSwiper(".banner__large-swiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev"); //Animation Banner

    updateProgress();

    const items = document.querySelectorAll(".header__campaigns-item");
    const underline = document.querySelector(".header__underline");

    function updateUnderline(activeItem) {
        const { offsetLeft, offsetWidth } = activeItem;
        underline.style.left = `${offsetLeft}px`;
        underline.style.width = `${offsetWidth}px`;
    }

    // Khởi tạo thanh underline cho item active ban đầu
    updateUnderline(document.querySelector(".header__campaigns-item.active"));

    items.forEach(item => {
        item.addEventListener("click", () => {
            // Xóa active của item cũ
            document.querySelector(".header__campaigns-item.active").classList.remove("active");
            // Thêm active cho item mới
            item.classList.add("active");
            // Cập nhật thanh underline
            updateUnderline(item);
        });
    });
});