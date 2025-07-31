import React from 'react';
import { CheckCircle, Phone, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Professional Electrical Services You Can Trust
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Licensed electricians providing safe, reliable electrical solutions for your home and business. 
              Available 24/7 for emergencies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:5551234658"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
                <span>Get Free Estimate</span>
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200"
              >
                View Services
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-amber-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-amber-400" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-amber-400" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-amber-400" />
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional electrician at work"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold">Available 24/7</p>
              <p className="text-sm">Emergency Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;