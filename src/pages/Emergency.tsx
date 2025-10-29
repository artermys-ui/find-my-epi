import { Phone, AlertTriangle, MessageSquare, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EmergencyContact {
  name: string;
  phone_number: string;
}

const Emergency = () => {
  const [emergencyContact, setEmergencyContact] = useState<EmergencyContact | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Load emergency contact from localStorage
    const saved = localStorage.getItem("emergencyContact");
    if (saved) {
      setEmergencyContact(JSON.parse(saved));
    }
  }, []);

  const handleSaveContact = () => {
    if (!name || !phoneNumber) return;

    const contact = { name, phone_number: phoneNumber };
    localStorage.setItem("emergencyContact", JSON.stringify(contact));
    setEmergencyContact(contact);
    setIsDialogOpen(false);
    setName("");
    setPhoneNumber("");

    toast({
      title: "Success",
      description: "Emergency contact saved",
    });
  };

  const handleDeleteContact = () => {
    localStorage.removeItem("emergencyContact");
    setEmergencyContact(null);
    toast({
      title: "Success",
      description: "Emergency contact removed",
    });
  };

  const handleCall911 = () => {
    window.location.href = "tel:911";
  };

  const handleTextContact = () => {
    if (emergencyContact) {
      const message = encodeURIComponent("EMERGENCY: I'm having an allergic reaction and need help. Please call 911.");
      window.location.href = `sms:${emergencyContact.phone_number}?body=${message}`;
    }
  };

  const openEditDialog = () => {
    if (emergencyContact) {
      setName(emergencyContact.name);
      setPhoneNumber(emergencyContact.phone_number);
    }
    setIsDialogOpen(true);
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

          <Card className="mb-6">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Emergency Contact</CardTitle>
              <CardDescription>
                {emergencyContact
                  ? "Send a quick alert to your emergency contact"
                  : "Add an emergency contact to enable quick alerts"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {emergencyContact ? (
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg border border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{emergencyContact.name}</h3>
                        <p className="text-muted-foreground">{emergencyContact.phone_number}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={openEditDialog}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={handleDeleteContact}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    onClick={handleTextContact}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Send Emergency Text to {emergencyContact.name}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="+1234567890"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="mt-1.5"
                    />
                  </div>
                  <Button
                    onClick={handleSaveContact}
                    disabled={!name || !phoneNumber}
                    className="w-full"
                  >
                    Save Emergency Contact
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Emergency Contact</DialogTitle>
                <DialogDescription>
                  Update your emergency contact information
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="edit-name">Name</Label>
                  <Input
                    id="edit-name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="edit-phone">Phone Number</Label>
                  <Input
                    id="edit-phone"
                    type="tel"
                    placeholder="+1234567890"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <Button
                  onClick={handleSaveContact}
                  disabled={!name || !phoneNumber}
                  className="w-full"
                >
                  Save Changes
                </Button>
              </div>
            </DialogContent>
          </Dialog>

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
