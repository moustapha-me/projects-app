import React from 'react';
import { 
  Home, 
  Building2, 
  Lightbulb, 
  Plug, 
  Shield, 
  Wrench,
  AlertTriangle,
  Settings
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Electrical",
      description: "Complete home electrical services including wiring, outlets, switches, and panel upgrades.",
      features: ["New Construction", "Rewiring", "Panel Upgrades", "Code Compliance"]
    },
    {
      icon: Building2,
      title: "Commercial Electrical",
      description: "Professional electrical solutions for offices, retail spaces, and industrial facilities.",
      features: ["Office Wiring", "Lighting Systems", "Emergency Power", "Maintenance"]
    },
    {
      icon: Lightbulb,
      title: "Lighting Installation",
      description: "Indoor and outdoor lighting solutions to enhance your space's functionality and aesthetics.",
      features: ["LED Upgrades", "Landscape Lighting", "Smart Lighting", "Security Lighting"]
    },
    {
      icon: Plug,
      title: "Outlet & Switch Installation",
      description: "Installation and repair of outlets, switches, and GFCI protection throughout your property.",
      features: ["GFCI Outlets", "USB Outlets", "Smart Switches", "Additional Outlets"]
    },
    {
      icon: Shield,
      title: "Electrical Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure your property meets all safety codes.",
      features: ["Safety Audits", "Code Compliance", "Insurance Inspections", "Preventive Maintenance"]
    },
    {
      icon: AlertTriangle,
      title: "Emergency Electrical Services",
      description: "24/7 emergency electrical services for power outages, electrical hazards, and urgent repairs.",
      features: ["Power Restoration", "Emergency Repairs", "Hazard Resolution", "24/7 Availability"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Electrical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple repairs to complex installations, we provide comprehensive electrical solutions 
            for residential and commercial properties.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="tel:5551234658"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors duration-200"
          >
            <Settings className="h-5 w-5" />
            <span>Schedule Service</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;