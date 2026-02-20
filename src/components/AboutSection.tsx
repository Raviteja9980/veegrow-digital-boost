import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Who We Are
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Veegrow Digital is a results-driven digital marketing agency built to help brands grow in the digital world with clarity, creativity, and consistency.
            </p>
            <p>
              We believe marketing is not just about visibility — it's about real growth. From building strong brand presence to generating quality leads and conversions, we focus on strategies that deliver measurable results.
            </p>
            <p>
              At Veegrow, we blend data-backed strategies, creative storytelling, and performance marketing to help businesses stand out in a crowded online space. Whether you're a startup, local business, or growing brand, we craft solutions tailored to your goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
