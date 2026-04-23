import { motion } from "framer-motion";
import { Palette, Truck, Recycle, BadgeCheck, Layers, HeartHandshake } from "lucide-react";

const features = [
  { icon: Palette, title: "Free Custom Design", desc: "Our designers turn your idea into a print-ready masterpiece — at no extra cost." },
  { icon: Layers, title: "Premium Materials", desc: "Rigid board, kraft, cardboard C1S/C2S — finished with foil, emboss & spot UV." },
  { icon: Truck, title: "Fast Turnaround", desc: "Speedy production and shipping across the US — without compromising quality." },
  { icon: Recycle, title: "Eco-Friendly Options", desc: "Recyclable, biodegradable and FSC-certified materials available." },
  { icon: BadgeCheck, title: "No Minimum Order", desc: "Order what you need — from small startup batches to enterprise volumes." },
  { icon: HeartHandshake, title: "Dedicated Support", desc: "A real human packaging expert with you from quote to delivery." },
];

export function Features() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-semibold mb-4">
            Why DailyBox
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Everything You Need For <span className="text-gradient">Perfect Packaging</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group p-7 rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft mb-5 group-hover:scale-110 transition-transform">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
