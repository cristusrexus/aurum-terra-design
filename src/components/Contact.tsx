import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building,
  CheckCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresa Sediului",
    details: ["Str. Constructorilor nr. 15", "Sector 2, București", "România"]
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["+40 123 456 789", "+40 987 654 321", "Urgențe: +40 555 123 456"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@stonecraft.ro", "oferte@stonecraft.ro", "urgente@stonecraft.ro"]
  },
  {
    icon: Clock,
    title: "Program de Lucru",
    details: ["Luni - Vineri: 08:00 - 18:00", "Sâmbătă: 09:00 - 14:00", "Duminică: Închis"]
  }
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Eroare!",
        description: "Vă rugăm să completați toate câmpurile obligatorii.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mesaj trimis cu succes!",
      description: "Vă vom contacta în cel mai scurt timp posibil.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Contactează-ne</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Astăzi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ești gata să îți transformi visul în realitate? Contactează echipa StoneCraft 
            pentru o consultanță gratuită și o ofertă personalizată.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-border shadow-subtle">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="mt-6 bg-gradient-accent border-none shadow-professional">
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                  Consultanță Gratuită
                </h3>
                <p className="text-primary-foreground/90 mb-4">
                  Programează o întâlnire gratuită cu specialiștii noștri.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Programează Acum
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border shadow-professional">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">
                  Solicită o Ofertă Personalizată
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Nume Complet *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Introduceți numele dumneavoastră"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nume@email.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Telefon
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+40 123 456 789"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Tipul Proiectului
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Selectează tipul proiectului</option>
                        <option value="rezidential">Construcție Rezidențială</option>
                        <option value="comercial">Construcție Comercială</option>
                        <option value="renovare">Renovare/Modernizare</option>
                        <option value="reparatii">Reparații</option>
                        <option value="exterior">Amenajare Exterioară</option>
                        <option value="consultanta">Consultanță/Design</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Descrierea Proiectului *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descrieți detaliat proiectul dumneavoastră, inclusiv dimensiuni aproximative, locația, termenele dorite și orice alte detalii relevante..."
                      rows={6}
                      required
                      className="w-full resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Răspundem în maximum 24 de ore</span>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold shadow-professional"
                  >
                    Trimite Solicitarea
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};