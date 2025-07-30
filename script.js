ScrollTrigger.matchMedia({

  // Quando a tela for maior que 780px
  "(min-width: 781px)": function() {

    gsap.registerPlugin(ScrollTrigger) 
    gsap.registerPlugin(CustomEase);

    const quadrados = gsap.utils.toArray(".titulo");

    CustomEase.create("turbo", "0.95, 0, 3, 1");
    CustomEase.create("jao", "0.4, 0.45, 0.2, 1");

    const tl = gsap.timeline();

    tl.fromTo(".hero-fundo", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
    })

    tl.fromTo(".menu", {
        y: -100,
        ease: "turbo"
    },{
        y: 0
    }, "-=0.5")

    .from(".btn-proj", {
        y: 100,
        ease: "jao"
    }, "<")

    .from(".txt-hero", {
        scale: 20,
        opacity:0,
        duration:0.8,
        ease: "power4.inOut"
    });

    // SECTION SOBRE
    function animarSobre() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".sobre",
          start: "10% 85%",
          end: "100% 0%",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      .from(".sobre-titulo", {
        x: -200,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
      })
      .from(".meio", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "<")
      .from(".direita", {
        x: 200,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      }, "<")
      .from(".esquerda", {
        x: -200,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      }, "<");
    }
    animarSobre();

    // SECTION PORTFOLIO
    function animarPort() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".projetos",
          start: "10% 85%",
                    end: "100% 0%",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      .from(".projetos-titulo", {
        x: -200,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      })
      .from(".projeto-card", {
        x: 500,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1
      }, "<");
    }
    animarPort();

    // SECTION SERVIÇOS
    function animarServ() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".servicos",
          start: "10% 85%",
                    end: "100% 0%",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      .from('.servicos-fundo', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
      .from(".servicos-titulo", {
        x: -200,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      }, "<")
      .from(".servico-card", {
        x: 500,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.6");
    }
    animarServ();

    // SECTION CONTATO
    function animarCont() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".contato",
          start: "30% 85%",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      .from(".contato-titulo", {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
      .from(".btn-contatos", {
        y: 500,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1
      }, "<")
      .from(".contato-link", {
        y: 500,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.3")
      .from(".mensagem-btn", {
        y: 500,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.3");
    }
    animarCont();
  },



  // Quando a tela for menor ou igual a 780px
  "(max-width: 780px)": function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);

    CustomEase.create("turbo", "0.95, 0, 3, 1");
    CustomEase.create("jao", "0.4, 0.45, 0.2, 1");

    // Hero
    const tl = gsap.timeline();

    tl.fromTo(".hero-fundo", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
    })

    tl.fromTo(".menu-celular", {
        y: -100,
        ease: "turbo"
    },{
        y: 0
    }, "-=0.5")

    .from(".btn-proj", {
        y: 100,
        ease: "jao"
    }, "<")

    .from(".txt-hero", {
        scale: 20,
        opacity:0,
        duration:1.5,
        ease: "power4.inOut"
    });


    function animarSobreMobile() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".sobre",
          start: "10% 85%",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      .from(".sobre-titulo", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      })
      .from(".meio", {
        scale: 0.7,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }, "<")
      .from(".direita", {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      }, "<")
      .from(".esquerda", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      }, "<");
    }
    animarSobreMobile();

    // SECTION PORTFOLIO
    function animarPortMobile() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".projetos",
          start: "10% 85%",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      .from(".projetos-titulo", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      })
      .from(".projeto-card", {
        x: 200,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1
      }, "<");
    }
    animarPortMobile();

    // SECTION SERVIÇOS
    function animarServMobile() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".servicos",
          start: "10% 85%",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      .from('.servicos-fundo', {
        scale: 0.7,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
      .from(".servicos-titulo", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      }, "<")
      .from(".servico-card", {
        x: 200,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.6");
    }
    animarServMobile();

    // SECTION CONTATO
    function animarContMobile() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".contato",
          start: "30% 85%",
          toggleActions: "restart reverse restart reverse",
          markers: false,
        }
      })
      .from(".contato-titulo", {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      })
      .from(".btn-contatos", {
        y: 200,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1
      }, "<")
      .from(".contato-link", {
        y: 200,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3")
      .from(".mensagem-btn", {
        y: 200,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1
      }, "-=0.3");
    }
    animarContMobile();
  }

});



