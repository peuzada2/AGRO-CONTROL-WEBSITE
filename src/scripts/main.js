
window.revelar = ScrollReveal({})

revelar.reveal('.text-quem-somos', { 
    delay: 100,
    duration: 800,
    distance:'90px' 
});

revelar.reveal('#ns-01', { 
    delay: 100,
    duration: 800,
    distance:'90px' 
});

revelar.reveal('#ns-02', { 
    delay: 120,
    duration: 800,
    distance:'90px' 
});

revelar.reveal('#ns-03', { 
    delay: 140,
    duration: 800,
    distance:'90px' 
});

revelar.reveal('#ns-04', { 
    delay: 160,
    duration: 800,
    distance:'90px' 
});

revelar.reveal('#contact-grid', { 
    delay: 160,
    duration: 800,
    distance:'90px' 
});

revelar.reveal('.trator-about-service', { 
    delay: 350,
    duration: 1200,
    distance:'90px' 
});

revelar.reveal('.container-cta', { 
    delay: 350,
    duration: 1200,
    distance:'90px' 
});


let lastScroll = 0;
    const header = document.getElementById("mainHeader");

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll) {
        // Rolando para baixo -> esconde o header
        header.style.top = "-110px"; 
      } else {
        // Rolando para cima -> mostra o header
        header.style.top = "0";
      }

      lastScroll = currentScroll;
    });

    const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
      spaceBetween: 7,
      navigation: {
        nextEl: ".element-prev",
        prevEl: ".element-next",
      },
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.60": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
    
    const swiper2 = new Swiper('.swiperteam', {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".element-prev2",
        prevEl: ".element-next2",
      },
      loop: true,
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "@0.60": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
});