// src/components/AddTestData.tsx

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const AddTestData = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const addHardcodedBooking = async () => {
    setLoading(true);
    setMessage("");

    // --- YOUR HARDCODED DATA ---
    const testBooking = {
      name: "Test Client",
      address: "123 React Lane, Codeville",
      mobile_no: "9998887770",
      date: "2025-12-25",
      event_type: "wedding",
      is_reception: false,
      event_other_name: null,
      convention_id: "52082631-c492-4f54-a606-e385c1997661", // 👈 Add this line
    };
    // -------------------------

    // Insert the data into the 'booking_requests' table
    const { error } = await supabase.from("booking_requests").insert([testBooking]);

    setLoading(false);

    if (error) {
      setMessage(`Error: ${error.message}`);
      console.error("Error inserting data:", error);
    } else {
      setMessage("Hardcoded booking was added successfully!");
      console.log("Successfully added data");
    }
  };

  return (
    <div className="p-4 my-6 border rounded-lg text-center">
      <h3 className="text-lg font-semibold">Developer Tools</h3>
      <p className="text-sm text-gray-600 mb-3">Use this button to add a test booking.</p>
      <button
        onClick={addHardcodedBooking}
        disabled={loading}
        className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
      >
        {loading ? "Adding..." : "Add Hardcoded Data"}
      </button>
      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
};

export default AddTestData;