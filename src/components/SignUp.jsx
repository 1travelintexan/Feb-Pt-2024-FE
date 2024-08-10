import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  //function to send the data to the server to create a new user
  const handleSignUp = async (e) => {
    e.preventDefault();
    //after preventing the reload
    //we create a form data and add all the states to it
    const formData = new FormData();
    const image = e.target.image.files[0];
    formData.append("imageUrl", image);
    formData.append("name", username);
    formData.append("email", email);
    formData.append("password", password);
    try {
      const { data } = await axios.post(
        "http://localhost:5005/auth/signup",
        formData
      );
      console.log("successfully signed up", data);
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Signup with us!</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>{" "}
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Profile Image:
          <input type="file" name="image" />
        </label>
        <button>Sign Up</button>
      </form>
      <p>
        Already signed up with us? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
export default SignUp;
