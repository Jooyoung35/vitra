 //마우스 스크롤했을때 헤더에 배경색상넣기
    window.addEventListener('scroll', function () { 
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
    header.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    }
    });







//모바일 gnb 나타나기 (메뉴버튼 클릭시 보이게)
    const hamBtn = document.querySelector('.ham-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });



//product content 나타나기
    const ani2 = gsap.timeline();
    ani2.from(".sec-title", {y: 150, autoAlpha:0}) // opacity 0 시작 > 점점 나타나게
        .from(".wrap-pro-cont", {y: 200, autoAlpha:0}) 

    ScrollTrigger.create({
        animation: ani2,
        trigger: ".product", //해당영역이 화면에 들어오면 애니메이션 작동
        start: "-=600 top", //시작점 기준보다 700px위에
        end: "+=400",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        markers: false,
    });


    //enviromental 나타나기
    const ani3 = gsap.timeline();
    ani3.from(".environ-img", {xPercent: -30, autoAlpha:0}) // opacity 0 시작 > 점점 나타나게
        .from(".environ-txt", {xPercent: 30, autoAlpha:0}) 

    ScrollTrigger.create({
        animation: ani3,
        trigger: ".environmental", //해당영역이 화면에 들어오면 애니메이션 작동
        start: "-=600 top", //시작점 기준보다 700px위에
        end: "+=400",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        markers: false,
    });



    //campus 나타나기
    const ani4 = gsap.timeline();
    ani4.from(".wrap-cam", {y: 150, autoAlpha:0}) // opacity 0 시작 > 점점 나타나게

    ScrollTrigger.create({
        animation: ani4,
        trigger: ".campus", //해당영역이 화면에 들어오면 애니메이션 작동
        start: "-=500 top", //
        end: "+=400",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        markers: false,
    });