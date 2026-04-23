import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Invalid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(25),
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().trim().min(1, "Quantity is required").max(20),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const productOptions = [
  "Magnetic Closure Boxes (Assembled)",
  "Magnet Closure Boxes (Collapsible)",
  "Jewelry Boxes",
  "Watch Boxes",
  "Rigid Candle Boxes",
  "Sliding Boxes",
  "Other / Custom",
];

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", product: "", quantity: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    const subject = encodeURIComponent(`Quote Request — ${values.product}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nProduct: ${values.product}\nQuantity: ${values.quantity}\n\nMessage:\n${values.message ?? ""}`,
    );
    // Open user's email client with prefilled details
    window.location.href = `mailto:sales@dailyboxpackaging.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Quote request ready! Your email client just opened with the details.");
      reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="quote" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-semibold mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Free Quote in Hours
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            Tell us about your project — <span className="text-gradient">we’ll quote in hours.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Share a few details and our packaging experts get back to you with pricing,
            material options, and free design support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href="tel:+17606422425"
              className="block p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:border-primary/40 hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Call us now</div>
                  <div className="text-lg font-bold">(760) 642-2425</div>
                </div>
              </div>
            </a>
            <a
              href="mailto:sales@dailyboxpackaging.com"
              className="block p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:border-primary/40 hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Email us</div>
                  <div className="text-base font-bold break-all">sales@dailyboxpackaging.com</div>
                </div>
              </div>
            </a>
            <div className="p-5 rounded-2xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Made in</div>
                  <div className="text-base font-bold">USA — Shipping nationwide</div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="p-5 rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow">
              <div className="text-sm font-semibold mb-3 opacity-90">Why brands choose us</div>
              <ul className="space-y-2 text-sm">
                {["Free design & 3D mockup", "Low MOQs available", "10–15 day turnaround", "Eco-friendly materials"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative"
          >
            <div className="absolute -inset-1 bg-gradient-hero rounded-3xl blur-xl opacity-30" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative bg-card rounded-3xl border border-border shadow-glow p-6 sm:p-8 space-y-5"
            >
              <div className="flex items-start justify-between gap-4 pb-2 border-b border-border">
                <div>
                  <h3 className="text-2xl font-bold">Request a Free Quote</h3>
                  <p className="text-sm text-muted-foreground mt-1">Fill the form — we’ll reply within hours.</p>
                </div>
                <div className="hidden sm:flex h-12 w-12 rounded-xl bg-gradient-hero items-center justify-center shadow-soft shrink-0">
                  <Send className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Doe" {...register("name")} className="h-11" />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="you@brand.com" {...register("email")} className="h-11" />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" placeholder="(760) 555-0100" {...register("phone")} className="h-11" />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Input id="quantity" placeholder="e.g. 500" {...register("quantity")} className="h-11" />
                  {errors.quantity && <p className="text-xs text-destructive">{errors.quantity.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="product">Product Type *</Label>
                <Select value={watch("product")} onValueChange={(v) => setValue("product", v, { shouldValidate: true })}>
                  <SelectTrigger id="product" className="h-11">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {productOptions.map((p) => (
                      <SelectItem key={p} value={p}>{p}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.product && <p className="text-xs text-destructive">{errors.product.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about size, material, finishes, deadline…"
                  {...register("message")}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full h-12 bg-gradient-hero text-primary-foreground shadow-glow hover:opacity-95 hover:scale-[1.01] transition-all text-base font-semibold"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Quote Request <Send className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                🔒 By submitting, you agree to be contacted about your packaging project.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
