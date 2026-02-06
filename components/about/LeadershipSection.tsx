import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/",
    bio: "With 15+ years in enterprise AI and operations, Sarah leads VoiShift's mission to make voice AI systems that behave reliably under real-world pressure. Previously led automation initiatives at Fortune 500 companies.",
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/",
    bio: "Michael architects VoiShift's core systems with a focus on reliability and traceability. His background spans distributed systems, ML infrastructure, and building platforms that scale without breaking trust.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "VP, Product & Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/",
    bio: "Elena shapes how teams interact with VoiShift's tools, ensuring complexity stays manageable. She brings 12 years of experience designing enterprise products that people actually want to use.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "VP, Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/",
    bio: "David leads the engineering team building voice AI systems that know when to stop. His expertise in conversation systems and safety-critical software informs VoiShift's technical approach.",
  },
];

export const LeadershipSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-cream-dark">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Leadership
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet the team behind <span className="text-primary">VoiShift</span>
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            People who care more about whether systems hold up under pressure
            than how impressive they sound.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {teamMembers.map((member, index) => {
            const isHovered = hoveredId === member.id;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <motion.div
                  className="bg-card rounded-xl border border-border shadow-soft overflow-hidden flex flex-col transition-colors duration-300 hover:shadow-medium hover:border-primary/20"
                  animate={{
                    height: isHovered ? "auto" : "auto"
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {/* Header with name, role, and LinkedIn */}
                  <div className="p-5 pb-0">
                    <h3 className="text-lg font-bold text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-charcoal-light mb-3">
                      {member.role}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-md transition-colors duration-200"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Bio - revealed on hover with height animation */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-charcoal-light leading-relaxed px-5 py-4">
                      {member.bio}
                    </p>
                  </motion.div>

                  {/* Image at bottom */}
                  <div className="relative mt-auto">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
