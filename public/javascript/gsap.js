gsap.registerPlugin(ScrollTrigger);

gsap.from("#logo", {
  scrollTrigger: {
    trigger: "#logo",
    toggleActions: "play pause resume pause",
  },
  duration: 3,
  opacity: 0,
  scale: 0.3,
  ease: "back",
});

gsap.from(".about-section", {
  scrollTrigger: {
    trigger: ".about-section",
    toggleActions: "play pause resume pause",
  },
  duration: 3,
  opacity: 0,
  scale: 0.3,
  ease: "back",
});

gsap.from(".newsletter-section", {
  scrollTrigger: {
    trigger: ".newsletter-section",
    toggleActions: "play pause resume pause",
  },
  duration: 3,
  opacity: 0,
  scale: 0.3,
  ease: "back",
});

let images = gsap.utils.toArray(".img");
// always set the transforms directly via GSAP to ensure accuracy and speed
gsap.set(images, { perspective: 10000, rotationY: -25 });

// loop through each image...
images.forEach((image, i) => {
  // make an Array of the elements to the left and to the right of this image
  let siblingsLeft = images.slice(i + 1),
    siblingsRight = images.slice(0, i);

  image.addEventListener("mouseenter", () => {
    // animate the "hovered" image
    gsap.to(image, {
      rotationY: 0,
      scale: 1,
      x: 0,
      duration: 0.3,
      //   overwrite: true,
    });
    // if there's anything to the left, animate it to the proper state in that direction
    if (siblingsLeft.length) {
      gsap.to(siblingsLeft, {
        x: 10,
        rotationY: -25,
        duration: 0.3,
        scale: 1,
        overwrite: true,
      });
    }
    // if there's anything to the left, animate it to the proper state in that direction
    if (siblingsRight.length) {
      gsap.to(siblingsRight, {
        x: 50,
        rotationY: -25,
        duration: 0.3,
        scale: 1,
        overwrite: true,
      });
    }
  });
  // when the mouse leaves, animate everything back to "normal".
  image.addEventListener("mouseleave", () => {
    gsap.to(images, {
      rotationY: -25,
      scale: 1,
      duration: 0.3,
      x: 0,
      overwrite: true,
    });
  });
});
