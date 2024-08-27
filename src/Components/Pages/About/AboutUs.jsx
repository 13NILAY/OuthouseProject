import React from 'react';

const AboutUs = () => {
  return (
    <div className="mt-20 px-sectionPadding max-md:px-mobileScreenPadding py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-headings text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="font-texts text-lg text-gray-700 mb-4">
          Welcome to [Your Company Name], where we believe in delivering the highest quality products and services to our customers. Founded in [Year], we have grown from a small startup to a trusted name in the industry. Our journey has been fueled by a passion for innovation, a commitment to customer satisfaction, and a dedication to excellence.
        </p>
        <p className="font-texts text-lg text-gray-700 mb-4">
          At [Your Company Name], we specialize in [describe your main products/services]. Our team of experienced professionals works tirelessly to ensure that every product we offer meets the highest standards of quality. We are proud of our commitment to sustainability and our efforts to reduce our environmental footprint.
        </p>
        <p className="font-texts text-lg text-gray-700 mb-4">
          Our mission is to create value for our customers by offering superior products and exceptional customer service. We believe in building lasting relationships with our customers, partners, and the communities we serve.
        </p>
        <p className="font-texts text-lg text-gray-700 mb-4">
          Thank you for choosing [Your Company Name]. We look forward to serving you and exceeding your expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
