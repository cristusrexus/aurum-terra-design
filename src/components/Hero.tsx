import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="StoneCraft Construction - Construcții profesionale"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Construim</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Viitorul</span>{" "}
            <span className="text-foreground">Împreună</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Cu peste 20 de ani de experiență în construcții, StoneCraft Construction 
            transformă viziunile dumneavoastră în realități solide și durabile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-professional"
            >
              Solicită Ofertă
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold"
            >
              Vezi Proiectele Noastre
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">500+</span>
              </div>
              <p className="text-muted-foreground">Proiecte Finalizate</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">50+</span>
              </div>
              <p className="text-muted-foreground">Specialiști Profesioniști</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">20+</span>
              </div>
              <p className="text-muted-foreground">Ani de Experiență</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};