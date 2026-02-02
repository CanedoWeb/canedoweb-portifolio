
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
  const navLinks = document.querySelectorAll('.nav-menu a');
  let menuOpen = false;

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

  // Fechar menu ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      hamburguer.classList.remove('active');
      gsap.to(navMenu, {
        right: '-100%',
        duration: 0.4,
        ease: "power2.in"
      });
      document.body.style.overflow = 'auto';
    });
  });

  // Fechar menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburguer.contains(e.target) && menuOpen) {
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
  gsap.registerPlugin(ScrollTrigger, CustomEase);


  CustomEase.create("turbo", "0.95, 0, 3, 1");
  CustomEase.create("jao", "0.4, 0.45, 0.2, 1");

  ScrollTrigger.matchMedia({

    "(min-width: 781px)": function () {
      const tl = gsap.timeline();

      tl.fromTo(".hero-fundo", { opacity: 0 }, { opacity: 1, duration: 0.8 })
        .from(".heroH1", { y: -400, scale: 10, opacity: 0, duration: 1, ease: "power4.inOut" })
        .from(".heroP, .hero-btn", { opacity: 0, duration: 1, ease: "power4.inOut" }, "1");

      // SECTION SOBRE
      gsap.timeline({
        scrollTrigger: {
          trigger: ".sobre",
          start: "0% 90%",
          end: "100% 60%",
          toggleActions: "restart reverse restart reverse",
          scrub: 1,
          markers: false,
        }
      })
        .from(".sobre-titulo", { x: -200, opacity: 0 });

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
        .from(".projetos-titulo", { x: -100, opacity: 0 })
        .from(".projeto-card", { y: 300, opacity: 0, scale: 0.5, stagger: 0.1 }, "<");
        
        //SECTION SERVICOS
        gsap.timeline({
          scrollTrigger: {
            trigger: ".servicos",
            start: "10% 85%",
            end: "60% 70%",
            toggleActions: "restart reverse restart reverse",
            scrub: 1,
            markers: false,
          }
        })
          .from(".servicos-titulo", { x: -100, opacity: 0 })
        
      //SECTION CONTATO
      gsap.timeline({
        scrollTrigger: {
          trigger: ".div-pai",
          start: "top top",
          end: "+=500",
          scrub: 0.5,
          pin: true,
          markers: false,
        }
      })
      .fromTo(
        ".contato",
        {
          rotateX: 90,
            scaleX: 0.5,
            opacity: 0,
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

    },





    "(max-width: 780px)": function () {
      const tl = gsap.timeline();

      tl.fromTo(".hero-fundo", { opacity: 0 }, { opacity: 1, duration: 1 })
        .fromTo(".menu-celular", { y: -100, ease: "turbo" }, { y: 0 }, "-=0.5")
        .from(".txt-hero", { scale: 20, opacity: 0, duration: 0.8, ease: "power4.inOut" });

      // SECTION SOBRE
      gsap.timeline({
        scrollTrigger: {
          trigger: ".sobre",
          start: "10% 85%",
          scrub: 1,
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
        .from(".sobre-titulo", { x: -100, opacity: 0, duration: 0.8, ease: "power4.out" })

      // SECTION PORTFOLIO
      gsap.timeline({
        scrollTrigger: {
          trigger: ".projetos",
          start: "10% 85%",
          scrub: 1,
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
        .from(".projetos-titulo", { x: -100, opacity: 0, duration: 0.8, ease: "power4.out" })
        .from(".projeto-card", { x: 200, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }, "<");

      // SECTION SERVIÇOS
      gsap.timeline({
        scrollTrigger: {
          trigger: ".servicos",
          start: "10% 85%",
          scrub: 1,
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
        .from(".servicos-titulo", { x: -100, opacity: 0, duration: 0.8, ease: "power4.out" });

      // SECTION CONTATO
      gsap.timeline({
        scrollTrigger: {
          trigger: ".contato",
          start: "30% 85%",
          scrub: 1,
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      });
    }

  });

})
