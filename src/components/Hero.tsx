import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/properties?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="relative mt-16"> {/* Added mt-16 to account for fixed navbar */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Find Your Perfect Space</span>
            <span className="block text-blue-400">For Business or Living</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover warehouses, business spaces, and residential properties all in one place.
            Book viewings and manage your properties with ease.
          </p>
          
          <div className="mt-10 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="flex items-center bg-white rounded-lg shadow-md">
              <input
                type="text"
                placeholder="Search by location or property type..."
                className="flex-1 px-6 py-4 rounded-l-lg focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-6 py-4 rounded-r-lg hover:bg-blue-700 flex items-center"
              >
                <Search className="h-5 w-5" />
                <span className="ml-2">Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}