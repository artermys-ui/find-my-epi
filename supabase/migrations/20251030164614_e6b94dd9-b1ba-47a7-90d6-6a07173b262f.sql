-- Drop the old unrestricted INSERT policy
DROP POLICY IF EXISTS "Anyone can add EpiPen locations" ON public.epipen_locations;

-- Create new policy requiring authentication to add locations
CREATE POLICY "Authenticated users can add EpiPen locations"
ON public.epipen_locations
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL);

-- Add user_id column to track who added each location
ALTER TABLE public.epipen_locations
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id);

-- Update the policy to set user_id automatically
DROP POLICY IF EXISTS "Authenticated users can add EpiPen locations" ON public.epipen_locations;

CREATE POLICY "Authenticated users can add EpiPen locations"
ON public.epipen_locations
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);