
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, CustomEase);

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Controla loader e scroll
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
    }
    setTimeout(() => window.scrollTo(0, 0), 50);
  }, { once: true });

  CustomEase.create("turbo", "0.95, 0, 3, 1");
  CustomEase.create("jao", "0.4, 0.45, 0.2, 1");

  ScrollTrigger.matchMedia({

    "(min-width: 781px)": function () {
      const tl = gsap.timeline();

      tl.fromTo(".hero-fundo", { opacity: 0 }, { opacity: 1, duration: 0.6 })
        .fromTo(".menu", { y: -100 }, { y: 0, duration: 0.6 }, "-=0.3")
        .from(".txt-hero", { scale: 2, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.3");

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

      // SECTION CONTATO
      gsap.timeline({
        scrollTrigger: {
          trigger: ".div-pai",
          start: "top top",
          end: "+=2000",
          scrub: 0.5,
          pin: true,
          markers: false,
        }
      })
        .to(".contato", { rotateX: 0, opacity: 1, scale: 1, top: 0, duration: 1 });
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
        .from('.servicos-fundo', { scale: 0.7, opacity: 0, duration: 1, ease: "power2.out" })
        .from(".servicos-titulo", { x: -100, opacity: 0, duration: 0.8, ease: "power4.out" }, "<")
        .from(".servico-card", { x: 200, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }, "-=0.6");

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
