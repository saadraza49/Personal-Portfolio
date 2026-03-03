import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 bg-background border-t border-white/5">
            <div className="container-custom">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-xl font-black tracking-tighter text-foreground">
                            Muhammad Saad <span className="text-primary">Raza.</span>
                        </h2>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">AI Engineer</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="mailto:msaadraza49@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail size={20} />
                        </a>
                        <a href="https://linkedin.com/in/m-saadraza" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/saadraza49" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github size={20} />
                        </a>
                    </div>

                    <div className="pt-8 border-t border-white/5 w-full max-w-xs mx-auto">
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                            © {new Date().getFullYear()} All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
