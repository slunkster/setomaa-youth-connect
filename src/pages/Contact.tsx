import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, User } from "lucide-react";
import tootaja from "../assets/tootaja.jpg";

const workers: { name: string; role: string; email: string; phone?: string; image: string }[] = [
  { name: "Karoliine Marinitševa", role: "Juhataja", email: "noorsootoo.keskus@setomaa.ee", phone: "+372 5171796", image: tootaja },
  { name: "Birjo Piir", role: "Meremäe piirkonna noorsootöötaja", email: "birjo.piir@setomaakoolid.ee", image: tootaja },
  { name: "Jade Lummo", role: "Mikitamäe piirkonna noorsootöötaja", email: "jade.lummo@setomaakoolid.ee", image: tootaja },
  { name: "Triinu Kotov", role: "Värska piirkonna noorsootöötaja", email: "triinu.kotov@setomaakoolid.ee", image: tootaja },
];

const Contact = () => {
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
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] md:p-10">
          <h2 className="font-display text-2xl font-bold">Üldine info</h2>
          <dl className="mt-6 grid gap-x-6 gap-y-4 text-sm sm:grid-cols-[max-content_1fr]">
            <dt className="font-semibold text-muted-foreground">Registrikood</dt>
            <dd>75032621</dd>

            <dt className="font-semibold text-muted-foreground">Aadress</dt>
            <dd className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Pikk tn 30, Värska alevik, Setomaa vald, Võru maakond, 64001</span>
            </dd>

            <dt className="font-semibold text-muted-foreground">E-post</dt>
            <dd className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:noorsootoo.keskus@setomaa.ee" className="break-all hover:text-primary">noorsootoo.keskus@setomaa.ee</a>
            </dd>

            <dt className="font-semibold text-muted-foreground">Telefon</dt>
            <dd className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+3725171796" className="hover:text-primary">+372 5171796</a>
            </dd>
          </dl>
          <p className="mt-8 text-sm text-muted-foreground">
            Otsid kindlat keskust?{" "}
            <Link to="/keskused" className="font-semibold text-primary hover:underline">
              Vaata kõiki keskusi →
            </Link>
          </p>
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {workers.map((w) => (
            <article
              key={w.name}
              className="rounded-3xl border border-border/60 bg-card p-6 text-center shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
            >
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full shadow-[var(--shadow-pop)] sm:h-48 sm:w-48">
                <img
                  src={w.image}
                  alt={w.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{w.name}</h3>
              <p className="text-sm font-semibold text-primary">{w.role}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href={`mailto:${w.email}`} className="break-all hover:text-primary">{w.email}</a>
                </li>
                {w.phone && (
                  <li className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${w.phone.replace(/\s/g, "")}`} className="hover:text-primary">{w.phone}</a>
                  </li>
                )}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;