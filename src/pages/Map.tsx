import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Navigation as NavigationIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

interface EpiPenLocation {
  id: string;
  name: string;
  address: string;
  description: string | null;
  latitude: number;
  longitude: number;
}

const Map = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const { data: locations, isLoading } = useQuery({
    queryKey: ["epipen-locations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("epipen_locations")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data as EpiPenLocation[];
    },
  });

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const sortedLocations = userLocation && locations
    ? [...locations].sort((a, b) => {
        const distA = calculateDistance(userLocation.lat, userLocation.lng, a.latitude, a.longitude);
        const distB = calculateDistance(userLocation.lat, userLocation.lng, b.latitude, b.longitude);
        return distA - distB;
      })
    : locations;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">EpiPen Locations</h1>
          <p className="text-muted-foreground">Find the nearest EpiPen location</p>
        </div>

        <div className="mb-6">
          <button
            onClick={getUserLocation}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get My Location
          </button>
          {userLocation && (
            <p className="mt-2 text-sm text-muted-foreground">
              Your location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading locations...</p>
          </div>
        ) : sortedLocations && sortedLocations.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sortedLocations.map((location) => {
              const distance = userLocation
                ? calculateDistance(
                    userLocation.lat,
                    userLocation.lng,
                    location.latitude,
                    location.longitude
                  )
                : null;

              return (
                <Card key={location.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{location.name}</span>
                    </CardTitle>
                    {distance && (
                      <CardDescription className="font-semibold text-primary">
                        {distance.toFixed(2)} km away
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">{location.address}</p>
                    {location.description && (
                      <p className="text-sm text-muted-foreground mb-4">{location.description}</p>
                    )}
                    <Button
                      onClick={() => {
                        const url = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
                        window.open(url, '_blank');
                      }}
                      className="w-full"
                      variant="outline"
                    >
                      <NavigationIcon className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No EpiPen locations found yet.</p>
              <p className="text-sm text-muted-foreground mt-2">Be the first to add one!</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Map;
