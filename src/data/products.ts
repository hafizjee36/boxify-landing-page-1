import magneticAssembled from "@/assets/products/magnetic-assembled.jpg";
import collapsible from "@/assets/products/collapsible.png";
import jewelry from "@/assets/products/jewelry.jpg";
import watch from "@/assets/products/watch.jpg";
import candle from "@/assets/products/candle.jpg";
import sliding from "@/assets/products/sliding.png";

export type Product = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  externalLink: string;
  tag: string;
  model3d?: string;
  features: string[];
  materials: string[];
  finishes: string[];
  useCases: string[];
  moq: string;
  turnaround: string;
};

export const products: Product[] = [
  {
    slug: "magnetic-closure-boxes-assembled",
    title: "Magnetic Closure Boxes (Assembled)",
    description: "Pre-assembled luxury rigid boxes with strong magnetic closure for a premium unboxing.",
    longDescription:
      "Our pre-assembled magnetic closure boxes deliver an instantly premium unboxing experience. Built from sturdy rigid greyboard wrapped in your choice of premium paper, with hidden magnets that snap shut with a satisfying click — perfect for high-end retail, gifting, subscription boxes, and PR mailers.",
    image: magneticAssembled,
    externalLink: "https://dailyboxpackaging.com/products/magnetic-closure-boxes-assembled/",
    tag: "Bestseller — 3D View",
    model3d: "/models/magnetic-box.glb",
    features: [
      "Strong hidden neodymium magnets",
      "Rigid 1200–1500 GSM greyboard construction",
      "Custom inserts (foam, EVA, velvet, paper pulp)",
      "Foil stamping, embossing, debossing, spot UV",
      "Soft-touch, matte, gloss, or textured finish",
    ],
    materials: ["Rigid greyboard", "Specialty paper wrap", "Recycled kraft", "Eco-friendly options"],
    finishes: ["Matte lamination", "Gloss lamination", "Soft-touch", "Foil stamping", "Embossing", "Spot UV"],
    useCases: ["Luxury retail", "Subscription boxes", "PR & influencer mailers", "Corporate gifting", "Wedding & event"],
    moq: "100 units",
    turnaround: "10–15 business days",
  },
  {
    slug: "magnet-closure-boxes-collapsible",
    title: "Magnet Closure Boxes (Collapsible)",
    description: "Space-saving collapsible rigid boxes with magnetic flap — ship flat, fold instantly.",
    longDescription:
      "All the luxury of a rigid magnetic box, shipped flat to slash your storage and freight costs. Folds in seconds without tools — perfect for brands that need premium presentation with smarter logistics.",
    image: collapsible,
    externalLink: "https://dailyboxpackaging.com/products/magnet-closure-boxes-collapsible/",
    tag: "Eco Smart",
    features: [
      "Ships flat — saves up to 80% storage space",
      "Tool-free fold-up assembly",
      "Hidden magnetic flap closure",
      "Reinforced corners for durability",
      "Lower freight & warehousing costs",
    ],
    materials: ["Rigid greyboard", "Specialty paper wrap", "Recycled kraft"],
    finishes: ["Matte", "Gloss", "Soft-touch", "Foil stamping", "Embossing"],
    useCases: ["E-commerce", "Subscription brands", "Retail", "Gifting"],
    moq: "100 units",
    turnaround: "12–18 business days",
  },
  {
    slug: "jewelry-boxes",
    title: "Jewelry Boxes",
    description: "Elegant custom jewelry boxes with velvet inserts, foil stamping, and luxurious finishes.",
    longDescription:
      "Showcase rings, necklaces, bracelets, and earrings in jewelry boxes designed to feel as precious as their contents. Custom velvet inserts cradle each piece while premium finishes elevate your brand.",
    image: jewelry,
    externalLink: "https://dailyboxpackaging.com/products/jewelry-boxes/",
    tag: "Luxury",
    features: [
      "Custom velvet, satin, or foam inserts",
      "Ring slots, necklace pads, earring holders",
      "Hinged lid or magnetic closure",
      "Gold/silver/rose gold foil stamping",
      "Branded interior printing",
    ],
    materials: ["Rigid board", "Velvet", "Satin", "Faux leather"],
    finishes: ["Foil stamping", "Embossing", "Soft-touch", "Matte", "Gloss"],
    useCases: ["Fine jewelry", "Engagement rings", "Watches", "Heirlooms"],
    moq: "100 units",
    turnaround: "12–18 business days",
  },
  {
    slug: "watch-boxes",
    title: "Watch Boxes",
    description: "Premium watch packaging built for protection, presentation, and brand impact.",
    longDescription:
      "Protect timepieces in style with rigid watch boxes featuring contoured pillows, secure closures, and a tactile premium feel that matches the value inside.",
    image: watch,
    externalLink: "https://dailyboxpackaging.com/products/watch-boxes/",
    tag: "Premium",
    features: [
      "Contoured watch pillow inserts",
      "Magnetic or hinged closure",
      "Velvet, leatherette, or satin lining",
      "Custom logo embossing & foil",
      "Single, dual, or multi-watch configurations",
    ],
    materials: ["Rigid board", "Faux leather", "Velvet", "Wood-effect wrap"],
    finishes: ["Soft-touch", "Foil stamping", "Embossing", "Matte"],
    useCases: ["Luxury watch brands", "Smartwatches", "Corporate gifting", "Retail display"],
    moq: "100 units",
    turnaround: "12–18 business days",
  },
  {
    slug: "rigid-candle-boxes",
    title: "Rigid Candle Boxes",
    description: "Sturdy rigid candle boxes designed to protect, present, and elevate your fragrance brand.",
    longDescription:
      "Heavy-duty rigid boxes engineered for the weight of glass candles. Custom inserts hold the jar securely while premium finishes turn unboxing into part of the ritual.",
    image: candle,
    externalLink: "https://dailyboxpackaging.com/products/rigid-candle-boxes/",
    tag: "Trending",
    features: [
      "Reinforced rigid construction for glass jars",
      "Custom-fit foam or paper pulp inserts",
      "Window cutouts available",
      "Sustainable & recyclable options",
      "Premium paper wraps with branded finishes",
    ],
    materials: ["Rigid greyboard", "Recycled kraft", "Specialty paper wrap"],
    finishes: ["Matte", "Soft-touch", "Foil stamping", "Spot UV", "Embossing"],
    useCases: ["Luxury candles", "Home fragrance", "Spa & wellness brands", "Gift sets"],
    moq: "100 units",
    turnaround: "10–15 business days",
  },
  {
    slug: "sliding-boxes",
    title: "Sliding Boxes",
    description: "Custom sliding drawer boxes ideal for gifts, cosmetics, and signature product launches.",
    longDescription:
      "Two-piece sliding drawer boxes create a memorable reveal moment. Perfect for cosmetics, accessories, gourmet, and signature product launches that deserve a tactile experience.",
    image: sliding,
    externalLink: "https://dailyboxpackaging.com/products/sliding-boxes/",
    tag: "Versatile",
    features: [
      "Two-piece drawer + sleeve construction",
      "Pull-tab or thumb-cut options",
      "Custom inserts for any product",
      "Premium paper wraps",
      "Foil, emboss, and spot UV finishes",
    ],
    materials: ["Rigid board", "Specialty paper", "Recycled kraft"],
    finishes: ["Matte", "Gloss", "Soft-touch", "Foil stamping", "Embossing", "Spot UV"],
    useCases: ["Cosmetics & beauty", "Gourmet & chocolate", "Tech accessories", "Premium gifting"],
    moq: "100 units",
    turnaround: "10–15 business days",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
