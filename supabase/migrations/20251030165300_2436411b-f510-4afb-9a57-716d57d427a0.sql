-- Add UPDATE policy to restrict modifications to location owners only
CREATE POLICY "Users can update their own EpiPen locations"
ON public.epipen_locations
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Add DELETE policy to restrict deletions to location owners only
CREATE POLICY "Users can delete their own EpiPen locations"
ON public.epipen_locations
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);