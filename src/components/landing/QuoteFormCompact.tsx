import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const productOptions = [
  "Mailer Boxes",
  "Jewelry Boxes",
  "Magntic Rigid Boxes",
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
    defaultValues: { name: "", email: "", phone: "", product: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    setSubmitting(true);
    const subject = encodeURIComponent(`Quick Quote — ${values.product}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nProduct: ${values.product}\n\nDescription:\n${values.message ?? ""}`,
    );
    window.location.href = `mailto:sales@dailyboxpackaging.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Quote ready! Email client opened.");
      reset();
      setSubmitting(false);
    }, 600);
  };

  return (
    <div className="relative px-3 sm:px-4 lg:px-0">
      <div className="absolute -inset-2 bg-gradient-hero rounded-[22px] blur-xl opacity-35 animate-pulse-glow" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-card/95 backdrop-blur-xl rounded-2xl border border-border/60 shadow-glow p-7 sm:p-8 lg:p-9 space-y-5"
      >
        <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/50 px-5 py-4">
          <div className="h-11 w-11 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft shrink-0">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl font-bold leading-tight">Get an Instant Quote</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Share product, quantity and box details — our team replies within hours with pricing and design support.
            </p>
          </div>
        </div>

        <div className="space-y-1.5">
          <Input placeholder="Full name" {...register("name")} className="h-12 rounded-xl bg-background/70 px-4" />
          {errors.name && <p className="text-[11px] text-destructive">{errors.name.message}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Input type="email" placeholder="Email" {...register("email")} className="h-12 rounded-xl bg-background/70 px-4" />
            {errors.email && <p className="text-[11px] text-destructive">{errors.email.message}</p>}
          </div>
          <div className="space-y-1.5">
            <Input type="tel" placeholder="Phone" {...register("phone")} className="h-12 rounded-xl bg-background/70 px-4" />
            {errors.phone && <p className="text-[11px] text-destructive">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="space-y-1.5">
          <Select value={watch("product")} onValueChange={(v) => setValue("product", v, { shouldValidate: true })}>
            <SelectTrigger className="h-12 rounded-xl bg-background/70 px-4">
              <SelectValue placeholder="Select product type" />
            </SelectTrigger>
            <SelectContent>
              {productOptions.map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.product && <p className="text-[11px] text-destructive">{errors.product.message}</p>}
        </div>

        <div className="space-y-1.5">
          <Textarea
            rows={4}
            placeholder="Description / box details"
            {...register("message")}
            className="min-h-[128px] rounded-xl bg-background/70 px-4 py-3 resize-none"
          />
          {errors.message && <p className="text-[11px] text-destructive">{errors.message.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={submitting}
          className="w-full h-12 rounded-xl bg-gradient-hero text-primary-foreground shadow-glow hover:opacity-95 hover:scale-[1.01] transition-all font-semibold"
        >
          {submitting ? (
            <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending…</>
          ) : (
            <>Get Free Quote <Send className="h-4 w-4 ml-1.5" /></>
          )}
        </Button>
        <p className="text-xs leading-6 text-muted-foreground text-center px-3 pt-1">
          No spam — only quote details for your packaging project.
        </p>
      </form>
    </div>
  );
}

