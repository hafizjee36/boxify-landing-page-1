import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Box3DViewer } from "./Box3DViewer";

import magneticAssembled from "@/assets/products/magnetic-assembled.jpg";
import collapsible from "@/assets/products/collapsible.png";
import jewelry from "@/assets/products/jewelry.jpg";
import watch from "@/assets/products/watch.jpg";
import candle from "@/assets/products/candle.jpg";
import sliding from "@/assets/products/sliding.png";

type Product = {
  title: string;
  description: string;
  image: string;
  link: string;
  tag: string;
  model3d?: string;
};

const products: Product[] = [
  {
    title: "Magnetic Closure Boxes (Assembled)",
    description: "Pre-assembled luxury rigid boxes with strong magnetic closure for a premium unboxing.",
    image: magneticAssembled,
    link: "https://dailyboxpackaging.com/products/magnetic-closure-boxes-assembled/",
    tag: "Bestseller — 3D View",
    model3d: "/models/magnetic-box.glb",
  },
  {
    title: "Magnet Closure Boxes (Collapsible)",
    description: "Space-saving collapsible rigid boxes with magnetic flap — ship flat, fold instantly.",
    image: collapsible,
    link: "https://dailyboxpackaging.com/products/magnet-closure-boxes-collapsible/",
    tag: "Eco Smart",
  },
  {
    title: "Jewelry Boxes",
    description: "Elegant custom jewelry boxes with velvet inserts, foil stamping, and luxurious finishes.",
    image: jewelry,
    link: "https://dailyboxpackaging.com/products/jewelry-boxes/",
    tag: "Luxury",
  },
  {
    title: "Watch Boxes",
    description: "Premium watch packaging built for protection, presentation, and brand impact.",
    image: watch,
    link: "https://dailyboxpackaging.com/products/watch-boxes/",
    tag: "Premium",
  },
  {
    title: "Rigid Candle Boxes",
    description: "Sturdy rigid candle boxes designed to protect, present, and elevate your fragrance brand.",
    image: candle,
    link: "https://dailyboxpackaging.com/products/rigid-candle-boxes/",
    tag: "Trending",
  },
  {
    title: "Sliding Boxes",
    description: "Custom sliding drawer boxes ideal for gifts, cosmetics, and signature product launches.",
    image: sliding,
    link: "https://dailyboxpackaging.com/products/sliding-boxes/",
    tag: "Versatile",
  },
];

export function ProductSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section id="products" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-semibold mb-4">
            Our Products
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Boxes Built To <span className="text-gradient">Stand Out</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Explore our most-loved custom packaging styles — each one ready to be tailored to your brand.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {products.map((p, i) => (
                <div
                  key={p.title}
                  className="pl-4 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                    className="group h-full bg-gradient-card rounded-3xl border border-border shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      {p.model3d ? (
                        <Box3DViewer src={p.model3d} alt={p.title} poster={p.image} className="w-full h-full" />
                      ) : (
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute top-3 left-3 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-xs font-bold text-primary shadow-card pointer-events-none">
                        {p.tag}
                      </div>
                      {!p.model3d && (
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold leading-tight">{p.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full h-11 w-11 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === selectedIndex ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full h-11 w-11 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
