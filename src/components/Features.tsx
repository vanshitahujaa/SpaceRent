import React from 'react';
import { Warehouse, Building, Home, Clock, Shield, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Warehouse,
    title: 'Warehouses',
    description: 'Find spacious warehouses for your storage and logistics needs'
  },
  {
    icon: Building,
    title: 'Business Spaces',
    description: 'Discover perfect office spaces and retail locations'
  },
  {
    icon: Home,
    title: 'Living Spaces',
    description: 'Browse through comfortable residential properties'
  },
  {
    icon: Clock,
    title: 'Easy Booking',
    description: 'Schedule viewings with just a few clicks'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Your data and transactions are always protected'
  },
  {
    icon: CreditCard,
    title: 'Simple Payments',
    description: 'Hassle-free rent payments and deposits'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything You Need in One Place
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover all the features that make finding and managing properties easier than ever.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute top-6 left-6">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-12">
                <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}