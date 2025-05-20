import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About DreamyCorner</h1>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              DreamyCorner was founded in 2025 with a simple mission: to provide
              customers with a seamless online shopping experience. What started
              as a small venture has now grown into a trusted e-commerce platform
              serving customers nationwide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At DreamyCorner, we are committed to offering high-quality products at
              competitive prices, all while delivering exceptional customer
              service. We believe in building lasting relationships with our
              customers and creating an online shopping experience that is both
              enjoyable and convenient.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><span className="font-medium text-gray-700">Customer Satisfaction:</span> We put our customers first and strive to exceed their expectations.</li>
              <li><span className="font-medium text-gray-700">Quality:</span> We ensure all products meet high standards of quality and durability.</li>
              <li><span className="font-medium text-gray-700">Integrity:</span> We conduct our business with honesty, transparency, and ethical practices.</li>
              <li><span className="font-medium text-gray-700">Innovation:</span> We continuously look for ways to improve our services and offerings.</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Seema Bhattarai</h3>
              <p className="text-gray-600">Founder of DreamyCorner</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
