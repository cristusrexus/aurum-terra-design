import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowUp
} from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                StoneCraft Construction
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Cu peste 20 de ani de experiență în domeniul construcțiilor, StoneCraft Construction 
                este partenerul de încredere pentru toate proiectele dumneavoastră de construcții 
                și renovări. Calitate, profesionalism și inovație în fiecare detaliu.
              </p>
              
              {/* Contact Quick Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 text-primary mr-3" />
                  <span className="text-card-foreground">Str. Constructorilor nr. 15, Sector 2, București</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 text-primary mr-3" />
                  <span className="text-card-foreground">+40 123 456 789</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 text-primary mr-3" />
                  <span className="text-card-foreground">contact@stonecraft.ro</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4">Servicii</h4>
              <ul className="space-y-2">
                {[
                  "Construcții Comerciale",
                  "Construcții Rezidențiale", 
                  "Renovări și Modernizări",
                  "Reparații și Întreținere",
                  "Amenajări Exterioare",
                  "Design și Consultanță"
                ].map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4">Link-uri Rapide</h4>
              <ul className="space-y-2">
                {[
                  { name: "Acasă", href: "#home" },
                  { name: "Despre Noi", href: "#about" },
                  { name: "Proiecte", href: "#projects" },
                  { name: "Contact", href: "#contact" },
                  { name: "Solicitare Ofertă", href: "#contact" },
                  { name: "Urgențe 24/7", href: "tel:+40555123456" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-card-foreground mb-2">
              Rămâi la Curent cu Proiectele Noastre
            </h4>
            <p className="text-muted-foreground mb-6">
              Abonează-te pentru a primi cele mai noi informații despre proiectele și serviciile noastre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-4 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                Abonează-te
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} StoneCraft Construction. Toate drepturile rezervate.
            </div>
            
            {/* Social Media & Back to Top */}
            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Sus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};