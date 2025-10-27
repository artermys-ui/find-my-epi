import { Link } from "react-router-dom";
import { MapPin, Plus, Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-epipen.jpg";
import communitySafety from "@/assets/community-safety.jpg";
import mapFeature from "@/assets/map-feature.jpg";
import addLocationFeature from "@/assets/add-location-feature.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="EpiPen emergency medical device"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            FindMyEpi
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Locate nearby EpiPens in emergencies. Save lives by finding epinephrine auto-injectors when every second counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/map">
                <MapPin className="mr-2 h-5 w-5" />
                Find Nearby EpiPens
              </Link>
            </Button>
            <Button asChild size="lg" variant="destructive" className="text-lg px-8 py-6">
              <Link to="/emergency">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Emergency Help
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              FindMyEpi makes it easy to find and share EpiPen locations in your community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={mapFeature} 
                  alt="Find EpiPen locations on interactive map" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Find Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  View a map of nearby EpiPen locations. Get directions and distance information to find the closest one.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={addLocationFeature} 
                  alt="Add new EpiPen locations to help community" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="mx-auto bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Plus className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Add New Spots</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Help the community by adding EpiPen locations you know about. It takes less than a minute.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Emergency Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Quick access to 911 and step-by-step EpiPen usage instructions for critical situations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={communitySafety} 
                alt="Diverse community members ensuring allergy safety together" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                    About Severe Allergies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Anaphylaxis is a severe, potentially life-threatening allergic reaction that can occur within seconds or minutes of exposure to an allergen. Common triggers include foods (peanuts, tree nuts, shellfish), insect stings, medications, and latex.
                  </p>
                  <p className="font-semibold text-foreground">
                    Symptoms of anaphylaxis include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Difficulty breathing or wheezing</li>
                    <li>Swelling of the face, lips, or throat</li>
                    <li>Rapid pulse or drop in blood pressure</li>
                    <li>Dizziness or loss of consciousness</li>
                    <li>Hives, itching, or flushed skin</li>
                  </ul>
                  <p className="font-semibold text-foreground">
                    If you suspect anaphylaxis, use an EpiPen immediately and call 911. Time is critical.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Help Your Community?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join FindMyEpi in making EpiPens more accessible to everyone who needs them
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link to="/add">
              <Plus className="mr-2 h-5 w-5" />
              Add an EpiPen Location
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
