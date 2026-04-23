import logo from "@/assets/logo.png";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="DailyBox Packaging" className="h-12 w-auto bg-white rounded-lg p-1.5 mb-4" />
          <p className="text-sm text-primary-foreground/80 max-w-sm">
            Custom luxury packaging — magnetic, rigid, jewelry, watch, candle and sliding boxes
            built to elevate your brand.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-lg">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+17606422425" className="flex items-center gap-2 hover:text-primary-glow">
                <Phone className="h-4 w-4" /> (760) 642-2425
              </a>
            </li>
            <li>
              <a href="mailto:sales@dailyboxpackaging.com" className="flex items-center gap-2 hover:text-primary-glow break-all">
                <Mail className="h-4 w-4" />
                <span>sales@dailyboxpackaging.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-lg">Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Magnetic Closure Boxes</li>
            <li>Jewelry &amp; Watch Boxes</li>
            <li>Rigid Candle Boxes</li>
            <li>Sliding Boxes</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto px-4 sm:px-6 py-5 text-center text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} DailyBox Packaging. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
