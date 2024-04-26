import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password)

  const token= Cookies.get('jwtAuth')
  useEffect(()=>{
    if(token!==undefined)
    navigate('/')
   },[])

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5555/login", {
        email,
        password,
      });
      const token = response.data.token;
//storing token in cookies by installing dependency

      Cookies.set('jwtAuth', token);
      toast.success("login successfull");
      
    setTimeout(()=>{
        navigate('/')
    },1500)
    } catch (error) {
      console.log(error);
      toast.error("login  failed");
    }
  };

    return (
        <div className="container mt-5 pt-5 ">
            <div className="row justify-content-center ">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center h3">Login</h3>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label h6">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label h6">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </form>
                                    <p className="text-center h6">
                                             Don't have an account ?{" "}
                                            <Link to='/signup'> <span style={{ color: "#f5ba1a" }}>Signup</span></Link>
                                     </p>
                        </div>
                                  <ToastContainer />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;


