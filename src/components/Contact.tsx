import TypChooser from './ui/type-chooser';
import React, { useState } from 'react';
import { supabase } from "@/lib/supabaseClient";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";



const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("no"); // default selected is "no"
  const [eventType, setEventType] = useState("wedding");  // <-- move here
  const [phone, setPhone] = useState("+91 ");
  const [phoneError, setPhoneError] = useState("");
  // States for the form inputs
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
  const day = String(today.getDate()).padStart(2, '0');
  const currentDate = `${year}-${month}-${day}`;


  // States for form submission
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Hardcoded convention ID as required by your table
  const conventionId = "52082631-c492-4f54-a606-e385c1997661";

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form behavior (page reload)

     const numericPhone = phone.substring(4); // 👈 Change substring to 4
    if (numericPhone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }
    setLoading(true);
    setMessage(""); // Clear any previous messages

    // Create a data object from the form state
    const bookingData = {
      name: firstName,
      address: address,
      mobile_no: phone.replace(/\s/g, ''),
      event_type: eventType,
      is_reception: selectedOption === 'yes', // Convert "yes"/"no" string to boolean
      convention_id: conventionId,
      date: currentDate,
      event_other_name: null,
      // You may also want to add a 'created_at' date or other fields
    };

    // Insert the data into the 'booking_requests' table in Supabase
    const { error } = await supabase.from("booking_requests").insert([bookingData]);

    setLoading(false);

    if (error) {
      // Handle the error and show a message to the user
      setMessage(`Error: ${error.message}`);
      console.error("Error inserting data:", error);
    } else {
      // On success, show a success message and clear the form
      setMessage("Your booking request was sent successfully!");
      console.log("Successfully added booking data");
      setFirstName("");
      setAddress("");
      setPhone("");
      setEventType("wedding");
      setSelectedOption("no");
    }
  };

  // New handler for phone number input
  const handlePhoneChange = (e) => {
    const value = e.target.value;

    // Ensure the value always starts with "+91"
    if (!value.startsWith("+91 ")) {
      // If the user tries to delete the space or +91, we add it back
      return;
    }

    // Extract the part of the string after "+91"
    const numericPart = value.substring(4);

    // Filter out non-numeric characters from the input
    const filteredValue = numericPart.replace(/\D/g, "");

    // Check if the length exceeds 10 digits
    if (filteredValue.length > 10) {
      setPhoneError("Phone number cannot exceed 10 digits.");
      return;
    }

    // Update the phone state with the cleaned value
    setPhone("+91 " + filteredValue);
    setPhoneError("");
  };
  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-gray-50" id="contact">
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
            <span>Contact</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4">
            Let's Plan Your<br className="hidden sm:block" />Perfect Event
          </h2>
          <p className="section-subtitle mx-auto">
            Get in touch with our experienced event team to start planning your memorable occasion at White Lilies Convention Centre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pulse-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-pulse-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+91 8138845540</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pulse-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-pulse-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">events@liliesconvention.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pulse-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-pulse-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">White Lilies Convention Center<br />Kodumudi, 676552<br />Malappuram<br />Kerala</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Booking</h4>
              <p className="text-gray-600 mb-4">
                Book your event<br/>call now!
              </p>
              <a
                href="tel:+91 8138845540"
                className="inline-flex items-center justify-center group text-center bg-pulse-500 hover:bg-pulse-600 text-white rounded-full px-6 py-3 transition-colors duration-300"
              >
                Call Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Information</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-pulse-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={4}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-pulse-500 transition-colors"
                  placeholder="Tell us about your event..."
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-pulse-500 transition-colors"
                  placeholder="+91 8138845540"
                  required
                />
                {phoneError && <p className="mt-1 text-sm text-red-500">{phoneError}</p>}
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-pulse-500 transition-colors"
                  required
                >
                  <option value="wedding">Wedding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reception ?
                </label>
                <div className="mt-4">
                  <TypChooser
                    selectedValue={selectedOption}
                    labels={['No', 'Yes']}
                    options={['no', 'yes']}
                    onChanged={setSelectedOption}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading} // Disable the button while submitting
                className="w-full bg-pulse-500 hover:bg-pulse-600 text-white rounded-lg px-6 py-3 font-medium transition-colors duration-300 flex items-center justify-center group disabled:bg-gray-400"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              {/* Display a success or error message */}
              {message && (
                <p className={`mt-3 text-sm text-center ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Contact;