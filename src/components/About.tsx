import React from 'react';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Customers", value: "2,500+" },
    { icon: Award, label: "Projects Completed", value: "5,000+" },
    { icon: ShieldCheck, label: "Safety Rating", value: "100%" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose PowerLine Electric?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience serving the community, we've built a reputation 
              for reliable, safe, and professional electrical services. Our team of licensed 
              electricians is committed to delivering exceptional workmanship on every project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">Fully licensed, bonded, and insured for your peace of mind.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
                  <p className="text-gray-600">Available around the clock for electrical emergencies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Workmanship</h3>
                  <p className="text-gray-600">We stand behind our work with comprehensive warranties.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional electrician team"
              className="rounded-lg shadow-lg mb-8"
            />
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;