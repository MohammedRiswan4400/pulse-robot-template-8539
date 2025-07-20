import React from "react";

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="about">
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
            <span>About Us</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4">
            Welcome to Lilees<br className="hidden sm:block" />Convention Centre
          </h2>
          <p className="section-subtitle mx-auto">
            A premier venue that combines elegance, functionality, and exceptional service to create unforgettable experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                For over two decades, Lilees Convention Centre has been the cornerstone of exceptional events in our community. 
                Our commitment to excellence has made us the preferred choice for corporate conferences, trade shows, 
                weddings, and social gatherings.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We strive to provide an inspiring environment where meaningful connections are made, 
                ideas are shared, and memories are created. Every event at Lilees is crafted with 
                attention to detail and personalized service.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-pulse-500 mb-2">20+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pulse-500 mb-2">5000+</div>
                <div className="text-sm text-gray-600">Successful Events</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/hero-image.jpg" 
                alt="Lilees Convention Centre Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;