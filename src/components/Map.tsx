import React from "react";

const Map = () => {
  return (
    <section className="w-full py-8 bg-white" id="map">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl mb-4">
            Find Us
          </h2>
          <p className="section-subtitle">
            Conveniently located in the heart of the city with easy access and ample parking.
          </p>
        </div>
        
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5273969843934!2d-74.0059413843531!3d40.71427597932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e8db0a7%3A0xd0236d5c45b4b347!2sOne%20World%20Trade%20Center%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2s!4v1620309452321!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lilees Convention Centre Location"
          ></iframe>
        </div>
        
        <div className="mt-6 text-center">
          <div className="text-gray-600">
            <strong>Lilees Convention Centre</strong><br />
            123 Convention Drive, Downtown District<br />
            City 12345<br />
            Phone: +91 8138875540
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;