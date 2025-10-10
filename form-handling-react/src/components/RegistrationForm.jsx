import { useState } from "react";

function RegistrationForm() {
  // 1️⃣ State to hold form values
  // We store all input values in a single object `formData`
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // 2️⃣ State to hold validation errors
  const [error, setError] = useState("");

  // 3️⃣ Handle input changes
  // This function updates the formData state whenever a user types
  const handleChange = (e) => {
    const { name, value } = e.target; // get field name and value
    setFormData({
      ...formData,        // copy existing state
      [name]: value,      // update the field that changed
    });
  };

  // 4️⃣ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh on submit

    // Basic validation: make sure no field is empty
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return; // stop submission if invalid
    }

    setError(""); // clear any previous error

    // Simulate sending data to an API
    console.log("Form Submitted:", formData);
    alert("User registered successfully!");

    // Optionally, reset the form
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  // 5️⃣ Render the form
  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>User Registration (Controlled Component)</h2>

      <form onSubmit={handleSubmit}>
        {/* Username field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}      // <-- controlled input
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>

        {/* Email field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}         // <-- controlled input
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        {/* Password field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}      // <-- controlled input
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        {/* Display validation error if any */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
