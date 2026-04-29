import { Clock, Mail, MapPin, Phone } from "lucide-react";

const centres = [
  {
    name: "Värska noortekeskus",
    address: "Värska, Setomaa vald",
    hours: "E–R 14:00–20:00",
    phone: "+372 5171796",
    email: "noorsootoo.keskus@setomaa.ee",
  },
  {
    name: "Mikitamäe noortekeskus",
    address: "Mikitamäe, Setomaa vald",
    hours: "E–R 14:00–20:00",
    phone: "+372 5171796",
    email: "noorsootoo.keskus@setomaa.ee",
  },
  {
    name: "Meremäe noortekeskus",
    address: "Meremäe, Setomaa vald",
    hours: "E–R 14:00–20:00",
    phone: "+372 5171796",
    email: "noorsootoo.keskus@setomaa.ee",
  },
  {
    name: "Obinitsa noortetuba",
    address: "Obinitsa, Setomaa vald",
    hours: "Vastavalt kokkuleppele",
    phone: "+372 5171796",
    email: "noorsootoo.keskus@setomaa.ee",
  },
  {
    name: "Värska ekstreempark",
    address: "Värska, Setomaa vald",
    hours: "Hooajaliselt avatud",
    phone: "+372 5171796",
    email: "noorsootoo.keskus@setomaa.ee",
  },
];

const Centres = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-[var(--shadow-soft)]">
              <MapPin className="h-3.5 w-3.5" /> Viis kohta, üks kogukond
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Meie keskused</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Setomaa Noorsootöö Keskuse koosseisu kuuluvad Värska, Mikitamäe ja
              Meremäe noortekeskused, Obinitsa noortetuba ning Värska ekstreempark.
              Vali endale lähim ja tule külla — uksed on avatud!
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {centres.map((c) => (
            <article
              key={c.name}
              className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
            >
              <div className="aspect-[16/9] bg-[image:var(--gradient-primary)] opacity-90" />
              <div className="p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold">{c.name}</h2>
                <ul className="mt-5 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{c.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{c.hours}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-primary" />
                    <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-primary">{c.phone}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 text-primary" />
                    <a href={`mailto:${c.email}`} className="break-all hover:text-primary">{c.email}</a>
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Centres;