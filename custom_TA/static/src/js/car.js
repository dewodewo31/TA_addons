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
// slider car page
const swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
