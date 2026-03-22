import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import featureMotion from "@/assets/feature-motion.png";
import featureWifi from "@/assets/feature-wifi.png";
import featureVr from "@/assets/feature-vr.png";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    image: featureMotion,
    title: "Stage Climb",
    description:
      "Craft extraordinary motion tracking experiences with AI-powered performance analysis.",
    color: "neon-pink",
  },
  {
    image: featureWifi,
    title: "Secure Links",
    description:
      "Enterprise-grade encrypted connectivity. Stay protected with quantum-safe encryption.",
    color: "neon-blue",
  },
  {
    image: featureVr,
    title: "Shadow Scene",
    description:
      "Generate breathtaking virtual reality environments with photorealistic rendering.",
    color: "neon-purple",
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0, filter: "blur(4px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            <span className="text-foreground">Loaded </span>
            <span className="gradient-neon-text">Experience,</span>
            <br />
            <span className="text-foreground">Great </span>
            <span className="neon-glow-blue text-neon-blue">Innovation</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_hsl(var(--neon-pink)/0.15)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to top, hsl(var(--background)), transparent)`,
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className={`font-display text-lg font-bold text-${feature.color} mb-2`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {feature.description}
                </p>
                <button className="mt-4 text-sm font-body text-neon-pink hover:text-neon-blue transition-colors duration-300 flex items-center gap-1">
                  Explore More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
