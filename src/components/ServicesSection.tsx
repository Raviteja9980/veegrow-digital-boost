import { motion } from "framer-motion";
import {
  Share2,
  Palette,
  Film,
  Camera,
  Home,
  PenTool,
  Hexagon,
  Globe,
} from "lucide-react";

const services = [
  { icon: Share2, title: "Social Media Handling", description: "Strategic management of your social presence across all platforms.", color: "from-primary to-accent" },
  { icon: Palette, title: "Graphic Design", description: "Eye-catching visuals that communicate your brand story.", color: "from-primary to-accent" },
  { icon: Film, title: "Video Editing", description: "Professional video editing that captivates your audience.", color: "from-primary to-accent" },
  { icon: Camera, title: "Photo & Video Shoots", description: "High-quality production for your brand content needs.", color: "from-primary to-accent" },
  { icon: Home, title: "Real Estate Walkthrough Videos", description: "Immersive property tours that drive buyer interest.", color: "from-primary to-accent" },
  { icon: PenTool, title: "Content Creation", description: "Compelling content that engages and converts.", color: "from-primary to-accent" },
  { icon: Hexagon, title: "Logo & Brand Identity", description: "Distinctive brand identities that leave lasting impressions.", color: "from-primary to-accent" },
  { icon: Globe, title: "Website Development", description: "Modern, responsive websites built for performance.", color: "from-primary to-accent" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Services</span>
            <span className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold">
            What We <span className="text-gradient">Deliver</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:to-accent/20 rounded-2xl blur transition-all duration-500" />
              
              <div className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.description}</p>
                
                {/* Bottom accent line */}
                <div className="mt-5 h-[2px] w-0 group-hover:w-full bg-gradient-primary transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
