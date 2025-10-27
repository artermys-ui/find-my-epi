-- Add state column to epipen_locations table
ALTER TABLE public.epipen_locations 
ADD COLUMN state TEXT NOT NULL DEFAULT 'NY';

-- Update existing locations with appropriate states
UPDATE public.epipen_locations 
SET state = 'NY';