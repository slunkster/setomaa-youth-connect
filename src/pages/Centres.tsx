import { Clock, Mail, MapPin, Phone } from "lucide-react";
import varska from "../assets/varska.jpg";
import mikitamae from "../assets/mikitamae.jpg";
import meremae from "../assets/meremae.jpg";
import obinitsa from "../assets/obinitsa.jpg";
import skate from "../assets/skate.jpg";
import placeholder from "../assets/hero1.jpg";

const centres = [
  {
    name: "Värska noortekeskus",
    image: varska,
    address: "Pikk tn 30, Värska, Setomaa vald",
    hours: "Jälgi nädalakavast!",
  },
  {
    name: "Mikitamäe noortekeskus",
    image: placeholder,
    address: "Mäe tn 27, Mikitamäe, Setomaa vald",
    hours: "Jälgi nädalakavast!",
  },
  {
    name: "Meremäe noortekeskus",
    image: placeholder,
    address: "Petseri tee 13, Meremäe küla, Setomaa vald",
    hours: "Jälgi nädalakavast!",
  },
  {
    name: "Obinitsa noortetuba",
    image: placeholder,
    address: "Kooli tn 1, Obinitsa, Setomaa vald",
    hours: "Jälgi nädalakavast!",
  },
  {
    name: "Värska ekstreempark",
    image: skate,
    address: "Vaikuse tn 7, Värska, Setomaa vald",
    hours: "Võta ühendust, et kokku leppida!",
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
              Vali endale lähim ja tule külla! Uksed on avatud!
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="flex flex-wrap justify-center gap-6">
          {centres.map((c) => (
            <article
              key={c.name}
              className="basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
                />
              </div>
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