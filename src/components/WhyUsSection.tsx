import { motion } from "framer-motion";
import { Sparkles, BarChart3, Target, Rocket, Store, TrendingUp, Lightbulb } from "lucide-react";

const blendItems = [
  { icon: Sparkles, emoji: "🎨", text: "Creativity that captures attention" },
  { icon: BarChart3, emoji: "📊", text: "Data that drives decisions" },
  { icon: Target, emoji: "🎯", text: "Performance that delivers ROI" },
];

const clientTypes = [
  { icon: Rocket, emoji: "🚀", text: "Startups ready to scale" },
  { icon: Store, emoji: "🏪", text: "Local businesses going digital" },
  { icon: TrendingUp, emoji: "📈", text: "Brands looking for serious growth" },
  { icon: Lightbulb, emoji: "💡", text: "Creators & entrepreneurs building presence" },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>Every brand has a story. Every audience behaves differently.</p>
              <p>That's why we craft custom growth strategies tailored to your goals, market, and budget.</p>
            </div>

            <div className="space-y-4">
              {blendItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-xl font-heading font-bold text-foreground"
            >
              No shortcuts. No fake numbers.{" "}
              <span className="text-gradient">Just honest growth.</span>
            </motion.p>
          </motion.div>

          {/* Who We Work With */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Clients</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              Who We <span className="text-gradient">Work With</span>
            </h2>

            <div className="space-y-4">
              {clientTypes.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/15 group-hover:to-accent/15 rounded-xl blur transition-all duration-500" />
                  <div className="relative flex items-center gap-5 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-lg text-foreground font-semibold">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
