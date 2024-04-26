
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
// import Cookies from 'js-cookie';
import "@fortawesome/fontawesome-free/css/all.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    confirmpassword: "",
    email: "",
    password: "",
    
  });

const navigate=useNavigate();

  const handleFormData = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //  Submit the form data to the server
  const submitForm = (event) => {
    event.preventDefault();
    //fetch takes two parameters 1. api, 2. object which contains additional config
    // fetch("http://localhost:4444/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) =>response.json())
    //   .then((data) =>  {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios
      .post("http://localhost:5555/sign-up", formData)
      .then((response) => {
        console.log(response.data);
        toast.success(`registration successfull`);
        setTimeout(()=>{

        },1500);
      })
      .catch((err) => {
        toast.error(`error occurred while registering`);
        console.log(err);
      });
  };
    return (
        <div className="container mt-5 pt-5 ">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body ">
                            <h3 className="card-title text-center h2">Sign Up</h3>
                            <form onSubmit={submitForm}>
                            <div className="col_half">
                            <div className="mb-3">
                        {" "}
                        <label htmlFor="email" className="form-label h6">FirstName :</label>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="first Name"
                          required
                          value={formData.firstName}
                          onChange={handleFormData}
                        />
                      </div>
                    </div>
                                <div className="col_half">
                                <div className="mb-3">
                        {" "}
                        <label htmlFor="email" className="form-label h6">LastName :</label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          required
                          value={formData.lastName}
                          onChange={handleFormData}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                    {" "} 
                    <label htmlFor="email" className="form-label h6">Email address :</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleFormData}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    {" "}
                    <label htmlFor="email" className="form-label h6">Password :</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      onChange={handleFormData}
                      value={formData.password}
                    />
                  </div>
                  <div className="mb-3">
                    {" "}
                    <label htmlFor="email" className="form-label h6">confirmpassword :</label>
                    <input
                      type="password"
                      name="confirmpassword"
                      placeholder="Re-type Password"
                      required
                      onChange={handleFormData}
                      value={formData.confirmpassword}
                    />
                  </div>
                                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            </form>
                               <p className="text-center h6">
                                   Alrwady have an account ?{" "}
                                    <Link to="/auth">
                                            {" "}
                                    <span style={{ color: "#f5ba1a" }}>Login</span>
                                    </Link>
                                 </p>
                        </div>
                                         <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
