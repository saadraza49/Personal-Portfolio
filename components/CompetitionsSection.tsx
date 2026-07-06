"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const competitions = [
  {
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg" alt="Harvard" className="h-8 w-8 object-contain drop-shadow-md" />,
    title: "CS50x Puzzle Day 2026",
    status: "Harvard University",
    description: "Participated in and solved complex logic puzzles in Harvard's global event.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-8 w-8 object-contain">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.333.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
      </svg>
    ),
    title: "Google AI Professional Certificate",
    status: "Certified",
    description: "Comprehensive training in artificial intelligence concepts and applications.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-8 w-8 object-contain">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.333.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
      </svg>
    ),
    title: "Google Prompting Essentials",
    status: "Certified",
    description: "Mastered effective AI prompting techniques for optimal results.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-8 w-8 object-contain">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.333.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
      </svg>
    ),
    title: "Build With AI – AI Hackathon",
    status: "Google Developer Group",
    description: "Competed and built AI-powered solutions at GDG FAST NUCES FSD.",
  },
  {
    icon: <img src="https://cdn.simpleicons.org/cisco/white" alt="Cisco" className="h-8 w-8 object-contain" />,
    title: "Python Essentials 1",
    status: "Cisco",
    description: "Solidified foundational Python programming skills through Cisco Netacad.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" className="h-8 w-8 object-contain drop-shadow-md">
        <path fill="#f35325" d="M0 0h42v42H0z"/>
        <path fill="#81bc06" d="M46 0h42v42H46z"/>
        <path fill="#05a6f0" d="M0 46h42v42H0z"/>
        <path fill="#ffba08" d="M46 46h42v42H46z"/>
      </svg>
    ),
    title: "Microsoft Python Programming Fundamentals",
    status: "Certified",
    description: "Demonstrated core understanding of Python programming concepts.",
  }
];

export function CompetitionsSection() {
  return (
    <section id="competitions" className="section-padding bg-background relative border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Competitions & Community</span>
          </div>
          <h2 className="section-heading uppercase tracking-tighter">
            Competing &amp; <span className="text-gradient-blue">Contributing</span>
          </h2>
          <p className="section-subtitle">
            Engaging with the global programming community through contests, puzzle days, and mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competitions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] flex flex-col items-center text-center space-y-6 hover:bg-white/[0.07] hover:border-primary/30 transition-all group shadow-xl"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-black text-foreground leading-tight uppercase tracking-tight">{item.title}</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">{item.status}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
