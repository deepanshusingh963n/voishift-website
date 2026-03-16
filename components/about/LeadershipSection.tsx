import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Neil Roy",
    role: "VP Sales",
    image: "/team/Neil.png",
    linkedin: "https://www.linkedin.com/in/klyrr/",
    bio: "Heading VoiShift’s global service delivery, managing strategic client partnerships to transform high-stakes voice automation from a concept into a reliable operational service.",
  },
  {
    id: 2,
    name: "Vivek Rungta",
    role: "Principal Consultant",
    image: "/team/Vivek.png",
    linkedin: "https://www.linkedin.com/in/vivekrungta/",
    bio: "Leading the engineering of bespoke technical solutions, ensuring our service delivery translates complex AI capabilities into high-pressure operational reality for every client.",
  },
  {
    id: 3,
    name: "Pankaj T.",
    role: "Full Stack Developer",
    image: "/team/Pankaj.png",
    linkedin: "https://www.linkedin.com/in/iampankajt/",
    bio: "Crafting custom-built interfaces and transparency tools that allow clients to monitor and manage their bespoke AI voice services with precision.",
  },
  {
    id: 4,
    name: "Varsha Goel",
    role: "Business Operations",
    image: "/team/Varsha Goel.png",
    linkedin: "https://www.linkedin.com/in/varsha-goel-47635bb1/",
    bio: "Directing VoiShift’s service operations, ensuring that every client engagement is backed by seamless execution, quality assurance, and scalable delivery workflows.",
  },
  {
    id: 5,
    name: "Harshveer Singh",
    role: "AI Engineer",
    image: "/team/Harshveer.png",
    linkedin: "https://www.linkedin.com/in/harshveer-singh-1a6912205/",
    bio: "Adapting and fine-tuning AI logic lattices to meet specific client needs, ensuring our delivered services remain high-precision across diverse real-world environments.",
  },
  {
    id: 6,
    name: "Deepanshu Singh",
    role: "AI Engineer",
    image: "/team/Deepanshu.png",
    linkedin: "https://www.linkedin.com/in/deepanshu-singh-ab0249148/",
    bio: "Managing the integrity and ethical alignment of our AI service deployments, ensuring every delivered voice interaction meets rigorous enterprise standards.",
  },
  {
    id: 7,
    name: "Anubhav Gautam",
    role: "Marketing & Growth",
    image: "/team/Anubhav.png",
    linkedin: "https://www.linkedin.com/in/anubhav--gautam/",
    bio: "Leading client growth and strategy, helping enterprise partners navigate the move to automated voice services with clear, value-driven implementation roadmaps.",
  },
  {
    id: 8,
    name: "Pintu Kumar",
    role: "Full Stack Developer",
    image: "/team/Pintu Kumar.png",
    linkedin: "https://www.linkedin.com/in/pintu-kumar-627128121/",
    bio: "Specializing in the deployment of robust, cross-platform technical architectures that power VoiShift’s bespoke service implementations for modern enterprises.",
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
    <section id="leadership" className="py-24 bg-cream relative overflow-hidden">
      {/* Background blueprint elements */}

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
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
                <div className="relative bg-white rounded-[2.5rem] border border-sand p-6 transition-all duration-700 group-hover:shadow-2xl group-hover:border-gold-dark/30 group-hover:bg-[#faf9f6]/30 overflow-hidden">
                  <ArchetypeVisual type={index % 4} isHovered={isHovered} />

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
