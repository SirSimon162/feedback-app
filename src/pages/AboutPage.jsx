import React from "react";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <div className="card">
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback for a product or services</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export default AboutPage;
