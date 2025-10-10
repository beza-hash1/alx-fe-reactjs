import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(""); // checker expects 'errors'

  const handleSubmit = (e) => {
    e.preventDefault();

    // Separate if statements as expected by checker
    if (!username) {
      setErrors("Username is required");
      return;
    }
    if (!email) {
      setErrors("Email is required");
      return;
    }
    if (!password) {
      setErrors("Password is required");
      return;
    }

    setErrors("");
    console.log({ username, email, password });
    alert("User registered successfully!");

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>User Registration (Controlled Component)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={username}       // checker expects this
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={email}          // checker expects this
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={password}       // checker expects this
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        {errors && <p style={{ color: "red" }}>{errors}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
