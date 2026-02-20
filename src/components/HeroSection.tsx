import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import abstract3d from "@/assets/abstract-3d.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden bg-background"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[60%] h-full bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[60%] bg-gradient-to-tl from-accent/5 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left column - Bold typography */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-primary" />
                <span className="text-lg md:text-xl font-heading text-muted-foreground tracking-wide">
                  Expert-Driven
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold leading-[0.9] tracking-tight mb-8">
                <span className="text-foreground">DIGITAL</span>
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-foreground">SOLUTIONS</span>
                  <span className="absolute bottom-1 left-0 w-full h-[35%] bg-primary/20 -z-0" />
                </span>
                <span className="text-primary">.</span>
              </h1>
            </motion.div>
          </div>

          {/* Right column - Description + CTA */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                We help brands scale with clarity, creativity, and consistency. From strategy to execution, Veegrow Digital delivers real growth tailored to your business goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start"
            >
              <a
                href="#contact"
                className="group relative w-36 h-36 md:w-40 md:h-40 rounded-full bg-primary flex flex-col items-center justify-center text-primary-foreground font-heading font-semibold text-sm md:text-base hover:scale-105 transition-transform duration-300 shadow-glow"
              >
                <span>Let's Talk</span>
                <span>With Us</span>
                <ArrowUpRight className="w-5 h-5 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating 3D abstract graphic */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 lg:left-[45%] lg:top-[15%] w-40 h-40 md:w-56 md:h-56 z-20 pointer-events-none"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={abstract3d}
            alt=""
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 md:mt-24 pt-8 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "5+", label: "Team Members" },
            { value: "100%", label: "Growth Focused" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
