import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Building2, DollarSign, Ruler, Filter } from 'lucide-react';

// Mock data for properties
const properties = [
  {
    id: 1,
    type: 'Warehouse',
    title: 'Modern Warehouse Space',
    location: 'Brooklyn, NY',
    price: 2500,
    size: 1500,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    amenities: ['24/7 Access', 'Loading Dock', 'Security System']
  },
  {
    id: 2,
    type: 'Office',
    title: 'Downtown Office Suite',
    location: 'Manhattan, NY',
    price: 3500,
    size: 800,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    amenities: ['Meeting Rooms', 'Kitchen', 'High-speed Internet']
  },
  {
    id: 3,
    type: 'Residential',
    title: 'Luxury Apartment',
    location: 'Queens, NY',
    price: 4000,
    size: 1200,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    amenities: ['Parking', 'Gym', 'Doorman']
  },
  {
    id: 4,
    type: 'Warehouse',
    title: 'Industrial Storage Facility',
    location: 'Bronx, NY',
    price: 1800,
    size: 2000,
    image: 'https://images.unsplash.com/photo-1586528116493-ce42b3fbf660?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    amenities: ['Climate Control', 'Security', 'Drive-in Door']
  },
  {
    id: 5,
    type: 'Office',
    title: 'Creative Coworking Space',
    location: 'Brooklyn, NY',
    price: 2000,
    size: 600,
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    amenities: ['24/7 Access', 'Meeting Rooms', 'Event Space']
  },
  {
    id: 6,
    type: 'Residential',
    title: 'Modern Studio Apartment',
    location: 'Manhattan, NY',
    price: 3000,
    size: 500,
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    amenities: ['Furnished', 'Utilities Included', 'Rooftop Access']
  }
];

const locations = ['All Locations', 'Manhattan, NY', 'Brooklyn, NY', 'Queens, NY', 'Bronx, NY'];
const propertyTypes = ['All Types', 'Warehouse', 'Office', 'Residential'];
const priceRanges = ['All Prices', '$0-2000', '$2000-3000', '$3000+'];

export default function PropertiesPage() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');
  const [showFilters, setShowFilters] = useState(false);

  // Initialize search term from URL parameters
  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    }
  }, [searchParams]);

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'All Locations' || property.location === selectedLocation;
    const matchesType = selectedType === 'All Types' || property.type === selectedType;
    const matchesPrice = selectedPrice === 'All Prices' || 
      (selectedPrice === '$0-2000' && property.price <= 2000) ||
      (selectedPrice === '$2000-3000' && property.price > 2000 && property.price <= 3000) ||
      (selectedPrice === '$3000+' && property.price > 3000);

    return matchesSearch && matchesLocation && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:w-2/3 relative">
            <input
              type="text"
              placeholder="Search by property name or location..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full md:w-auto px-6 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {property.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span>${property.price}/month</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Ruler className="h-4 w-4 mr-2" />
                  <span>{property.size} sq ft</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}