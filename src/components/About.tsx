import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Award, 
  Users, 
  Target, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Calitate Garantată",
    description: "Fiecare proiect este realizat conform standardelor internaționale de calitate, cu materiale certificate și tehnologii moderne."
  },
  {
    icon: Award,
    title: "Experiență Vastă",
    description: "Cu peste două decenii în domeniul construcțiilor, am acumulat expertiza necesară pentru orice tip de provocare."
  },
  {
    icon: Users,
    title: "Echipă Profesionistă",
    description: "Colaborăm cu arhitecți, ingineri și meșteri cu experiență vastă, toți dedicați excelenței în construcții."
  },
  {
    icon: Target,
    title: "Respectarea Termenelor",
    description: "Planificăm meticulos fiecare etapă și ne respectăm angajamentele privind termenele de livrare."
  }
];

const achievements = [
  "Peste 500 de proiecte finalizate cu succes",
  "Certificări ISO pentru managementul calității",
  "Echipă de specialiști cu experiență de peste 15 ani",
  "Tehnologii și echipamente de ultimă generație",
  "Partnerships cu furnizori premium de materiale",
  "Garanție extinsă pentru toate lucrările executate"
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-card-foreground">Despre</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">StoneCraft</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              StoneCraft Construction a fost înființată în 2003 cu viziunea de a deveni 
              liderul pieței în domeniul construcțiilor de calitate. În cei peste 20 de ani 
              de activitate, am construit o reputație solidă bazată pe profesionalism, 
              inovație și dedicare totală față de clienții noștri.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ne mândrim cu o echipă de profesioniști pasionați care transformă fiecare 
              proiect într-o operă de artă. De la case de vis la complexe comerciale, 
              fiecare construcție poartă amprenta excelenței noastre.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-card-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-professional"
            >
              Descoperă Povestea Noastră
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Content - Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group bg-background border-border hover:border-primary/50 transition-all duration-300 shadow-subtle hover:shadow-professional"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-accent rounded-2xl shadow-professional">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Misiunea Noastră
            </h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              "Să construim nu doar clădiri, ci fundația pentru visurile și aspirațiile 
              clienților noștri. Fiecare proiect este o oportunitate de a demonstra că 
              excelența în construcții nu este doar un obiectiv, ci o promisiune pe care 
              o respectăm în fiecare zi."
            </p>
            <div className="mt-6 text-primary-foreground/80 font-medium">
              - Echipa StoneCraft Construction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};