import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Package, Zap, Award } from "lucide-react";
import { QuoteFormCompact } from "./QuoteFormCompact";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 animate-float-slow" />

      {/* Floating blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />

      <div className="container relative mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center lg:text-left"
        >
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur border border-border px-4 py-1.5 text-sm font-medium shadow-card">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>AI-assisted custom box design</span>
          </div> */}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Premium Custom <br />
            <span className="text-gradient">Packaging Boxes</span> <br />
            Built For Your Brand
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Magnetic closure, rigid, jewelry, watch, candle & sliding boxes —
            crafted with luxury finishes, fast turnaround, and free design support.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-gradient-hero text-primary-foreground shadow-glow hover:scale-105 transition-transform">
              <a href="#quote">Request Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2">
              <a href="#products">Explore Products</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 justify-center lg:justify-start text-sm">
            {[
              { icon: Package, label: "Free Design" },
              { icon: Zap, label: "Fast Turnaround" },
              { icon: Award, label: "Premium Quality" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-foreground/80">
                <div className="rounded-full bg-primary/10 p-1.5">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full max-w-md mx-auto lg:max-w-none"
        >
          <QuoteFormCompact />
        </motion.div>
      </div>
    </section>
  );
}
