let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let tooggleBtn = document.querySelector('.toggle-btn');

tooggleBtn.onclick = () => {
  themeToggler.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color',color);
}
});

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
  });

/*
  var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop:true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,

  });
*/

/*
const scriptURL = 'https://script.google.com/macros/s/AKfycbx24UVnm2rqQwNvRWKffdi4ip8TRpYlHv7Hom0N8_zPi0YMj4c4DpSGEwKqeKAPUh3v/exec';
const form = document.querySelector('#contact_form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(form);

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {alert("Thanks for Contacting us..! We Will Contact You Soon...", response)})
    .catch(error => console.error('Error!', error.message))
})
*/

function cricket() {
  window.location.href = 'https://forms.gle/znG43FZZqUQ46ESQ8'; // Replace 'your_form_id' with the actual ID of your Google Form
}

function football() {
  window.location.href = 'https://forms.gle/JLxVFRvqaKGgQgkM9'; // Replace 'your_form_id' with the actual ID of your Google Form
}

function chess() {
  window.location.href = 'https://forms.gle/znG43FZZqUQ46ESQ8'; // Replace 'your_form_id' with the actual ID of your Google Form
}

function badminton() {
  window.location.href = 'https://forms.gle/Y3iAWRhtMRhbQ4CF7'; // Replace 'your_form_id' with the actual ID of your Google Form
}

function volleyball() {
  window.location.href = 'https://forms.gle/znG43FZZqUQ46ESQ8'; // Replace 'your_form_id' with the actual ID of your Google Form
}

function tabletennis() {
  window.location.href = 'https://forms.gle/PQQFc6eKvb93HEyc7'; // Replace 'your_form_id' with the actual ID of your Google Form
}


document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/sponsors')
.then((response) => response.json())
.then((sponsors) => {
const sponsorListDiv = document.getElementById('sponsorList');
// Iterate over sponsors and append them to the sponsorListDiv
sponsors.forEach((sponsor) => {
const img = document.createElement('img');
img.src = sponsor.image;
console.log(sponsor.image);
img.alt = sponsor.name;
img.referrerPolicy="no-referrer";
sponsorListDiv.appendChild(img);
});
})
.catch((error) => console.error('Error fetching sponsors:', error));
});

