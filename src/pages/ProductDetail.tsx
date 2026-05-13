import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ExternalLink, Package, Clock, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Box3DViewer } from "@/components/landing/Box3DViewer";
import { QuoteForm } from "@/components/landing/QuoteForm";
import { getProductBySlug, products } from "@/data/products";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    if (product) {
      document.title = `${product.title} — Daily Box Packaging`;
    }
  }, [product]);

  if (!product) return <NotFound />;

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
          <div className="container relative mx-auto px-4 sm:px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all products
            </Link>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-card border border-border shadow-glow"
              >
                {product.model3d ? (
                  <Box3DViewer
                    src={product.model3d}
                    alt={product.title}
                    poster={product.image}
                    className="w-full h-full"
                  />
                ) : (
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                )}
                <div className="absolute top-4 left-4 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-xs font-bold text-primary shadow-card">
                  {product.tag}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-3">
                    <Sparkles className="h-3 w-3" /> Custom Packaging
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">{product.title}</h1>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{product.longDescription}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      <Package className="h-3.5 w-3.5" /> MOQ
                    </div>
                    <div className="text-lg font-bold mt-1">{product.moq}</div>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      <Clock className="h-3.5 w-3.5" /> Turnaround
                    </div>
                    <div className="text-lg font-bold mt-1">{product.turnaround}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild size="lg" className="bg-gradient-hero text-primary-foreground shadow-glow hover:opacity-95 rounded-xl">
                    <a href="#quote">Get a Free Quote</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-xl">
                    <a href={product.externalLink} target="_blank" rel="noopener noreferrer">
                      View on Main Site <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6">
              <DetailCard title="Key Features" icon={<Sparkles className="h-4 w-4" />} items={product.features} />
              <DetailCard title="Materials" icon={<Layers className="h-4 w-4" />} items={product.materials} />
              <DetailCard title="Available Finishes" icon={<Sparkles className="h-4 w-4" />} items={product.finishes} />
              <DetailCard title="Perfect For" icon={<Package className="h-4 w-4" />} items={product.useCases} />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              You may also <span className="text-gradient">like</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group block bg-card rounded-2xl border border-border shadow-card hover:shadow-glow transition-all overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold leading-tight">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}

function DetailCard({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">{icon}</div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
