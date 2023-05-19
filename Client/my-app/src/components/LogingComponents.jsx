//create the component for login using email and password from user
 import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import { useNavigate } from "react-router-dom";
    import Swal from "sweetalert2";
    import axios from "axios";
    import { ToastContainer, toast } from "react-toastify";
    import "react-toastify/dist/ReactToastify.css";
    import { useHistory } from "react-router-dom";

    const Login = () => {
        const history = useHistory();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            const data = { email, password };
            const response = await fetch("http://localhost:4000/api/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            });
            var result = await response.json();
            console.log(response);
            console.log(result.data);
            if (response.status === 200) {
            Swal.fire({
                title: "Success",
                text: "User Login successful",
                icon: "success",
                confirmButtonText: "OK",
            }).then(function () {
                // Redirect the user
                history.push("/dashboard");
            });
            } else {
            Swal.fire({
                title: "Oops...",
                text: "Something went wrong!",
                icon: "error",
                confirmButtonText: "OK",
            }).then(function () {
                // Redirect the user
                history.push("/login");
            });
            }
        };
    
        return (
            <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                />
                <button type="submit">Login</button>
                

            </form>
            </div>
        );
        }
        export default Login;