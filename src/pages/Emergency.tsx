import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Emergency = () => {
  const handleCall911 = () => {
    window.location.href = "tel:911";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <h1 className="text-4xl font-bold text-foreground">Emergency</h1>
            </div>
            <p className="text-muted-foreground">Quick access to emergency services and EpiPen instructions</p>
          </div>

          <Card className="mb-6 border-destructive bg-destructive/5">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Call Emergency Services</CardTitle>
              <CardDescription>Dial 911 for immediate assistance</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                size="lg"
                onClick={handleCall911}
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground text-xl py-8 px-12"
              >
                <Phone className="h-8 w-8 mr-3" />
                Call 911
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How to Use an EpiPen</CardTitle>
              <CardDescription>Follow these steps carefully in case of severe allergic reaction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Remove the EpiPen from its carrier tube</h3>
                    <p className="text-muted-foreground">Pull off the blue safety release by pulling straight up. Do not bend or twist.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Grip the EpiPen properly</h3>
                    <p className="text-muted-foreground">Hold the EpiPen with the orange tip pointing downward. Form a fist around the auto-injector.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Position against outer thigh</h3>
                    <p className="text-muted-foreground">Place the orange tip against the middle of the outer thigh, at a right angle (perpendicular) to the thigh. You can administer through clothing if necessary.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Push down firmly and hold</h3>
                    <p className="text-muted-foreground">Push down hard until you hear a click. Hold firmly in place for 3 seconds (count slowly: "1, 2, 3").</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Remove and massage</h3>
                    <p className="text-muted-foreground">Remove the EpiPen from the thigh. Massage the injection area for 10 seconds.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call 911 immediately</h3>
                    <p className="text-muted-foreground">Even if symptoms improve, call 911 or get emergency medical help right away. Take the used EpiPen with you to the hospital.</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 text-destructive">⚠️ Important Warnings</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    <li>Always call 911 after using an EpiPen</li>
                    <li>A second dose may be needed if symptoms persist after 5-15 minutes</li>
                    <li>Keep the person lying down (unless having breathing problems)</li>
                    <li>Do not put anything in the person's mouth</li>
                    <li>Note the time the EpiPen was administered</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Emergency;
