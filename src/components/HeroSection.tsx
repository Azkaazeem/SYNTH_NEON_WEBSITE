import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImage from "@/assets/hero-headphones.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          imageRef.current,
          { scale: 0.8, opacity: 0, rotate: -10 },
          { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: "power3.out" },
          "-=1"
        );

      // Floating animation for hero image
      gsap.to(imageRef.current, {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Rotating orb
      gsap.to(orbRef.current, {
        rotate: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden particle-bg"
    >
      {/* Animated orb background */}
      <div
        ref={orbRef}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "conic-gradient(from 0deg, hsl(320,100%,55%), hsl(280,100%,60%), hsl(195,100%,50%), hsl(320,100%,55%))",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="relative z-10">
          <h1
            ref={titleRef}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="gradient-neon-text">Cybernetic</span>
            <br />
            <span className="text-foreground">Streaming &</span>
            <br />
            <span className="neon-glow-blue text-neon-blue">Creative Freedom</span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 text-muted-foreground text-lg max-w-md leading-relaxed font-body"
          >
            Step into the digital revolution with AI-driven audio, immersive
            experiences and next-level creative tools.
          </p>

          <div ref={ctaRef} className="mt-8 flex items-center gap-4 flex-wrap">
            <button className="px-8 py-3 rounded-full font-semibold font-body gradient-neon neon-glow-pink transition-all duration-300 hover:scale-105 active:scale-95">
              Start Exploring
            </button>
            <button className="px-8 py-3 rounded-full font-semibold font-body border border-neon-blue/40 text-neon-blue hover:border-neon-blue hover:shadow-[0_0_20px_hsl(195,100%,50%,0.3)] transition-all duration-300 active:scale-95">
              Learn More
            </button>
          </div>

          {/* Carousel dots */}
          <div className="mt-12 flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === 2
                    ? "bg-neon-blue neon-border-blue scale-110"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>

        <div ref={imageRef} className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src={heroImage}
              alt="Neon headphones"
              className="w-full max-w-lg rounded-2xl"
              style={{
                filter: "drop-shadow(0 0 40px hsl(320, 100%, 55%, 0.3)) drop-shadow(0 0 80px hsl(195, 100%, 50%, 0.2))",
              }}
            />
            {/* Glow ring around image */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none animate-pulse-neon"
              style={{
                boxShadow: "inset 0 0 60px hsl(280, 100%, 60%, 0.1)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(320,100%,55%), hsl(195,100%,50%), transparent)",
        }}
      />
    </section>
  );
};

export default HeroSection;
