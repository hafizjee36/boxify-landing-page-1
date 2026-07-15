import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Box3DViewer } from "./Box3DViewer";
import { products } from "@/data/products";

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
    <section id="products" className="relative py-15 sm:py-15">
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
                          <Link
                            to={`/products/${p.slug}`}
                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                          >
                            <img
                              src={p.image}
                              alt={p.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          </Link>
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
                      <Link
                        to={`/products/${p.slug}`}
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-4">
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
          <div className="flex items-center justify-center gap-4 mt-4">
            <Button asChild size="lg" className="bg-gradient-hero text-primary-foreground shadow-glow hover:scale-105 transition-transform">
              <a href="/">See All Products</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
