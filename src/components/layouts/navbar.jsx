import React from "react";

const NavbarLayout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl">Hacker News Top Stories</h1>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default NavbarLayout;