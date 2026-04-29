import { ExternalLink, Facebook } from "lucide-react";

const pages = [
  {
    name: "Setomaa Noorsootöö Keskus",
    description: "Peamine leht — uudised kõigist neljast keskusest.",
    url: "https://www.facebook.com/setomaanoored",
  },
  {
    name: "Keskus 1 Facebookis",
    description: "Sündmused ja pildid esimesest keskusest.",
    url: "https://www.facebook.com/setomaanoored",
  },
  {
    name: "Keskus 2 Facebookis",
    description: "Sündmused ja pildid teisest keskusest.",
    url: "https://www.facebook.com/setomaanoored",
  },
  {
    name: "Keskus 3 Facebookis",
    description: "Sündmused ja pildid kolmandast keskusest.",
    url: "https://www.facebook.com/setomaanoored",
  },
];

const buildEmbed = (url: string) =>
  `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    url,
  )}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

const Social = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-[var(--shadow-soft)]">
              <Facebook className="h-3.5 w-3.5" /> Sotsiaalmeedia
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Jälgi meid Facebookis</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Meie kogukond elab ka Facebookis. Vaata uudiseid ja sündmusi peamisel
              lehel ning igas keskuses eraldi.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {pages.map((p) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-3xl border border-border/60 bg-card p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-xl font-bold">{p.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Ava <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-border/60 bg-muted/40">
                <iframe
                  src={buildEmbed(p.url)}
                  width="500"
                  height="600"
                  loading="lazy"
                  title={p.name}
                  className="h-[600px] w-full"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Social;