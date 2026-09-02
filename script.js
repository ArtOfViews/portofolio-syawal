/* =========================================
   LOADER
========================================= */

window.addEventListener("load", function () {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 700);

});


/* =========================================
   NAVBAR
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================================
   PHOTO FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const photoItems = document.querySelectorAll(".photo-item");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const filter = this.dataset.filter;

        photoItems.forEach(item => {

            const category = item.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ) {

                item.classList.remove("hidden");

            } else {

                item.classList.add("hidden");

            }

        });

    });

});


/* =========================================
   LIGHTBOX
========================================= */

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxClose = document.querySelector(".lightbox-close");

const portfolioImages =
    document.querySelectorAll(
        ".photo-item img"
    );


portfolioImages.forEach(image => {

    image.addEventListener("click", function () {

        lightboxImage.src = this.src;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* CLOSE LIGHTBOX */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}

lightboxClose.addEventListener(
    "click",
    closeLightbox
);


/* CLICK OUTSIDE IMAGE */

lightbox.addEventListener(
    "click",
    function (event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    }
);


/* ESC KEY */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   PAUSE OTHER VIDEOS
========================================= */

const videos =
    document.querySelectorAll("video");


videos.forEach(video => {

    video.addEventListener(
        "play",
        function () {

            videos.forEach(otherVideo => {

                if (otherVideo !== video) {

                    otherVideo.pause();

                }

            });

        }
    );

});


/* =========================================
   SMOOTH NAVIGATION
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});

/* =========================
   YOUTUBE VIDEO LIGHTBOX
========================= */

const youtubeThumbnails = document.querySelectorAll(".youtube-thumbnail");
const youtubeLightbox = document.querySelector(".youtube-lightbox");
const youtubeIframe = document.querySelector(".youtube-container iframe");
const youtubeClose = document.querySelector(".youtube-close");


youtubeThumbnails.forEach(thumbnail => {

    thumbnail.addEventListener("click", () => {

        const videoId = thumbnail.getAttribute("data-youtube");

        if (!videoId) return;

        youtubeIframe.src =
            "https://www.youtube.com/embed/" +
            videoId +
            "?autoplay=1&rel=0";

        youtubeLightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


function closeYoutube() {

    youtubeLightbox.classList.remove("active");

    youtubeIframe.src = "";

    document.body.style.overflow = "";

}


youtubeClose.addEventListener("click", closeYoutube);


youtubeLightbox.addEventListener("click", (event) => {

    if (event.target === youtubeLightbox) {

        closeYoutube();

    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeYoutube();

    }

});

