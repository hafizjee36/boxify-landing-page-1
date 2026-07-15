import logo from "@/assets/logo.png";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="DailyBox Packaging" className="h-10 sm:h-12 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="tel:+17606422425"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-medium">(760) 642-2425</span>
          </a>
          <a
            href="mailto:sales@dailyboxpackaging.com"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 text-primary" />
            <span className="font-medium">sales@dailyboxpackaging.com</span>
          </a>
        </div>
        <Button asChild className="bg-gradient-hero text-primary-foreground shadow-soft hover:opacity-95">
          <a href="#quote">Get Quote</a>
        </Button>
      </div>
    </header>
  );
}
