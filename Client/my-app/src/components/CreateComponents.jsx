import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const CreateComponent = () => {
  const navigate = useNavigate();
  const [firstname, setFname] = useState("");
 // const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { firstname, email, password };
    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    var result = await response.json();
    console.log(response);
    console.log(result.data)
    if (response.status === 200) {
      Swal.fire({
        title: "Success",
        text: "User Registerd successful",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
        // Redirect the user
        navigate("/Login");
      });

    } else {
      Swal.fire({
        title: "Oops...",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "OK",
      }).then(function () {
        // Redirect the user
        navigate("#")
      });

    }

  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstname}
          placeholder="Frist Name"
          onChange={(e) => setFname(e.target.value)}
        />
        
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registerd</button>
        
        </form>
    </div>

  );
}
export default CreateComponent