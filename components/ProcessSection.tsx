"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe2, LayoutDashboard, Zap, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your goals, users, and constraints to define what success looks like.",
    icon: <Globe2 className="h-6 w-6" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    number: "02",
    title: "Strategy",
    description: "Designing the right architecture, tech stack, and roadmap for your product.",
    icon: <LayoutDashboard className="h-6 w-6" />,
    color: "from-purple-500/20 to-transparent"
  },
  {
    number: "03",
    title: "Development",
    description: "Implementing fast, reliable, and scalable solutions with clean, maintainable code.",
    icon: <Zap className="h-6 w-6" />,
    color: "from-amber-500/20 to-transparent"
  },
  {
    number: "04",
    title: "Delivery",
    description: "Deploying, monitoring, and iterating to ensure your product performs in the real world.",
    icon: <ShieldCheck className="h-6 w-6" />,
    color: "from-emerald-500/20 to-transparent"
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-[#020617] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={12} />
            <span>Workflow</span>
          </div>
          <h2 className="section-heading uppercase">My <span className="text-gradient-blue">Process</span></h2>
          <p className="section-subtitle">
            From idea to reliable product. A focused, transparent process that balances fast iteration with solid engineering foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative glass p-10 rounded-[2.5rem] overflow-hidden border-white/5 hover:border-white/10 transition-all shadow-2xl"
            >
              {/* Large Background Number */}
              <span className="absolute -right-4 -bottom-8 text-[12rem] font-black text-white/[0.03] select-none group-hover:text-primary/[0.05] transition-colors leading-none">
                {step.number}
              </span>

              {/* Icon & Details */}
              <div className="relative z-10 space-y-6">
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">{step.number}</span>
                    <div className="h-px w-8 bg-primary/30" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Subtle hover accent */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}

