// Html'den elamanları çek

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");


// menu-btn'e tıklandığında nav kısmına active classı ekle çıkar
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});