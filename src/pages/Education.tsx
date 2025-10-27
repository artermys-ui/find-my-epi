import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Heart, Siren, Syringe, Phone, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Allergy Education</h1>
            <p className="text-lg text-muted-foreground">
              Learn about severe allergies, recognizing symptoms, and how to respond in emergencies
            </p>
          </div>

          {/* What is Anaphylaxis */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <AlertTriangle className="h-6 w-6 text-primary" />
                What is Anaphylaxis?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Anaphylaxis is a severe, potentially life-threatening allergic reaction that can occur within seconds or minutes of exposure to an allergen. It affects the whole body and requires immediate medical attention.
              </p>
              <p className="font-semibold text-foreground">
                Common Triggers Include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Foods (peanuts, tree nuts, shellfish, eggs, milk)</li>
                  <li>Insect stings (bees, wasps, hornets)</li>
                  <li>Medications (penicillin, aspirin)</li>
                  <li>Latex</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Exercise-induced reactions</li>
                  <li>Unknown causes (idiopathic)</li>
                  <li>Environmental allergens</li>
                  <li>Blood transfusions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Recognizing Symptoms */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-primary" />
                Recognizing the Symptoms
              </CardTitle>
              <CardDescription>
                Symptoms usually appear within minutes but can occur up to several hours after exposure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="skin">
                  <AccordionTrigger className="text-lg font-semibold">
                    Skin Symptoms
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Hives, itching, or flushed/pale skin</li>
                      <li>Swelling of the face, lips, tongue, or throat</li>
                      <li>Red, warm skin</li>
                      <li>Sense of impending doom</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="breathing">
                  <AccordionTrigger className="text-lg font-semibold">
                    Respiratory Symptoms
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Difficulty breathing or shortness of breath</li>
                      <li>Wheezing or tightness in chest</li>
                      <li>Coughing or throat tightness</li>
                      <li>Hoarse voice or difficulty swallowing</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="circulation">
                  <AccordionTrigger className="text-lg font-semibold">
                    Circulatory Symptoms
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Rapid or weak pulse</li>
                      <li>Drop in blood pressure</li>
                      <li>Dizziness or fainting</li>
                      <li>Loss of consciousness</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="digestive">
                  <AccordionTrigger className="text-lg font-semibold">
                    Digestive Symptoms
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Nausea or vomiting</li>
                      <li>Abdominal pain or cramping</li>
                      <li>Diarrhea</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Emergency Response */}
          <Card className="mb-6 border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Siren className="h-6 w-6 text-destructive" />
                Emergency Response Steps
              </CardTitle>
              <CardDescription className="text-base">
                Follow these steps immediately if you suspect anaphylaxis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-destructive text-destructive-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Use EpiPen Immediately</h3>
                    <p className="text-muted-foreground">
                      Do not wait to see if symptoms improve. Administer epinephrine auto-injector right away.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-destructive text-destructive-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Call 911</h3>
                    <p className="text-muted-foreground">
                      Always call emergency services immediately, even if symptoms seem to improve after using the EpiPen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-destructive text-destructive-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Position the Person</h3>
                    <p className="text-muted-foreground">
                      Have the person lie down flat (unless vomiting or having trouble breathing, then let them sit up). Elevate legs if possible.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-destructive text-destructive-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Second Dose if Needed</h3>
                    <p className="text-muted-foreground">
                      If symptoms do not improve or worsen after 5-15 minutes, give a second dose of epinephrine if available.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-destructive text-destructive-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Stay with the Person</h3>
                    <p className="text-muted-foreground">
                      Do not leave them alone. Monitor vital signs and be prepared to perform CPR if they stop breathing.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Use an EpiPen */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Syringe className="h-6 w-6 text-primary" />
                How to Use an EpiPen
              </CardTitle>
              <CardDescription>
                Follow these steps to properly administer an epinephrine auto-injector
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold mb-3">Step-by-Step Instructions:</p>
                <ol className="list-decimal list-inside space-y-3">
                  <li className="font-medium">
                    Remove the EpiPen from the carrier tube
                    <p className="text-sm text-muted-foreground ml-6 mt-1">
                      Pull off the blue safety cap
                    </p>
                  </li>
                  <li className="font-medium">
                    Hold the EpiPen with orange tip pointing downward
                    <p className="text-sm text-muted-foreground ml-6 mt-1">
                      Form a fist around the unit with the orange tip pointing down
                    </p>
                  </li>
                  <li className="font-medium">
                    Place the orange tip against the outer thigh
                    <p className="text-sm text-muted-foreground ml-6 mt-1">
                      Can be given through clothing if necessary. Hold at 90-degree angle.
                    </p>
                  </li>
                  <li className="font-medium">
                    Push down hard until you hear a click
                    <p className="text-sm text-muted-foreground ml-6 mt-1">
                      Hold firmly in place for 3 seconds (count slowly: 1, 2, 3)
                    </p>
                  </li>
                  <li className="font-medium">
                    Remove and massage the injection area
                    <p className="text-sm text-muted-foreground ml-6 mt-1">
                      Massage the area for 10 seconds. The orange tip will extend to cover the needle.
                    </p>
                  </li>
                  <li className="font-medium">
                    Get emergency medical help immediately
                    <p className="text-sm text-muted-foreground ml-6 mt-1">
                      Call 911 or go to the nearest emergency room. Take the used EpiPen with you.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="bg-primary/5 border border-primary/30 p-4 rounded-lg">
                <p className="font-semibold flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Important Tips:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-6">
                  <li>Never put your thumb over either end of the EpiPen</li>
                  <li>Do not inject into hands, feet, or buttocks</li>
                  <li>Always carry two EpiPens if prescribed</li>
                  <li>Check expiration date regularly</li>
                  <li>Keep at room temperature, avoid extreme heat or cold</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Prevention */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CheckCircle className="h-6 w-6 text-primary" />
                Prevention and Preparedness
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">If You Have Known Allergies:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Always carry your EpiPen with you</li>
                  <li>Wear medical alert identification</li>
                  <li>Inform friends, family, and coworkers about your allergy</li>
                  <li>Read food labels carefully</li>
                  <li>Inform restaurants about your allergies when dining out</li>
                  <li>Have an allergy action plan</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">For Parents and Caregivers:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Educate teachers and school staff about the allergy</li>
                  <li>Ensure EpiPens are available at school and during activities</li>
                  <li>Teach children to recognize symptoms</li>
                  <li>Practice using a trainer EpiPen</li>
                  <li>Update allergy action plans regularly</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="py-6">
              <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-bold text-lg">In Case of Emergency</p>
                  <p className="text-muted-foreground">
                    Always call 911 immediately if you suspect anaphylaxis, even after using an EpiPen
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Education;