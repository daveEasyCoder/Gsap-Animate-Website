gsap.registerPlugin(ScrollTrigger);

//lenis smooth scrolling
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


let t1 = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "top 100%",
    end: "50% 50%",
    scrub: true,
}})

t1.to(".pepsi", {
    top: "86%",
    left: "-34%",

},'first');
t1.to(".pepsi-cap", {
    top: "134%",
    left: "14%",

},'first');
t1.to(".leaf2", {
    top: "100%",
    left: "82%",
    rotation:230

},'first');


let t2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "top 100%",
    end: "50% 70%",
    scrub: true,
}})

t2.from(".pepsi-image",{
    top: "3%",
    left: "-4%",
    rotation: -50,
    scrub: true,
},'second')
t2.from(".pepsi-1",{
    top: "3%",
    left: "-4%",
    rotation: -50,
    scrub: true,
},'second')


t2.from(".sprite-image",{
    top: "3%",
    left: "94%",
    rotation: 50,
    scrub: true,
},'second')
t2.from(".s-pepsi",{
    top: "3%",
    left: "94%",
    rotation: 50,
    scrub: true,
},'second')





t2.to(".pepsi",{
    width:"14%",
    top: "187%",
    left: "0%",
    scrub: true,
},'second')
t2.to(".pepsi-cap",{
    width:"18%",
    top: "210%",
    left: "41%",
    scrub: true,
},'second')



let t3 = gsap.timeline({scrollTrigger:{
    trigger: ".four",
    start: "top 100%",
    end: "50% 70%",
    scrub: true,
}})
t3.to(".pepsi",{
    width:"16%",
    top: "298%",
    left: "0%",
    scrub: true,
},'third')


