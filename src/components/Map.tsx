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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.064581193823!2d76.1131661!3d10.87951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c917c937f8c7%3A0x3f0abd8e428f9fb8!2sWhite%20Lilies%20Convention%20Center%20Kodumudi!5e0!3m2!1sen!2s!4v1724490000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="White Lilies Convention Centre Location"
          ></iframe>
        </div>
        
        <div className="mt-6 text-center">
          <div className="text-gray-600">
            <strong>White Lilies Convention Centre</strong><br />
            123 Convention Drive, Downtown District<br />
            City 12345<br />
            Phone: +91 8138845540
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;