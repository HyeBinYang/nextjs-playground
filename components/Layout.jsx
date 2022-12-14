import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default Layout;
