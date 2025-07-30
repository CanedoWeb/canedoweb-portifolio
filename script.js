
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
    duration:1.5,
    ease: "power4.inOut"
});


//SECTION SOBRE

function animarSobre() {

  gsap.timeline({
    scrollTrigger: {
      trigger: ".sobre",
      start: "20% 85%",
      toggleActions: "restart reverse restart reverse",
      markers: false,
    }
  })
  .from(".sobre-titulo", {
    x: -200,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out"
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

// Chamada da função
animarSobre();


//SECTION PORTFOLIO

function animarPort() {

  gsap.timeline({
    scrollTrigger: {
      trigger: ".projetos",
      start: "15% 85%",
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

animarPort()


//SERVICOS

function animarServ() {

  gsap.timeline({
    scrollTrigger: {
      trigger: ".servicos",
      start: "12% 85%",
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

animarServ()


//SECTION CONTATO


//SECTION PORTFOLIO

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

animarCont()







