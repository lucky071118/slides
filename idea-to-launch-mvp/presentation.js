Reveal.initialize({
  hash: true,
  controls: false,
  progress: false,
  slideNumber: false,
  transition: 'fade',
  center: true,
  width: 1280,
  height: 720,
  margin: 0.11
});

Reveal.on('slidechanged', (event) => {
  if (event.indexh === 1) {
    gsap.killTweensOf('svg *');
    
    gsap.set(['#arrow-group', '#internet-group', '#users-group', '#software-content'], { 
      opacity: 0 
    });
    
    const tl = gsap.timeline({ 
      repeat: -1,
      repeatDelay: 0
    });
    
    tl.to('svg', { duration: 1 }, 0);
    
    tl.to('#software-content', {
      duration: 0.5,
      opacity: 1
    }, 1);
    tl.to('svg', { duration: 1 }, 1);
    
    tl.to('#arrow-group', {
      duration: 0.3,
      opacity: 1
    }, 2);
    tl.to('#internet-group', {
      duration: 0.8,
      opacity: 1
    }, 2.3);
    tl.to('svg', { duration: 1 }, 2);
    
    tl.to('#users-group', {
      duration: 0.6,
      opacity: 1
    }, 3);
    tl.to('svg', { duration: 1 }, 3);
  }
});
