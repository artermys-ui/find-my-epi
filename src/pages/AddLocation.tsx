import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import heroAddLocation from "@/assets/hero-add-location.jpg";
import { z } from "zod";

const AddLocation = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Please sign in to add locations");
        navigate("/auth");
        return;
      }
      setUserId(session.user.id);
    };
    checkAuth();
  }, [navigate]);

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          }));
          toast.success("Location captured!");
        },
        (error) => {
          toast.error("Could not get your location. Please enter manually.");
          console.error("Geolocation error:", error);
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.address || !formData.latitude || !formData.longitude) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Validate input
    const locationSchema = z.object({
      name: z.string().trim().min(1, "Name is required").max(200, "Name must be less than 200 characters"),
      address: z.string().trim().min(5, "Address must be at least 5 characters").max(500, "Address must be less than 500 characters"),
      description: z.string().trim().max(1000, "Description must be less than 1000 characters").nullable(),
      latitude: z.number().min(-90, "Latitude must be between -90 and 90").max(90, "Latitude must be between -90 and 90"),
      longitude: z.number().min(-180, "Longitude must be between -180 and 180").max(180, "Longitude must be between -180 and 180")
    });

    const lat = parseFloat(formData.latitude);
    const lng = parseFloat(formData.longitude);

    if (isNaN(lat) || isNaN(lng)) {
      toast.error("Invalid coordinates. Please enter valid numbers.");
      return;
    }

    try {
      const validated = locationSchema.parse({
        name: formData.name.trim(),
        address: formData.address.trim(),
        description: formData.description.trim() || null,
        latitude: lat,
        longitude: lng
      });

      setIsSubmitting(true);

      if (!userId) {
        toast.error("Please sign in to add locations");
        navigate("/auth");
        return;
      }

      const { error } = await supabase.from("epipen_locations").insert({
        name: validated.name,
        address: validated.address,
        description: validated.description,
        latitude: validated.latitude,
        longitude: validated.longitude,
        user_id: userId,
      });

      if (error) throw error;

      toast.success("EpiPen location added successfully!");
      navigate("/map");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        console.error("Error adding location:", error);
        toast.error("Failed to add location. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroAddLocation} 
            alt="Community collaboration to add EpiPen locations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Add EpiPen Location
          </h1>
          <p className="text-xl text-muted-foreground">
            Help others by adding a new EpiPen location to our community map
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Location Details
              </CardTitle>
              <CardDescription>
                Enter the details of the EpiPen location
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Location Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Central Park Visitor Center"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    placeholder="e.g., 123 Main St, City, State"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Additional details (e.g., 'Located at the front desk')"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="latitude">Latitude *</Label>
                    <Input
                      id="latitude"
                      type="number"
                      step="any"
                      placeholder="e.g., 40.7589"
                      value={formData.latitude}
                      onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="longitude">Longitude *</Label>
                    <Input
                      id="longitude"
                      type="number"
                      step="any"
                      placeholder="e.g., -73.9851"
                      value={formData.longitude}
                      onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGetCurrentLocation}
                  className="w-full"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Use My Current Location
                </Button>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/map")}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? "Adding..." : "Add Location"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AddLocation;
