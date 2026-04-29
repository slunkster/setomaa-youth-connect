import { Link } from "react-router-dom";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/40">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Setomaa Noorsootöö Keskuse logo"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 object-contain"
            />
            <span className="font-display text-lg font-bold">Setomaa Noorsootöö Keskus</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Värska, Mikitamäe ja Meremäe noortekeskused, Obinitsa noortetuba ja Värska ekstreempark — üks asutus, üks kogukond.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-bold">Lehed</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Avaleht</Link></li>
            <li><Link to="/keskused" className="text-muted-foreground hover:text-primary">Keskused</Link></li>
            <li><Link to="/sotsiaalmeedia" className="text-muted-foreground hover:text-primary">Sotsiaalmeedia</Link></li>
            <li><Link to="/kontakt" className="text-muted-foreground hover:text-primary">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold">Võta ühendust</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Pikk tn 30, Värska alevik, Setomaa vald, 64001</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> <a href="mailto:noorsootoo.keskus@setomaa.ee" className="break-all hover:text-primary">noorsootoo.keskus@setomaa.ee</a></li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> <a href="tel:+3725171796" className="hover:text-primary">+372 5171796</a></li>
            <li className="flex items-start gap-2"><Facebook className="mt-0.5 h-4 w-4 text-primary" /> Leia meid Facebookis</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Setomaa Noorsootöö Keskus. Kõik õigused kaitstud.
        </div>
      </div>
    </footer>
  );
};

export default Footer;