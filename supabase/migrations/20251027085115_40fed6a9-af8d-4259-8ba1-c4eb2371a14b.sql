-- Create table for EpiPen locations
CREATE TABLE public.epipen_locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  description text,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.epipen_locations ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read locations (public data for emergencies)
CREATE POLICY "Anyone can view EpiPen locations"
  ON public.epipen_locations
  FOR SELECT
  USING (true);

-- Allow anyone to insert new locations
CREATE POLICY "Anyone can add EpiPen locations"
  ON public.epipen_locations
  FOR INSERT
  WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.epipen_locations
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Create index for geospatial queries
CREATE INDEX idx_epipen_locations_coords ON public.epipen_locations(latitude, longitude);