// เมื่อขนาดหน้าจอเปลี่ยนแปลง (resize)
window.addEventListener("resize", () => {
    const bottle = document.querySelector(".layer-1 img");

    let scaleAmount = window.innerWidth / 1500;
    scaleAmount = Math.min(scaleAmount, 1);

    bottle.style.transform = `scale(${scaleAmount})`;  
});



// เมื่อมีการเลื่อน layer1
document.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    const bottle = document.querySelector(".layer-1 img");

    let rotateAmount = Math.min(scrollPos / 3, 90);
    let moveX = Math.min(scrollPos / 5, 100);
    let moveY = Math.min(scrollPos / 7, 50); 

    bottle.style.transform = `rotate(${-rotateAmount}deg) translate(${moveX}px, -${moveY}px) scale(${window.innerWidth / 1500})`;  
});


// เมื่อมีการเลื่อน layer2
document.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    const layer2 = document.querySelector(".layer-2");

    let translateY = Math.min(scrollPos / 2, 500);
    layer2.style.transform = `translateY(-${translateY}px)`;
});

//scroll down
window.addEventListener("scroll", () => {
    const indicator = document.querySelector(".scroll-indicator");
    if (window.scrollY > 50) {
        indicator.style.opacity = "0";
        indicator.style.pointerEvents = "none";
    } else {
        indicator.style.opacity = "1";
        indicator.style.pointerEvents = "auto";
    }
});

//slider bar
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: -5,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });

  window.addEventListener('scroll', () => {
    const yScroll = window.scrollY;
    const triggerPoint = 1000;
  
    const pen = document.querySelector('.pen');
    const ipad = document.querySelector('.ipad');
  
    if (yScroll >= triggerPoint) {
      pen.style.transform = 'translateX(0) rotate(5deg)';
      setTimeout(() => {
        ipad.style.transform = 'translateX(0) rotate(-5deg)';
      }, 200); // ล่าช้า 2 วินาที
    } else {
      pen.style.transform = 'translateX(100vw) rotate(0deg)';
      ipad.style.transform = 'translateX(100vw) rotate(0deg)';
    }
  });
  