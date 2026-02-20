import { motion } from "framer-motion";
import varunImg from "@/assets/varun.jpeg";
import somuImg from "@/assets/somu.jpeg";
import shivakumarImg from "@/assets/shivakumar.jpeg";
import sharathImg from "@/assets/sharath.jpeg";
import ravitejaImg from "@/assets/raviteja.png";

const team = [
  { name: "Varun", role: "Founder & CEO", image: varunImg },
  { name: "Somu", role: "Creative Director", image: somuImg },
  { name: "Shivakumar", role: "Marketing Strategist", image: shivakumarImg },
  { name: "Sharath S", role: "Content Lead", image: sharathImg },
  { name: "Raviteja R", role: "Full Stack Developer", image: ravitejaImg },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Meet The Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-4 rounded-xl overflow-hidden aspect-square border-2 border-border group-hover:border-primary/50 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-primary">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
