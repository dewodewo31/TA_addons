document.addEventListener("DOMContentLoaded", function () {
  var carousels = ["customCarouselJumbotron"]; // Daftar ID carousel yang akan diinisialisasi
  carousels.forEach(function (carouselId) {
    var carouselElement = document.getElementById(carouselId);
    if (
      carouselElement &&
      !carouselElement.classList.contains("carousel-zoom")
    ) {
      new bootstrap.Carousel(carouselElement, {
        interval: 2000,
        ride: "carousel",
        pause: "hover",
        wrap: true,
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi Swiper Testi
  const swiperTesti = new Swiper(".swiper-testi", {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

new Swiper(".testimonial-carousel", {
  loop: true,
  speed: 600,
  spaceBetween: 20,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
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

// carousel testi
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("customCarouselTesti");
  const items = carousel.querySelectorAll(".carousel-item-testi");
  let activeIndex = 0;

  const showSlide = index => {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
  };

  document.getElementById("prevButton").addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    showSlide(activeIndex);
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % items.length;
    showSlide(activeIndex);
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    activeIndex = (activeIndex + 1) % items.length;
    showSlide(activeIndex);
  }, 5000);
});

// ulin banner slider
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#cardSlider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next-socmed",
      prevEl: ".swiper-button-prev-socmed",
    },

    // Pagination
    pagination: {
      el: ".swiper-pagination-socmed",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
});

// reason ulin
const carouselItems = document.querySelectorAll(".carousel-reason-item");
let currentIndex = 0;

function showNextSlide() {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds

// acordion
// maps car
document.addEventListener("DOMContentLoaded", () => {
  const pins = document.querySelectorAll(".pin");

  // Tambahkan event listener untuk setiap pin
  pins.forEach(pin => {
    const popup = pin.querySelector(".popup");

    // Klik pada pin untuk toggle popup
    pin.addEventListener("click", e => {
      e.stopPropagation(); // Mencegah klik dari memengaruhi elemen lain
      const isVisible = popup.style.display === "block";

      // Tutup semua popup
      document
        .querySelectorAll(".popup")
        .forEach(p => (p.style.display = "none"));

      // Toggle popup saat ini
      popup.style.display = isVisible ? "none" : "block";
    });
  });

  // Klik di luar elemen untuk menutup semua popup
  document.addEventListener("click", () => {
    document
      .querySelectorAll(".popup")
      .forEach(popup => (popup.style.display = "none"));
  });
});
