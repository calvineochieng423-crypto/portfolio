import Lenis from "@studio-freight/lenis";

export function smoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // natural easing
  });

  let rafId: number;

  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  // Start the animation loop
  rafId = requestAnimationFrame(raf);

  // Return the Lenis instance and cleanup function
  return {
    lenis,
    destroy: () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenis.destroy();
    },
  };
}
