import { supabase } from "@/lib/supabaseClient";

export const createBookingRequest = async (bookingData) => {
  const { data, error } = await supabase
    .from("booking_requests")      // Table name: booking_requests (use underscore, not escaped)
    .insert([bookingData]);        // Remove .select() for simpler inserts

  if (error) {
  const errorMsg = error.message ? error.message : String(error);
  console.error("Error inserting booking:", errorMsg);
  return { success: false, error: errorMsg };
}

  return { success: true, data };
};
