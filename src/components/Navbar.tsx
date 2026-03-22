import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Zap } from "lucide-react";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background: "hsl(230, 25%, 5%, 0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid hsl(230, 15%, 18%, 0.5)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-7 h-7 text-neon-pink" />
          <span className="font-display text-xl font-bold gradient-neon-text">
            SYNTH
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wider uppercase">
          {["Features", "Products", "Community", "Digital Store"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-muted-foreground hover:text-neon-blue transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-blue group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
            Sign In
          </button>
          <button className="px-5 py-2 rounded-full text-sm font-semibold font-body gradient-neon neon-glow-pink transition-transform duration-200 active:scale-95">
            Explore Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
