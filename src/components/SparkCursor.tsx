import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  el: HTMLDivElement;
}

const SparkCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    const container = containerRef.current;
    if (!cursor || !dot || !container) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });

      // Create sparkle
      createSparkle(e.clientX, e.clientY);
    };

    const createSparkle = (x: number, y: number) => {
      if (Math.random() > 0.3) return; // throttle

      const sparkle = document.createElement("div");
      const size = Math.random() * 6 + 2;
      const colors = [
        "hsl(320, 100%, 55%)",
        "hsl(195, 100%, 50%)",
        "hsl(280, 100%, 60%)",
        "hsl(180, 100%, 50%)",
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      sparkle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        box-shadow: 0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color};
        left: 0;
        top: 0;
      `;

      container.appendChild(sparkle);

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 60 + 20;

      gsap.fromTo(
        sparkle,
        { x, y, scale: 1, opacity: 1 },
        {
          x: x + Math.cos(angle) * distance,
          y: y + Math.sin(angle) * distance + 30,
          scale: 0,
          opacity: 0,
          duration: 0.8 + Math.random() * 0.5,
          ease: "power2.out",
          onComplete: () => sparkle.remove(),
        }
      );
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9998]" />
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 40,
          height: 40,
          border: "2px solid hsl(320, 100%, 55%)",
          borderRadius: "50%",
          boxShadow: "0 0 10px hsl(320, 100%, 55%, 0.5), 0 0 20px hsl(320, 100%, 55%, 0.3)",
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 8,
          height: 8,
          background: "hsl(195, 100%, 50%)",
          borderRadius: "50%",
          boxShadow: "0 0 10px hsl(195, 100%, 50%), 0 0 20px hsl(195, 100%, 50%, 0.5)",
        }}
      />
    </>
  );
};

export default SparkCursor;
