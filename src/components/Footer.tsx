import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/veegrow-logo.jpeg";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="VeeGrow" className="h-10 rounded" />
            <span className="text-2xl font-heading font-bold text-gradient">VeeGrow</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Home", "About", "Services", "Team", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="group flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Get In Touch
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Veegrow Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
