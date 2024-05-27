import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BiLike } from "react-icons/bi";

const UserDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [sellerInfo, setSellerInfo] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${window.location.origin}/api/properties/properties`);
        setProperties(response.data);
        toast.success('Data fetched successfully');
      } catch (error) {
        console.error('Error fetching properties:', error);
        toast.error('Failed to fetch data. Please try again.');
      }
    };

    fetchProperties();
  }, []);

  const handleLike = async (propertyId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/properties/${propertyId}/like`);
      const updatedProperties = properties.map(property =>
        property._id === propertyId ? { ...property, likes: response.data.likes } : property
      );
      setProperties(updatedProperties);
      toast.success('Property liked');
    } catch (error) {
      console.error('Error liking property:', error);
      toast.error('Failed to like property. Please try again.');
    }
  };

  const handleInterested = async (property) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/properties/properties`);
      setSellerInfo(response.data);
      setSelectedProperty(property);
      toast.success('Seller information fetched');
    } catch (error) {
      console.error('Error fetching seller information:', error);
      toast.error('Failed to fetch seller information. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map(property => (
          <div key={property._id} className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.description}</p>
            <p className="text-gray-700 mb-1">Price: ${property.price}</p>
            <p className="text-gray-700 mb-1">Bedrooms: {property.bedrooms}</p>
            <p className="text-gray-700 mb-1">Bathrooms: {property.bathrooms}</p>
            <p className="text-gray-700 mb-4">Location: {property.location}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleInterested(property)}
            >
              Interested
            </button>
            <div className="flex items-center mt-2">
              <BiLike 
                className="text-blue-500 text-2xl cursor-pointer hover:text-blue-700 transition duration-300"
                onClick={() => handleLike(property._id)}
              />
              <span className="ml-2 text-gray-700">{property.likes}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedProperty && sellerInfo && (
        <div className="mt-8 bg-white shadow-md rounded-md p-4">
          <h3 className="text-lg font-semibold mb-2">Seller Information</h3>
          <p className="text-gray-700 mb-1">Name: {sellerInfo.name}</p>
          <p className="text-gray-700">Phone: {sellerInfo.mobileNumber}</p>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
