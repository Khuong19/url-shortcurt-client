'use client';
import React from 'react';

const Body = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full'>
      <div className="text-center">
        <h1 className="text-gradient text-4xl font-bold sm:text-6xl">
          Shorten Your Long Links
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        Shortify is an efficient and easy-to-use URL shortening service that streamlines your online experience.
        </p>
      </div>
      <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="link" className="sr-only">
                Link
              </label>
              <input
                id="link"
                name="link"
                type="link"
                required
                placeholder="Enter your link"
                autoComplete="link"
                className="min-w-0 w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
    </div>
  );
};

export default Body;
