export const menuSlide = {
  initial: { x: "100vw" }, // Start position off-screen to the right
  enter: { x: "0", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }, // Slide in to 0 (fully on-screen)
  exit: {
    x: "100vw", // Slide back off-screen to the right
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80 }, // Initial state for elements sliding in
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};


export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } }, // Scale up to full size
  closed: { scale: 0, transition: { duration: 0.4 } }, // Scale down to 0 (disappears)
};
