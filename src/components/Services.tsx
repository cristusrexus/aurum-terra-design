import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Home, 
  Wrench, 
  Hammer, 
  TreePine, 
  Palette,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Construcții Comerciale",
    description: "Birouri, centre comerciale, spații industriale - proiecte la cheie cu standarde înalte de calitate.",
    features: ["Proiectare arhitecturală", "Autorizații și documentații", "Execuție și finisaje"],
  },
  {
    icon: Home,
    title: "Construcții Rezidențiale",
    description: "Case particulare, vile, apartamente - transformăm visul locuinței ideale în realitate.",
    features: ["Design personalizat", "Materiale premium", "Garanție extinsă"],
  },
  {
    icon: Wrench,
    title: "Renovări și Modernizări",
    description: "Redăm viață spațiilor existente prin renovări complete sau parțiale de înaltă calitate.",
    features: ["Evaluare tehnică", "Design interior", "Execuție rapidă"],
  },
  {
    icon: Hammer,
    title: "Reparații și Întreținere",
    description: "Servicii complete de reparații, întreținere preventivă și intervenții de urgență.",
    features: ["Disponibilitate 24/7", "Echipe specializate", "Preturi competitive"],
  },
  {
    icon: TreePine,
    title: "Amenajări Exterioare",
    description: "Grădini, terase, alei pavate - creăm spații exterioare funcționale și estetice.",
    features: ["Peisagistică", "Sisteme de irigații", "Iluminat exterior"],
  },
  {
    icon: Palette,
    title: "Design și Consultanță",
    description: "Servicii complete de arhitectură și design interior pentru proiecte de orice dimensiune.",
    features: ["Planuri 3D", "Documentații tehnice", "Urmărire proiect"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Serviciile</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Noastre</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferim o gamă completă de servicii de construcții, de la proiectare la finalizare, 
            asigurând calitate și profesionalism în fiecare detaliu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group h-full bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-subtle hover:shadow-professional"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-6 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Află Mai Multe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Nu găsiți ceea ce căutați? Suntem flexibili și ne adaptăm nevoilor dumneavoastră.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-professional"
          >
            Consultanță Gratuită
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};