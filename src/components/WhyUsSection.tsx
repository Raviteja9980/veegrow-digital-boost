import { motion } from "framer-motion";

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              What Makes Us Different
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>Every brand has a story. Every audience behaves differently.</p>
              <p>
                That's why we craft custom growth strategies tailored to your goals, market, and budget.
              </p>
              <p className="font-medium text-foreground">We blend:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <span>Creativity that captures attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <span>Data that drives decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <span>Performance that delivers ROI</span>
                </li>
              </ul>
              <p className="font-semibold text-foreground pt-2">
                No shortcuts. No fake numbers. Just honest growth.
              </p>
            </div>
          </motion.div>

          {/* Who We Work With */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Who We Work With
            </h2>
            <div className="space-y-4">
              {[
                { emoji: "🚀", text: "Startups ready to scale" },
                { emoji: "🏪", text: "Local businesses going digital" },
                { emoji: "📈", text: "Brands looking for serious growth" },
                { emoji: "💡", text: "Creators & entrepreneurs building presence" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-lg text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
