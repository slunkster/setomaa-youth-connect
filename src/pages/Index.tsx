import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Heart, MapPin, Music, Palette, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

const highlights = [
  { icon: Music, title: "Tegevused", text: "Töötoad, mängud, sport ja palju muud iga nädal." },
  { icon: Heart, title: "Üritused", text: "Laagrid, festivalid ja ühised väljasõidud üle Setomaa." },
  { icon: Users, title: "Kogukond", text: "Sõbralik koht, kus iga noor on oodatud ja kuuldud." },
  { icon: Palette, title: "Loovus", text: "Kunst, muusika, käsitöö ja kõik vahepealne." },
];

const centresPreview = [
  { name: "Keskus 1", place: "Asukoht 1" },
  { name: "Keskus 2", place: "Asukoht 2" },
  { name: "Keskus 3", place: "Asukoht 3" },
  { name: "Keskus 4", place: "Asukoht 4" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -left-24 bottom-10 -z-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

        <div className="container grid gap-12 py-16 md:grid-cols-2 md:py-24 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-[var(--shadow-soft)]">
              <Heart className="h-3.5 w-3.5" /> Noortele · Noortega
            </span>
            <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Setomaa{" "}
              <span className="bg-[image:var(--gradient-cta)] bg-clip-text text-transparent">
                Noorsootöö
              </span>{" "}
              Keskus
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Neli noortekeskust, üks suur kogukond. Tule mängima, õppima, looma ja
              uusi sõpru leidma — sina otsustad, mis täna juhtub!
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/keskused">
                  Tule külla <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/kontakt">Võta ühendust</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-[image:var(--gradient-primary)] opacity-30 blur-2xl" />
            <img
              src={heroImg}
              alt="Rõõmsad noored kogunenud noortekeskuses"
              width={1536}
              height={1024}
              className="rounded-[2rem] shadow-[var(--shadow-pop)]"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Mis me oleme?</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Setomaa Noorsootöö Keskus on koht, kus iga noor leiab tegevust, sõpru ja
            võimaluse olla tema ise. Pakume turvalist, värvilist ja loovat
            keskkonda neljas keskuses üle Setomaa.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Centres teaser */}
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Meie keskused</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Neli sõbralikku noortekeskust üle Setomaa — tule sellesse, mis sulle
                kõige lähemal on.
              </p>
            </div>
            <Button asChild variant="ghost" className="rounded-full">
              <Link to="/keskused">
                Vaata kõiki keskusi <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {centresPreview.map((c) => (
              <Link
                key={c.name}
                to="/keskused"
                className="group block overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
              >
                <div className="aspect-[4/3] bg-[image:var(--gradient-primary)] opacity-90" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{c.name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {c.place}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social strip */}
      <section className="container py-16 md:py-20">
        <div className="rounded-[2rem] border border-border/60 bg-card p-8 text-center shadow-[var(--shadow-soft)] md:p-12">
          <Facebook className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
            Jälgi meid Facebookis
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Värsked uudised, üritused ja meeleolu fotod kõigist meie keskustest.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full">
            <Link to="/sotsiaalmeedia">Ava sotsiaalmeedia</Link>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container pb-20">
        <div
          className="overflow-hidden rounded-[2rem] p-10 text-center text-primary-foreground shadow-[var(--shadow-pop)] md:p-16"
          style={{ background: "var(--gradient-cta)" }}
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Liitu meiega!</h2>
          <p className="mx-auto mt-4 max-w-xl text-base opacity-95 sm:text-lg">
            Iga noor on oodatud. Tule külla, küsi küsimusi või tule lihtsalt aega
            veetma — me ootame sind!
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-7 rounded-full">
            <Link to="/kontakt">Võta ühendust</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
