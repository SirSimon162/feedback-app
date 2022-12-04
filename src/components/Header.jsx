import React from "react";

function Header() {
  const headerStyles = {
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#eee",
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>Feedback App</h2>
      </div>
    </header>
  );
}

export default Header;
