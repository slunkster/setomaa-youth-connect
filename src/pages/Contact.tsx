import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Palun sisesta oma nimi").max(100, "Nimi võib olla kuni 100 tähemärki"),
  email: z.string().trim().email("Palun sisesta korrektne e-post").max(255, "E-post on liiga pikk"),
  message: z.string().trim().min(1, "Palun kirjuta sõnum").max(1000, "Sõnum võib olla kuni 1000 tähemärki"),
});

const workers = [
  { name: "Noorsootöötaja 1", role: "Juhataja", email: "tooline1@setomaanoored.ee", phone: "+372 000 0011" },
  { name: "Noorsootöötaja 2", role: "Keskus 1", email: "tooline2@setomaanoored.ee", phone: "+372 000 0012" },
  { name: "Noorsootöötaja 3", role: "Keskus 2", email: "tooline3@setomaanoored.ee", phone: "+372 000 0013" },
  { name: "Noorsootöötaja 4", role: "Keskus 3", email: "tooline4@setomaanoored.ee", phone: "+372 000 0014" },
  { name: "Noorsootöötaja 5", role: "Keskus 4", email: "tooline5@setomaanoored.ee", phone: "+372 000 0015" },
];

const Contact = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast({
        title: "Aitäh sõnumi eest!",
        description: "Võtame sinuga ühendust niipea kui võimalik.",
      });
    }, 400);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-[var(--shadow-soft)]">
              <Mail className="h-3.5 w-3.5" /> Kontakt
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Võta meiega ühendust</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Helista, kirjuta või tule lihtsalt külla — me ootame sind!
            </p>
          </div>
        </div>
      </section>

      {/* General contact + form */}
      <section className="container pb-16">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
              <h2 className="font-display text-2xl font-bold">Üldine info</h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <span>Setomaa vald, Eesti</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <a href="mailto:info@setomaanoored.ee" className="hover:text-primary">info@setomaanoored.ee</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <a href="tel:+3720000000" className="hover:text-primary">+372 000 0000</a>
                </li>
              </ul>
              <p className="mt-8 text-sm text-muted-foreground">
                Otsid kindlat keskust?{" "}
                <Link to="/keskused" className="font-semibold text-primary hover:underline">
                  Vaata kõiki nelja keskust →
                </Link>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] md:p-8"
            >
              <h2 className="font-display text-2xl font-bold">Saada sõnum</h2>
              <div className="mt-6 grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nimi</Label>
                  <Input id="name" name="name" maxLength={100} placeholder="Sinu nimi" aria-invalid={!!errors.name} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">E-post</Label>
                  <Input id="email" name="email" type="email" maxLength={255} placeholder="sinu@email.ee" aria-invalid={!!errors.email} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Sõnum</Label>
                  <Textarea id="message" name="message" rows={5} maxLength={1000} placeholder="Kirjuta meile..." aria-invalid={!!errors.message} />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>
                <Button type="submit" size="lg" className="rounded-full" disabled={submitting}>
                  {submitting ? "Saadan..." : (<><Send className="mr-1 h-4 w-4" /> Saada sõnum</>)}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Workers */}
      <section className="container pb-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Meie noorsootöötajad</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Tutvu meeskonnaga — võta julgelt otse ühendust!
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workers.map((w) => (
            <article
              key={w.name}
              className="rounded-3xl border border-border/60 bg-card p-6 text-center shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
            >
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-pop)]">
                <User className="h-10 w-10" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{w.name}</h3>
              <p className="text-sm font-semibold text-primary">{w.role}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${w.email}`} className="break-all hover:text-primary">{w.email}</a>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${w.phone.replace(/\s/g, "")}`} className="hover:text-primary">{w.phone}</a>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;