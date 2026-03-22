import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import showcaseShoe from "@/assets/showcase-shoe.png";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax image
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0, rotate: -5 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Continuous subtle rotation
      gsap.to(imageRef.current, {
        rotate: 5,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.fromTo(
        textRef.current,
        { x: 100, opacity: 0, filter: "blur(4px)" },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(320,100%,55%), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">
          <img
            ref={imageRef}
            src={showcaseShoe}
            alt="Neon shoe"
            className="w-full max-w-md"
            style={{
              filter: "drop-shadow(0 0 40px hsl(320,100%,55%,0.4)) drop-shadow(0 0 80px hsl(195,100%,50%,0.2))",
            }}
          />
        </div>

        <div ref={textRef}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-foreground">Quality </span>
            <span className="gradient-neon-text">Photonics</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body leading-relaxed mb-8 max-w-md">
            Every detail is crafted with precision. Our quantum rendering engine
            creates photorealistic outputs that push the boundaries of digital
            reality. Experience truly immersive visuals.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-full font-semibold font-body gradient-neon neon-glow-pink transition-all duration-300 hover:scale-105 active:scale-95">
              Discover
            </button>
            <button className="px-8 py-3 rounded-full font-semibold font-body border border-muted-foreground/30 text-foreground hover:border-neon-blue transition-all duration-300 active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
