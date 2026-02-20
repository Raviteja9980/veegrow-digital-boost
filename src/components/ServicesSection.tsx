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
  { icon: Share2, title: "Social Media Handling", description: "Strategic management of your social presence across all platforms." },
  { icon: Palette, title: "Graphic Design", description: "Eye-catching visuals that communicate your brand story." },
  { icon: Film, title: "Video Editing", description: "Professional video editing that captivates your audience." },
  { icon: Camera, title: "Photo & Video Shoots", description: "High-quality production for your brand content needs." },
  { icon: Home, title: "Real Estate Walkthrough Videos", description: "Immersive property tours that drive buyer interest." },
  { icon: PenTool, title: "Content Creation", description: "Compelling content that engages and converts." },
  { icon: Hexagon, title: "Logo & Brand Identity", description: "Distinctive brand identities that leave lasting impressions." },
  { icon: Globe, title: "Website Development", description: "Modern, responsive websites built for performance." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            What We Deliver at Veegrow Digital
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
