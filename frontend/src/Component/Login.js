import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
    const data = {
      username: username,
      password: password,
    };
    try {
      let result = await axios.post("http://localhost:8080/auth/login", {
        data,
      });
      console.log(result.data);
      localStorage.setItem("user", JSON.stringify(result.data));
      // window.location = "/dashboard";
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid login");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method="post">
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
