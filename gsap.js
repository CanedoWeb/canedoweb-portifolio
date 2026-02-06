
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  ScrollTrigger.refresh(true);
  setTimeout(() => window.scrollTo(0, 0), 50);
});

// Menu Mobile/Hamburguer
document.addEventListener('DOMContentLoaded', () => {
  const hamburguer = document.querySelector('.hamburguer');
  const navMenu = document.getElementById('navMenu');
  let menuOpen = false;
  let a = document.getElementById('a-menu')

  // Toggle menu (abrir/fechar)
  if (hamburguer) {
    hamburguer.addEventListener('click', (e) => {
      e.stopPropagation();
      menuOpen = !menuOpen;
      hamburguer.classList.toggle('active');

      if (menuOpen) {
        gsap.to(navMenu, {
          right: 0,
          duration: 0.5,
          opacity: 1,
          backdropFilter: "blur(10px)",
          ease: "power1.out"
        });
      } else {
        gsap.to(navMenu, {
          right: '-100%',
          duration: 0.5,
          backdropFilter: "blur(50px)",
          ease: "power1.in"
        });
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Fechar menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburguer.contains(e.target) && menuOpen || a.contains(e.target)) {

      menuOpen = false;
      hamburguer.classList.remove('active');
      gsap.to(navMenu, {
        right: '-100%',
        duration: 0.4,
        ease: "power2.in"
      });
      document.body.style.overflow = 'auto';
    }
  });
});


document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

  ScrollTrigger.config({ ignoreMobileResize: true });


  const mm = gsap.matchMedia();

  let splitH2 = SplitText.create(".split-h2", { type: " chars" });
  let split = SplitText.create(".split-txt", { type: "words, chars" });
  let splitLogo = SplitText.create(".split-logo", { type: "chars" });
  const list = document.querySelector(".list");
  const fill = document.querySelector(".fill");
  const listItems = gsap.utils.toArray("li", list);
  const slides = gsap.utils.toArray(".slide");

  function splitH2ScrollAnimation() {
    gsap.utils.toArray(".split-h2").forEach((h2) => {
      const split = SplitText.create(h2, { type: "chars" });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: h2,
          start: "top 85%"
        },
        opacity: 0,
        y: -50,
        stagger: 0.04,
        ease: "power2.out"
      });
    });
  }

  mm.add("(min-width: 769px)", () => {

    splitH2ScrollAnimation()

    const tl = gsap.timeline();

    tl.fromTo(".hero-fundo", { opacity: 0 }, { opacity: 1, duration: 0.8 })
      .from(".header", { opacity: 0, duration: 0.8, ease: "power4.inOut" }, "-=0.4")
      .from(splitLogo.chars, {
        opacity: 0,
        y: -20,
        duration: 0.7,
        stagger: 0.03,
        ease: "power2.out"
      }, "<")
      .from(".heroH1", { y: -400, scale: 8, opacity: 0, duration: 1, ease: "power4.inOut" }, "-=0.5")
      .from(".heroP, .hero-btn", { opacity: 0, duration: 0.8, ease: "power4.inOut" }, "-=0.5");

    // SECTION SOBRE

    gsap.timeline({
      scrollTrigger: {
        trigger: ".sobre",
        start: "0% 90%",
        end: "95% 60%",
        toggleActions: "restart reverse restart reverse",
        scrub: 1,
        markers: false,
      }
    })
      .from(split.chars, {
        opacity: 0.3,
        duration: 2,
        stagger: 0.06,
        ease: "power2.out"
      });

    // SECTION PORTFOLIO
    gsap.timeline({
      scrollTrigger: {
        trigger: ".projetos",
        start: "10% 85%",
        end: "60% 40%",
        toggleActions: "restart reverse restart reverse",
        scrub: 1,
        markers: false,
      }
    })
      .from(".projeto-card", { y: 300, opacity: 0, scale: 0.5, stagger: 0.1 }, "<");

    //SECTION SERVICOS
    gsap.timeline({
      scrollTrigger: {
        trigger: ".servicos",
        start: "10% 85%",
        end: "80% 70%",
        toggleActions: "restart reverse restart reverse",
        scrub: 1,
        markers: false,
      }
    })
      .from(".list-child, .right", { y: 300, opacity: 0, duration: 1, scale: 0.5, stagger: 0.3 });


    // PIN SECTION - METODO FLOW


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".div-pai",
        start: "top top",
        end: "+=" + listItems.length * 80 + "%",
        pin: true,
        scrub: true
      }
    });

    // First element visible, set the marker
    fill &&
      gsap.set(fill, {
        scaleY: 1 / listItems.length,
        transformOrigin: "top left"
      });


    listItems.forEach((item, i) => {
      const previousItem = listItems[i - 1];
      if (previousItem) {
        tl2.set(item, { color: "#c20c97", opacity: 1 }, 0.5 * i)
          .to(
            slides[i],
            {
              autoAlpha: 1,
              duration: 0.4,
            },
            "<"
          )
          .set(previousItem, { color: "#eee", opacity: 1 }, "<")
          .to(
            slides[i - 1],
            {
              autoAlpha: 0,
              duration: 0.4,
            },
            "<"
          );
      } else {
        gsap.set(item, { color: "#c20c97" });
        gsap.set(slides[i], { autoAlpha: 1 });
      }
    });

    tl2.to(
      fill,
      {
        scaleY: 1,
        transformOrigin: "top left",
        ease: "none",
        duration: tl2.duration()
      },
      0
    ).to({}, { duration: 0.3 });

    //SECTION CONTATO
    tl2.fromTo(
      ".contato",
      {
        rotateX: 90,
        scaleX: 0.5,
        opacity: 0.8,
        transformOrigin: "center center",
        transformPerspective: 3000
      },
      {
        rotateX: 0,
        scale: 1,
        opacity: 1,
        duration: 1
      }
    );
  });

  mm.add("(max-width: 768px)", () => {

    // HERO (simples e rápido)
    const tl = gsap.timeline();

    tl.fromTo(".hero-fundo", { opacity: 0.5 }, { opacity: 1, duration: 0.6 })
      .from(".header", { opacity: 0.5, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .from(splitLogo.chars, {
        opacity: 0,
        y: -10,
        duration: 0.5,
        stagger: 0.02,
        ease: "power2.out"
      }, "<")
      .from(".heroH1", { y: -80, scale: 1.2, opacity: 0, duration: 0.7, ease: "power3.out" })
      .from(".heroP, .hero-btn", { opacity: 0, y: 10, duration: 0.5, ease: "power3.out", stagger: 0.08 }, "-=0.4");

    // SECTION SOBRE

    gsap.timeline({
      scrollTrigger: {
        trigger: ".sobre",
        start: "0% 90%",
        end: "80% 60%",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.3,
        markers: false,
      }
    })
      .from(split.chars, {
        opacity: 0.3,
        duration: 1.2,
        stagger: 1,
        ease: "power2.out"
      });

    // SECTION PORTFOLIO
    gsap.timeline({
      scrollTrigger: {
        trigger: ".projetos",
        start: "10% 85%",
        end: "60% 40%",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.3,
        markers: false,
      }
    })
      .from(".projetos-titulo", { x: -50, opacity: 0 })
      .from(".projeto-card", { y: 120, opacity: 0, scale: 0.9, duration: 0.6, stagger: 0.06 }, "<");

    //SECTION SERVICOS
    gsap.timeline({
      scrollTrigger: {
        trigger: ".servicos",
        start: "10% 85%",
        end: "80% 70%",
        toggleActions: "restart reverse restart reverse",
        scrub: 0.3,
        markers: false,
      }
    })
      .from(".servicos-titulo", { x: -100, opacity: 0 })
      .from(".list-child, .right", { y: 120, opacity: 0, duration: 0.7, scale: 0.9, stagger: 0.15 });


    // PIN SECTION - METODO FLOW


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".div-pai",
        start: "top top",
        end: "+=" + listItems.length * 60 + "%",
        pin: true,
        scrub: 0.2
      }
    });

    // First element visible, set the marker
    fill &&
      gsap.set(fill, {
        scaleY: 1 / listItems.length,
        transformOrigin: "top left"
      });


    listItems.forEach((item, i) => {
      const previousItem = listItems[i - 1];
      if (previousItem) {
        tl2.set(item, { color: "#c20c97" }, 0.5 * i)
          .to(
            slides[i],
            {
              autoAlpha: 1,
              duration: 0.3,
            },
            "<"
          )
          .set(previousItem, { color: "#eee" }, "<")
          .to(
            slides[i - 1],
            {
              autoAlpha: 0,
              duration: 0.3,
            },
            "<"
          );
      } else {
        gsap.set(item, { color: "#c20c97" });
        gsap.set(slides[i], { autoAlpha: 1 });
      }
    });

    tl2.to(
      fill,
      {
        scaleY: 1,
        transformOrigin: "top left",
        ease: "none",
        duration: tl2.duration()
      },
      0
    ).to({}, { duration: 0.3 });

    //SECTION CONTATO
    tl2.fromTo(
      ".contato",
      {
        rotateX: 90,
        scaleX: 0.5,
        opacity: 0.8,
        transformOrigin: "center center",
        transformPerspective: 3000
      },
      {
        rotateX: 0,
        scale: 1,
        opacity: 1,
        duration: 0.7
      }
    );
  });
});

