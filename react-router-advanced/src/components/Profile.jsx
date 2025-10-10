// src/components/Profile.jsx
import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>User Profile</h1>
      <nav>
        <Link to="details" style={{ marginRight: "10px" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}

export default Profile;
