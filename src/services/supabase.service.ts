import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.VUE_APP_SUPA_URL || "",
  process.env.VUE_APP_SUPA_KEY || ""
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
