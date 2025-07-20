import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FacilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  capacity: string;
  index: number;
}

const FacilityCard = ({ icon, title, description, capacity, index }: FacilityCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-3">{description}</p>
      <div className="text-pulse-500 font-medium text-sm">{capacity}</div>
    </div>
  );
};

const Facilities = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="facilities" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
            <span>Facilities</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            World-Class Venues<br className="hidden sm:block" />for Every Occasion
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            State-of-the-art facilities designed to accommodate events of all sizes with modern amenities and flexible configurations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FacilityCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"></path></svg>}
            title="Grand Ballroom"
            description="Our flagship venue featuring elegant chandeliers, premium sound system, and customizable lighting for memorable celebrations."
            capacity="Up to 500 guests"
            index={0}
          />
          <FacilityCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M14 22V2l-.01-.01L12 4l-1.99-2.01L10 2v20l2.01-.01L14 22z"></path><path d="M12 6h7v6h-7V6z"></path><path d="M12 14h4v2h-4v-2z"></path></svg>}
            title="Conference Hall"
            description="Modern presentation space with advanced A/V technology, perfect for corporate meetings and business conferences."
            capacity="Up to 200 attendees"
            index={1}
          />
          <FacilityCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M8 6v6M16 6v6M8 18v-2M16 18v-2M4 6h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z"></path></svg>}
            title="Exhibition Space"
            description="Flexible open floor plan ideal for trade shows, exhibitions, and product launches with ample natural light."
            capacity="Up to 1000 visitors"
            index={2}
          />
          <FacilityCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"></path><path d="M3 11h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11z"></path><path d="M9 15v2"></path><path d="M15 15v2"></path></svg>}
            title="Breakout Rooms"
            description="Private meeting spaces perfect for workshops, training sessions, and smaller group discussions."
            capacity="15-50 participants"
            index={3}
          />
          <FacilityCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>}
            title="VIP Lounge"
            description="Exclusive hospitality area with premium amenities for distinguished guests and special occasions."
            capacity="Up to 80 guests"
            index={4}
          />
          <FacilityCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path></svg>}
            title="Outdoor Terrace"
            description="Beautiful outdoor space with panoramic views, perfect for cocktail receptions and networking events."
            capacity="Up to 150 guests"
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;