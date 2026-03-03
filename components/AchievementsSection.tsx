"use client";

import { motion } from "framer-motion";
import { Award, Brain, Code2, Sparkles, Trophy } from "lucide-react";

const achievements = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Personal Portfolio Website",
    status: "Completed",
    description: "Designed and developed this fully responsive portfolio with Next.js, TypeScript, and Framer Motion.",
    accent: "🌐"
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Hackathons",
    status: "Active Participant",
    description: "Participated in multiple coding hackathons and problem-solving contests locally.",
    accent: "🚀"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Python & AI Certs",
    status: "Certified",
    description: "Netacad Python Essentials and Modern AI introductory certifications.",
    accent: "📜"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Track",
    status: "In Progress",
    description: "Deepening expertise in machine learning and intelligent application behavior.",
    accent: "🤖"
  }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding bg-background relative border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Success & Growth</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Proven Track in <span className="text-gradient-blue">AI & Engineering</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            A blend of hands-on projects, competitive programming, and continuous learning in software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
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
                <h3 className="text-lg font-bold text-foreground leading-tight">{item.title}</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">{item.status}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              <div className="text-3xl pt-2">{item.accent}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

