import React from "react";

const Address = () => {
  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Address</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Full Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Address</label>
          <input type="text" className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">City</label>
          <input type="text" className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">State</label>
          <input type="text" className="w-full px-4 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Zip Code</label>
          <input type="text" className="w-full px-4 py-2 border rounded" />
        </div>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
};

export default Address;