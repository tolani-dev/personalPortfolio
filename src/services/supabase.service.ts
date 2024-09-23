import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://jxfuflkasmfxzksjsiic.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4ZnVmbGthc21meHprc2pzaWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1MDYyNjIsImV4cCI6MjA0MjA4MjI2Mn0.YpMS99eO6yL1wEa3dMGAW61M9hYVhpSf8FRIa_jRsew"
);

export const saveEmail = async (email_address: any) => {
  try {
    const { data, error } = await supabase
      .from("newsletter")
      .insert([{ email_address }]);
    // console.log(data);
    return {
      error,
      data,
    };
  } catch (error) {
    console.log("error", error);
    return {
      error,
      data: null,
    };
  }
};
export const deleteEmail = async (email: any) => {
  try {
    const { data, error } = await supabase
      .from("newsletter")
      .delete()
      .eq("email_address", email);
    // console.log(data);
    return {
      error,
      data,
    };
  } catch (error) {
    console.log("error", error);
    return {
      error,
      data: null,
    };
  }
};
