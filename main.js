const mobileBtn = document.getElementById('mobile-cta');
              const nav = document.querySelector('nav');
              const mobileBtnExit = document.getElementById('mobile-exit');

        mobileBtn.addEventListener('click', () => {
            nav.classList.add('menu-btn');
        })

        mobileBtnExit.addEventListener('click', () => {
            nav.classList.remove('menu-btn');
        })





gsap.from('.content', {opacity: 0, duration: 1.5, y: -100, ease: Power2});

gsap.from('.years', {opacity:0, duration: 1.5, x: -100});

