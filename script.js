const linda = document.querySelectorAll('#linda path');

for (let i = 0; i < linda.length; i++) {
  console.log(`letter ${i} is ${linda[i].getTotalLength()}`);
}

let tl = gsap.timeline();
let tl2 = gsap.timeline({ delay: 6.1 });
let tl3 = gsap.timeline({ delay: 13.3 });
let tl4 = gsap.timeline({ delay: 15 });

tl.from('#l', { duration: 1.5, x: -200, ease: 'elastic' })
  .from('#m', { duration: 0.5, x: -200 })
  .from('#i', { duration: 1, y: -200, ease: 'elastic' })
  .from('#n', { duration: 1, y: 150, ease: 'bounce' })
  .from('#h', { duration: 1.2, ease: 'elastic' })
  .from('#o', { rotation: 360, x: 100, duration: 5, ease: 'elastic' });

tl2
  .to('#o', { fill: 'mediumspringgreen' })
  .to('#h', { fill: 'white' })
  .to('#a', { fill: 'rebeccapurple' })
  .to('#n', { fill: 'hotpink' })
  .to('#i', { fill: 'deeppink' })
  .to('#m', { fill: 'mediumpurple' })
  .to('#e', { fill: 'lawngreen' })
  .to('#l', { fill: 'dodgerblue' })

  .to('.letter', {
    y: 45,
    duration: 1,
    stagger: {
      from: 'left',
      each: 0.1,
      repeat: 2,
      yoyo: true,
    },
  });

tl3
  .to('#l', { fill: 'white', stroke: 'black', duration: 0.2 })
  .to('#e', { fill: 'white', stroke: 'black', duration: 0.2 })
  .to('#m', { fill: 'white', stroke: 'black', duration: 0.2 })
  .to('#i', { fill: 'white', stroke: 'black', duration: 0.2 })
  .to('#n', { fill: 'white', stroke: 'black', duration: 0.2 })
  .to('#a', { fill: 'white', stroke: 'black', duration: 0.2 })
  .to('#h', { fill: 'white', stroke: 'black', duration: 0.2 })
  .to('#o', { fill: 'white', stroke: 'black', duration: 0.2 });

tl4
  .to('#l', { y: -50, stroke: 'deeppink', duration: 0.2 })
  .to('#e', { y: -50, stroke: 'deeppink', duration: 0.2 })
  .to('#m', { y: -50, stroke: 'deeppink', duration: 0.2 })
  .to('#i', { y: -50, stroke: 'deeppink', duration: 0.2 })
  .to('#n', { y: -50, stroke: 'deeppink', duration: 0.2 })
  .to('#a', { y: -50, stroke: 'deeppink', duration: 0.2 })
  .to('#h', { y: -50, stroke: 'deeppink', duration: 0.2 })
  .to('#o', { y: -50, stroke: 'deeppink', duration: 0.2 })
  .to('#o', { y: 25, fill: 'mediumpurple', duration: 0.1 })
  .to('#h', { y: 25, fill: 'mediumpurple', duration: 0.1 })
  .to('#a', { y: 25, fill: 'mediumpurple', duration: 0.1 })
  .to('#n', { y: 25, fill: 'mediumpurple', duration: 0.1 })
  .to('#i', { y: 25, fill: 'mediumpurple', duration: 0.1 })
  .to('#m', { y: 25, fill: 'mediumpurple', duration: 0.1 })
  .to('#e', { y: 25, fill: 'mediumpurple', duration: 0.1 })
  .to('#l', { y: 25, fill: 'mediumpurple', duration: 0.1 });
