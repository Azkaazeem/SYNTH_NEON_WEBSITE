import { useEffect, useRef } from "react";
import gsap from "gsap";

const FloatingOrbs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const orbs = container.children;
    Array.from(orbs).forEach((orb, i) => {
      gsap.to(orb, {
        y: `random(-80, 80)`,
        x: `random(-40, 40)`,
        duration: `random(4, 8)`,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.5,
      });

      gsap.to(orb, {
        rotate: 360,
        duration: 15 + i * 5,
        ease: "none",
        repeat: -1,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute top-[10%] right-[15%] w-4 h-4 rounded-full"
        style={{ background: "hsl(320,100%,55%)", boxShadow: "0 0 20px hsl(320,100%,55%,0.6)", opacity: 0.6 }}
      />
      <div
        className="absolute top-[30%] left-[10%] w-3 h-3 rounded-full"
        style={{ background: "hsl(195,100%,50%)", boxShadow: "0 0 15px hsl(195,100%,50%,0.6)", opacity: 0.5 }}
      />
      <div
        className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full"
        style={{ background: "hsl(280,100%,60%)", boxShadow: "0 0 15px hsl(280,100%,60%,0.6)", opacity: 0.4 }}
      />
      <div
        className="absolute top-[80%] left-[30%] w-3 h-3 rounded-full"
        style={{ background: "hsl(180,100%,50%)", boxShadow: "0 0 15px hsl(180,100%,50%,0.6)", opacity: 0.5 }}
      />
      <div
        className="absolute top-[45%] right-[5%] w-2 h-2 rounded-full"
        style={{ background: "hsl(320,100%,55%)", boxShadow: "0 0 10px hsl(320,100%,55%,0.5)", opacity: 0.3 }}
      />
    </div>
  );
};

export default FloatingOrbs;
