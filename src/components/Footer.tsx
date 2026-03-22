import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border/30">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 text-neon-pink" />
        <span className="font-display text-sm font-bold gradient-neon-text">SYNTH</span>
      </div>
      <p className="text-muted-foreground text-xs font-body">
        © 2026 Synth Corporation. All rights reserved.
      </p>
      <div className="flex gap-6 text-xs font-body text-muted-foreground">
        <a href="#" className="hover:text-neon-blue transition-colors">Privacy</a>
        <a href="#" className="hover:text-neon-blue transition-colors">Terms</a>
        <a href="#" className="hover:text-neon-blue transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
