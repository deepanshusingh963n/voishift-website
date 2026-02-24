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

const ArchetypeVisual = ({ type, isHovered }: { type: number; isHovered: boolean }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <svg width="100%" height="100%" className="text-gold/10 group-hover:text-gold/20 transition-colors duration-700">
      {type === 0 && ( /* Strategy Pulse - CEO */
        <motion.circle
          cx="50%" cy="50%" r="40%"
          fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8"
          animate={{ rotate: 360, scale: isHovered ? [1, 1.1, 1] : 1 }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
        />
      )}
      {type === 1 && ( /* Logic Lattice - CTO */
        <motion.path
          d="M 10,10 L 90,90 M 10,90 L 90,10 M 50,0 L 50,100 M 0,50 L 100,50"
          stroke="currentColor" strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1, rotate: isHovered ? 90 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      )}
      {type === 2 && ( /* User Mesh - Design */
        <motion.path
          d="M 20,50 Q 50,20 80,50 Q 50,80 20,50 Z"
          fill="none" stroke="currentColor" strokeWidth="1"
          animate={{ d: isHovered ? "M 10,50 Q 50,0 90,50 Q 50,100 10,50 Z" : "M 20,50 Q 50,20 80,50 Q 50,80 20,50 Z" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}
      {type === 3 && ( /* Constraint Grid - Eng */
        <motion.rect
          x="20%" y="20%" width="60%" height="60%"
          fill="none" stroke="currentColor" strokeWidth="1"
          animate={{ x: isHovered ? "15%" : "20%", y: isHovered ? "15%" : "20%", width: isHovered ? "70%" : "60%", height: isHovered ? "70%" : "60%" }}
          transition={{ duration: 0.5 }}
        />
      )}
    </svg>
  </div>
);

export const LeadershipSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background blueprint elements */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
        <div className="text-[120px] font-serif font-black leading-none">V_01</div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-black text-gold leading-[1.1] tracking-tight mb-8">
            Our Leadership
          </h2>
          <p className="text-xl text-warm-gray-light font-serif italic max-w-2xl mx-auto">
            People who care more about whether systems hold up under pressure <br />
            <span className="text-black not-italic font-black">than how impressive they sound.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => {
            const isHovered = hoveredId === member.id;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${index % 2 === 0 ? "lg:mt-12" : "lg:mb-12"}`}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative bg-white rounded-[2.5rem] border border-sand p-6 h-full transition-all duration-700 group-hover:shadow-2xl group-hover:border-gold-dark/30 group-hover:bg-[#faf9f6]/30 overflow-hidden">
                  <ArchetypeVisual type={index} isHovered={isHovered} />

                  {/* Portrait Panel */}
                  <div className="relative z-10 mb-8 rounded-[2rem] overflow-hidden aspect-[4/5] border border-sand shadow-sm transition-all duration-700 group-hover:rounded-[1.5rem]">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        x: isHovered ? -5 : 0,
                        y: isHovered ? -5 : 0
                      }}
                      transition={{ duration: 0.7 }}
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Floating Info Overlay for Mobile/Non-hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-warm-gray/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 lg:hidden ${isHovered ? 'opacity-100' : 'opacity-40'}`} />
                  </div>

                  {/* Content Panel */}
                  <div className="relative z-10">
                    <div className="mb-4">
                      <h3 className="text-xl font-serif font-black text-warm-gray group-hover:text-gold transition-colors duration-500">
                        {member.name}
                      </h3>
                      <p className="text-xs font-black text-warm-gray/40 uppercase tracking-widest">
                        {member.role}
                      </p>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0,
                        marginBottom: isHovered ? 24 : 0
                      }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm font-serif italic text-warm-gray-light leading-snug pr-4 border-l border-gold-dark/20 pl-4 py-1">
                        {member.bio}
                      </p>
                    </motion.div>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-warm-gray/40 hover:text-gold transition-colors group/link"
                    >
                      <Linkedin className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform" />
                      <span>Profile_Ref</span>

                      {/* Micro marking */}
                      <div className="flex gap-1 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-1 h-1 rounded-full bg-gold-dark/30" />
                        ))}
                      </div>
                    </a>
                  </div>
                </div>

                {/* Structural line behind staggered members */}
                <div className={`absolute -z-10 bg-sand/20 hidden lg:block ${index % 2 === 0 ? 'top-[-50px] left-1/2 w-[1px] h-20' : 'bottom-[-50px] left-1/2 w-[1px] h-20'}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
