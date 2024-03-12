// Filter Js
$(document).ready(function () {
    $(".filter-item").click(function ( ) {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $("post-box").show("1000");
        } else{
            $(".post-box")
             .not("." + value)
             .hide("1000");
            $(".post-box")
                .filter("." + value)
                .show("1000");
        }
    });
    // Add active to btn
    $(".filter-item").click(function () {
        $(this).addClass("active-filters").siblings().removeClass("active-filter");
    });
});
// Header BG change on scroll
let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

/*---------------- Visitor Counter ----------------*/

const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/uimonk/iamtanvir/?amount=1')
    .then(res => res.json())
    .then(res => {
        countEl.innerHTML = res.value;
    });
}

//Navigation bar

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.navbar .hamburger-icon');
    const closeIcon = document.querySelector('.navbar .close-icon');
    const navList = document.querySelector('.navbar ul');
  
    menuIcon.addEventListener('click', function () {
      navList.classList.add('show');
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    });
  
    closeIcon.addEventListener('click', function () {
      navList.classList.remove('show');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });
  