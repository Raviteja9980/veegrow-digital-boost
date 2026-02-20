import { motion } from "framer-motion";
import { TrendingUp, Eye, Target } from "lucide-react";

const highlights = [
  { icon: Eye, title: "Clarity", desc: "Crystal-clear strategies that cut through the noise." },
  { icon: TrendingUp, title: "Growth", desc: "Measurable results that move the needle forward." },
  { icon: Target, title: "Precision", desc: "Tailored solutions for your unique goals." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-widest">About Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
              We Build Brands
              <br />
              <span className="text-gradient">That Grow</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Veegrow Digital is a results-driven digital marketing agency built to help brands grow in the digital world with clarity, creativity, and consistency.
              </p>
              <p>
                We believe marketing is not just about visibility — it's about real growth. From building strong brand presence to generating quality leads and conversions, we focus on strategies that deliver measurable results.
              </p>
              <p>
                At Veegrow, we blend data-backed strategies, creative storytelling, and performance marketing to help businesses stand out in a crowded online space.
              </p>
            </div>
          </motion.div>

          {/* Right - Feature cards */}
          <div className="space-y-5">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex items-start gap-5 p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-glow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
