import React, { useState } from 'react';
import Header from '@/components/header';

const Sell = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to handle form submission goes here
  };

  return (
    <><Header /><div className="max-w-2xl mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Sell Your Used AirPods</h1>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                  <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                      Title
                  </label>
                  <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      required
                      className="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700 leading-5 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                      Description
                  </label>
                  <textarea
                      id="description"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      required
                      className="w-full border-gray-300 border rounded-md py-2 px-3 text-gray-700 leading-5 focus:outline-none focus:border-blue-500"
                  ></textarea>
              </div>
              <div className="mb-4">
                  <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                      Price
                  </label>
                  <div className="relative rounded-md shadow-sm">

                      <input
                          type="number"
                          id="price"
                          value={price}
                          onChange={(event) => setPrice(event.target.value)}
                          required
                          className="block w-full pr-12 border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-5 focus:outline-none focus:border-blue-500"
                          placeholder="Enter the Price"
                          step="5" />
                  </div>
              </div>
              <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                  Sell
              </button>
          </form>
      </div></>
  );
};

export default Sell;