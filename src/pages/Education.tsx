import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Heart, Siren, Syringe, Phone, CheckCircle, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import epipenInstructions from "@/assets/epipen-instructions.jpg";
import heroEducation from "@/assets/hero-education.jpg";

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroEducation} 
            alt="Allergy education and medical learning resources"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Allergy Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn about severe allergies, recognizing symptoms, and how to respond in emergencies
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          {/* When to Use an EpiPen */}
          <Card className="mb-6 border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Siren className="h-6 w-6 text-primary" />
                When to Use an EpiPen
              </CardTitle>
              <CardDescription className="text-base">
                Recognizing when epinephrine is needed can save a life
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-background/50 p-4 rounded-lg">
                <p className="font-semibold mb-3 text-lg">Use an EpiPen immediately if you notice:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li className="font-medium">Two or more body systems affected (e.g., skin AND breathing)</li>
                  <li className="font-medium">Difficulty breathing, wheezing, or throat tightness</li>
                  <li className="font-medium">Swelling of lips, tongue, or throat</li>
                  <li className="font-medium">Significant drop in blood pressure or dizziness</li>
                  <li className="font-medium">Severe abdominal pain or vomiting after allergen exposure</li>
                  <li className="font-medium">Loss of consciousness or feeling like you might pass out</li>
                </ul>
              </div>
              
              <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
                <p className="font-bold text-lg mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  When in doubt, use it!
                </p>
                <p className="text-sm">
                  The risks of delaying epinephrine far outweigh the risks of using it. According to the CDC, 
                  early administration of epinephrine is critical in preventing fatal outcomes from anaphylaxis.
                </p>
              </div>

              <p className="text-xs text-muted-foreground italic">
                Source: Centers for Disease Control and Prevention (CDC) - Anaphylaxis Guidelines
              </p>
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
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={epipenInstructions} 
                    alt="EpiPen usage instructions diagram" 
                    className="w-full rounded-lg border border-border shadow-sm"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="font-semibold mb-3 text-lg">Step-by-Step Instructions:</p>
                    <ol className="list-decimal list-inside space-y-3">
                      <li className="font-medium">
                        Remove the blue safety cap
                        <p className="text-sm text-muted-foreground ml-6 mt-1">
                          Pull it straight off - do not twist
                        </p>
                      </li>
                      <li className="font-medium">
                        Hold orange tip against outer thigh
                        <p className="text-sm text-muted-foreground ml-6 mt-1">
                          Can inject through clothing. Use at 90-degree angle
                        </p>
                      </li>
                      <li className="font-medium">
                        Push down hard until you hear a click
                        <p className="text-sm text-muted-foreground ml-6 mt-1">
                          You will hear and feel the injection start
                        </p>
                      </li>
                      <li className="font-medium">
                        Hold firmly for 3 seconds
                        <p className="text-sm text-muted-foreground ml-6 mt-1">
                          Count slowly: 1, 2, 3
                        </p>
                      </li>
                      <li className="font-medium">
                        Remove and massage area for 10 seconds
                        <p className="text-sm text-muted-foreground ml-6 mt-1">
                          Orange tip will extend to cover needle
                        </p>
                      </li>
                      <li className="font-medium">
                        Call 911 immediately
                        <p className="text-sm text-muted-foreground ml-6 mt-1">
                          Take the used EpiPen with you to the hospital
                        </p>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-primary/5 border border-primary/30 p-4 rounded-lg">
                    <p className="font-semibold flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Important Safety Tips:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                      <li>Never put thumb over either end</li>
                      <li>Do not inject into hands, feet, or buttocks</li>
                      <li>Always carry two EpiPens if prescribed</li>
                      <li>Keep at room temperature (not in car)</li>
                      <li>Check expiration date regularly</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground italic">
                Source: EpiPen® Official Usage Guidelines and FDA-Approved Instructions
              </p>
            </CardContent>
          </Card>
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
              <p className="text-xs text-muted-foreground italic">
                Source: National Institute of Allergy and Infectious Diseases (NIAID), CDC
              </p>
            </CardContent>
          </Card>

          {/* Allergy Safety Tips */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <ShieldCheck className="h-6 w-6 text-primary" />
                Allergy Safety Tips
              </CardTitle>
              <CardDescription>
                Essential practices for managing severe allergies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Daily Prevention:</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Always carry your EpiPen - keep one at home, work, and in your bag</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Wear medical alert identification jewelry at all times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Read all food labels carefully, even for familiar products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Inform friends, family, and coworkers about your allergies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Keep emergency contact information easily accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Have an allergy action plan written and shared with loved ones</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-3">When Dining Out:</h3>
                <ul className="space-y-2 list-disc list-inside ml-2">
                  <li>Always inform restaurant staff about your allergies before ordering</li>
                  <li>Ask about ingredients and cross-contamination prevention</li>
                  <li>Avoid buffets and shared serving utensils when possible</li>
                  <li>Consider calling ahead to restaurants to discuss your needs</li>
                  <li>Carry your EpiPen to the table, not left in a bag or car</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">For Parents and Caregivers:</h3>
                <ul className="space-y-2 list-disc list-inside ml-2">
                  <li>Educate teachers, coaches, and school staff about the child&apos;s allergy</li>
                  <li>Ensure EpiPens are available at school, daycare, and during activities</li>
                  <li>Teach children to recognize their own symptoms as early as possible</li>
                  <li>Practice using a trainer EpiPen with your child</li>
                  <li>Create a 504 plan or allergy action plan with the school</li>
                  <li>Update emergency contacts and allergy action plans annually</li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/30 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Medication Management:</h3>
                <ul className="space-y-2 list-disc list-inside ml-2">
                  <li>Check expiration dates monthly - expired EpiPens may not work effectively</li>
                  <li>Store at room temperature (59-86°F / 15-30°C)</li>
                  <li>Protect from light - keep in the carrier tube</li>
                  <li>Do not refrigerate or leave in hot car</li>
                  <li>Replace if solution is discolored or contains particles</li>
                </ul>
              </div>

              <p className="text-xs text-muted-foreground italic">
                Sources: Food Allergy Research & Education (FARE), American Academy of Allergy, Asthma & Immunology (AAAAI)
              </p>
            </CardContent>
          </Card>

          {/* What is Anaphylaxis */}
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
              <p className="text-xs text-muted-foreground italic">
                Source: American College of Allergy, Asthma & Immunology (ACAAI)
              </p>
            </CardContent>
          </Card>
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
              <p className="text-xs text-muted-foreground italic">
                Source: CDC Emergency Response Guidelines, American Heart Association (AHA)
              </p>
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