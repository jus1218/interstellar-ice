import confetti from "canvas-confetti";

export function throwConfetti() {
  confetti({
    colors: ["#f8b133"],
    particleCount: 100,
    spread: 70,
    angle: 60,
    origin: { x: 0, y: 1 },
  });
  confetti({
    colors: ["#f8b133"],
    particleCount: 100,
    spread: 70,
    angle: 120,
    origin: { x: 1, y: 1 },
  });
 
}
