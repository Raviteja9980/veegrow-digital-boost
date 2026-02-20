import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
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
    <section id="team" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Team</span>
            <span className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold">
            Meet The <span className="text-gradient">Crew</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-5 rounded-2xl overflow-hidden aspect-[3/4]">
                {/* Gradient border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 via-transparent to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-lg font-heading font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
