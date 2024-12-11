gsap.registerPlugin(ScrollTrigger)

const firstTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one", // 觸發動畫的元素
    start: "top top", // 滾動到元素頂部與視窗中心對齊時觸發
    scrub: true, // 滾動同步動畫
    pin: true
  }
})

// YOUR CODE HERE
firstTimeline.from(".line-one span", {
  y: '100vh',
  duration: 1,
  stagger: 0.2,
  opacity: 0,
})
.to('.container', {
  backgroundColor: 'yellow',
  duration: 1,
})
.from(".sun", {
  x: '100px',
  duration: 1,
  opacity: 0,
}).to('.line-one span', {
  x: '100vw',
  duration: 1
}).to('.container', {
  backgroundColor: 'white',
  duration: 1,
}, '<')
  .to('.sun', {
    x: '-100vw',
    duration: 1
}, '<')


const secondTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two", // 觸發動畫的元素
    start: "top top", // 滾動到元素頂部與視窗中心對齊時觸發
    scrub: true, // 滾動同步動畫
    pin: true,
  }
})

secondTimeline.from(".line-two span:first-child", {
  scale: 18,
  opacity: 0,
  x: '-100vw'
}).from(".line-two span:last-child", {
  scale: 18,
  opacity: 0,
  x: '100vw'
}, '<')
  .to('.line-two span', {
  y: '-20px',
  stagger: 0.2,
})

const thirdTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three", // 觸發動畫的元素
    start: "top top", // 滾動到元素頂部與視窗中心對齊時觸發
    scrub: true, // 滾動同步動畫
    pin: true,
    markers: true
  }
})

thirdTimeline.from(".line-three span", {
  y: '100vh',
  duration: 1,
  stagger: 0.2,
  opacity: 0,
}).to(".line-three", {
  backgroundPositionX: '0',
  color: 'white'
}).from(".line-three .moon", {
  x: '300px'
}, '<')