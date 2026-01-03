import React from "react";
import { FaUtensils, FaSearch, FaHandHoldingHeart } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-base-200 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          How It Works
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Sharing food has never been easier! Follow these three simple steps to
          connect with the community and reduce food waste.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="card bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-6xl mb-6 mx-auto text-orange-500 dark:text-orange-400">
              <FaUtensils />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              1. Post Food
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Donators can easily post available food with details like quantity,
              pickup time, and location.
            </p>
          </div>

          {/* Step 2 */}
          <div className="card bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-6xl mb-6 mx-auto text-blue-500 dark:text-blue-400">
              <FaSearch />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              2. Find Food
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Hungry members or organizations can browse food listings nearby.
            </p>
          </div>

          {/* Step 3 */}
          <div className="card bg-white dark:bg-gray-800 shadow-lg p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-6xl mb-6 mx-auto text-green-500 dark:text-green-400">
              <FaHandHoldingHeart />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              3. Collect Food
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Pick up the food and share the joy of giving! Help reduce waste and
              feed more people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
