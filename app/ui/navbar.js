import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0 left-0">
      <h1 className="text-gradient text-5xl font-signature ml-2">
        <a
          className="link-underline link-underline-white hover:decoration-solid"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          Shortify
        </a>
      </h1>
    </div>
  );
};

export default Navbar;
