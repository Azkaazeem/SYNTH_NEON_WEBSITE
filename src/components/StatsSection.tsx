import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Wifi, Shield, Cpu, Headphones, Download, Cloud,
  Monitor, Smartphone, Camera, Gem, Music, Tv
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Functionality", items: ["Audio Streams", "Cloud Sync", "Custom EQ"] },
  { label: "Trust", items: ["Secure Auth", "Data Safety", "Compliance"] },
  { label: "Production", items: ["Studio Grade", "Low Latency", "Hi-Res Output"] },
];

const icons = [Wifi, Shield, Cpu, Headphones, Download, Cloud, Monitor, Smartphone, Camera, Gem, Music, Tv];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
      });

      const cols = gridRef.current?.children;
      if (cols) {
        gsap.fromTo(cols, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 75%" },
        });
      }

      const iconEls = iconsRef.current?.children;
      if (iconEls) {
        gsap.fromTo(iconEls, { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, stagger: 0.05, duration: 0.5, ease: "back.out(2)",
          scrollTrigger: { trigger: iconsRef.current, start: "top 80%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="font-display text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="gradient-neon-text">Strong</span>{" "}
          <span className="text-foreground">Design</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          <div ref={gridRef} className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg gradient-neon flex items-center justify-center mb-4">
                  {i === 0 ? <Cpu className="w-5 h-5" /> : i === 1 ? <Shield className="w-5 h-5" /> : <Headphones className="w-5 h-5" />}
                </div>
                <h3 className="font-display text-sm font-bold text-foreground mb-3">{stat.label}</h3>
                <ul className="space-y-2">
                  {stat.items.map((item, j) => (
                    <li key={j} className="text-muted-foreground text-sm font-body">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div ref={iconsRef} className="grid grid-cols-4 gap-4">
            {icons.map((Icon, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group hover:neon-border-pink transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-neon-pink transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
