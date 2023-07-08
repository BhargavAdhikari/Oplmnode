// import React, { useState } from 'react';
// import axios from "axios";
// import './App.css';


//     const [loginData, setLoginData] = useState({
//       email: '',
//       password: '',
//     })

//     const login =({setLoginUser}) =>{
//         axios.post("http://localhost:4000/login", loginData);
//         then(res => {
//           alert(res.data.message)
//           setLoginUser(res.data.user)
//       });
//     }

//     const [showLoginForm, setShowLoginForm] = useState(true);

//     const handleLoginChange = (event) => {
//         const { name, value } = event.target;
//         setLoginData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//       };

//       const handleLoginSubmit = (event) => {
//         event.preventDefault();
//         console.log('Login data:', loginData);
//       };

//       const toggleForm = () => {
//         setShowLoginForm(!showLoginForm);
//       };

//       const Login = () => {
         
//     return(

    
//      <div className="App">
//       <div className="container">
//         {showLoginForm ? (
//           <div className="form-wrapper">
//             <h1>Login</h1>
//             <form onSubmit={handleLoginSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={loginData.email}
//                 onChange={handleLoginChange}
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={loginData.password}
//                 onChange={handleLoginChange}
//               />
//               <button type="submit" className="btn-primary" onClick={login}>
//                 Login
//               </button>
//               <p>
//                 Don't have an account?{' '}
//                 <span className="toggle-link" onClick={toggleForm}>
//                   Register
//                 </span>
//               </p>
//             </form>
//           </div>
//           )}
//         </div>
//      </div>
         
//         );
//       };

import React, { useState } from 'react';
import axios from "axios";
import './App.css';

const Login = ({ setLoginUser }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const login = () => {
    axios.post("http://localhost:4000/login", loginData)
      .then(res => {
        alert(res.data.message);
        setLoginUser(res.data.user);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log('Login data:', loginData);
    login();
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="App">
      <div className="container">
        {showLoginForm ? (
          <div className="form-wrapper">
            <h1>Login</h1>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLoginChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
              />
              <button type="submit" className="btn-primary">
                Login
              </button>
              <p>
                Don't have an account?{' '}
                <span className="toggle-link" onClick={toggleForm}>
                  Register
                </span>
              </p>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
