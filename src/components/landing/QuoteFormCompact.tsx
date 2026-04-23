import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  product: z.string().min(1, "Select a product"),
});

type FormValues = z.infer<typeof schema>;

const productOptions = [
  "Magnetic Closure Boxes",
  "Jewelry Boxes",
  "Watch Boxes",
  "Rigid Candle Boxes",
  "Sliding Boxes",
  "Other / Custom",
];

export function QuoteFormCompact() {
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
    defaultValues: { name: "", email: "", phone: "", product: "" },
  });

  const onSubmit = (values: FormValues) => {
    setSubmitting(true);
    const subject = encodeURIComponent(`Quick Quote — ${values.product}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nProduct: ${values.product}`,
    );
    window.location.href = `mailto:sales@dailyboxpackaging.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Quote ready! Email client opened.");
      reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <div className="relative">
      {/* Glow ring */}
      <div className="absolute -inset-1 bg-gradient-hero rounded-3xl blur-xl opacity-40 animate-pulse-glow" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-card/95 backdrop-blur-xl rounded-3xl border border-border/60 shadow-glow p-6 space-y-3.5"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center shadow-soft">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-base font-bold leading-tight">Get an Instant Quote</h3>
            <p className="text-[11px] text-muted-foreground">Reply within hours</p>
          </div>
        </div>

        <div>
          <Input placeholder="Full name" {...register("name")} className="h-10" />
          {errors.name && <p className="text-[11px] text-destructive mt-1">{errors.name.message}</p>}
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div>
            <Input type="email" placeholder="Email" {...register("email")} className="h-10" />
            {errors.email && <p className="text-[11px] text-destructive mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <Input type="tel" placeholder="Phone" {...register("phone")} className="h-10" />
            {errors.phone && <p className="text-[11px] text-destructive mt-1">{errors.phone.message}</p>}
          </div>
        </div>
        <div>
          <Select value={watch("product")} onValueChange={(v) => setValue("product", v, { shouldValidate: true })}>
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Select product type" />
            </SelectTrigger>
            <SelectContent>
              {productOptions.map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.product && <p className="text-[11px] text-destructive mt-1">{errors.product.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={submitting}
          className="w-full h-11 bg-gradient-hero text-primary-foreground shadow-glow hover:opacity-95 hover:scale-[1.01] transition-all font-semibold"
        >
          {submitting ? (
            <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending…</>
          ) : (
            <>Get Free Quote <Send className="h-4 w-4 ml-1.5" /></>
          )}
        </Button>
        <p className="text-[10px] text-muted-foreground text-center">
          🔒 No spam — your details stay private.
        </p>
      </form>
    </div>
  );
}
