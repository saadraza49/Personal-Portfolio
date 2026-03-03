 "use client";

import { motion } from "framer-motion";
import { Cpu, LayoutTemplate, Sparkles, Workflow } from "lucide-react";

const services = [
  {
    title: "AI & Automation",
    description: "Integrate AI into your current systems to automate workflows and unlock new capabilities.",
    icon: <Cpu className="h-6 w-6" />,
    features: ["LLM Integration", "Workflow Automation", "Data Pipelines"],
    price: "Starting at $2,500",
    mostPopular: true
  },
  {
    title: "Full-Stack AI Development",
    description: "Build modern, production-ready web apps that feel fast, polished, and intelligent.",
    icon: <LayoutTemplate className="h-6 w-6" />,
    features: ["Next.js & React Frontend", "Python Backend", "AI Integration"],
    price: "Starting at $1,800"
  },
  {
    title: "Technical Consulting",
    description: "Validate ideas quickly with solid technical foundations and clear execution plans.",
    icon: <Workflow className="h-6 w-6" />,
    features: ["Architecture Design", "Prototyping", "UX Reviews"],
    price: "Starting at $80/hour"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background/50 border-y border-white/5">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground italic">
            Specialized <span className="text-gradient-blue NOT-italic">Solutions</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Helping startups and teams build high-performance products with the latest AI and web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`glass p-8 rounded-[2.5rem] hover:border-primary/30 transition-all group relative ${
                service.mostPopular ? "border-primary/60 bg-primary/5 shadow-primary/30" : ""
              }`}
            >
              {service.mostPopular && (
                <span className="absolute -top-4 right-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.18em]">
                  Most Popular
                </span>
              )}
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm font-semibold text-primary mb-3">{service.price}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map(feature => (
                  <span key={feature} className="text-[10px] font-bold uppercase tracking-wider text-primary/80 bg-primary/5 px-2 py-1 rounded-md">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
