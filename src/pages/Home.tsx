import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProductSlider } from "@/components/landing/ProductSlider";
import { Features } from "@/components/landing/Features";
import { QuoteForm } from "@/components/landing/QuoteForm";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ProductSlider />
        <Features />
        <QuoteForm />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
