/*
  # Fix profiles table policies

  1. Changes
    - Add policy for inserting new profiles
    - Modify existing policies to be more permissive
    - Add policy for service role access

  2. Security
    - Maintain RLS while allowing profile creation
    - Enable service role access for admin operations
*/

-- Allow authenticated users to insert their own profile
CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Allow service role full access
CREATE POLICY "Service role has full access"
  ON profiles
  TO service_role
  USING (true)
  WITH CHECK (true);