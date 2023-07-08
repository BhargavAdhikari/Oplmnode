// import React, { useState } from 'react';
// import axios from "axios";
// import './App.css';

// const [registerData, setRegisterData] = useState({
//     Fname: '',
//     Lname: '',
//     email: '',
//     password: '',
//     Contact:'',
//     Address:''
//   });

//   const register = () =>{
//     const {Fname, Lname, email, password, Contact, Address} = registerData;
//     if (Fname && Lname && email && password && Contact && Address) {
//         axios.post("http://localhost:4000/register", registerData);
//         then(res =>{
//             alert(res.data.message)
//         })

//     } else {
//         alert('Invalid Input');
//     }
// }

// const handleRegisterChange = (event) => {
//     const { name, value } = event.target;
//     setRegisterData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleRegisterSubmit = (event) => {
//     event.preventDefault();
//     console.log('Register data:', registerData);
//   };

//   (
//     <div className="form-wrapper">
//       <h1>Register</h1>
//       <form onSubmit={handleRegisterSubmit}>
//         <input
//           type="text"
//           name="Fname"
//           placeholder="First Name"
//           value={registerData.Fname}
//           onChange={handleRegisterChange}
//         />
//          <input
//           type="text"
//           name="Lname"
//           placeholder="Last Name"
//           value={registerData.Lname}
//           onChange={handleRegisterChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={registerData.email}
//           onChange={handleRegisterChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={registerData.password}
//           onChange={handleRegisterChange}
//         />
//         <input
//           type="integer"
//           name = "Contact"
//           placeholder="Contact Number"
//           value={registerData.Contact}
//           onChange={handleRegisterChange}
//         />
//         <input
//           type="text"
//           name="Address"
//           placeholder="Adress"
//           value={registerData.Address}
//           onChange={handleRegisterChange}
//         />
    
//     <button type="submit" className="btn-primary" onClick={register}>
//           Register
//         </button>
//         <p>
//           Already have an account?{' '}
//           <span className="toggle-link" onClick={toggleForm}>
//             Login
//           </span>
//         </p>
//       </form>
//     </div>
//   )}
// </div>
// </div>
// );
// };

import React, { useState } from 'react';
import axios from "axios";
import './App.css';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    Fname: '',
    Lname: '',
    email: '',
    password: '',
    Contact: '',
    Address: ''
  });

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log('Register data:', registerData);
    register();
  };

  const register = () => {
    const { Fname, Lname, email, password, Contact, Address } = registerData;
    if (Fname && Lname && email && password && Contact && Address) {
      axios.post("http://localhost:4000/register", registerData)
        .then(res => {
          alert(res.data.message);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert('Invalid Input');
    }
  }

  return (
    <div className="form-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          name="Fname"
          placeholder="First Name"
          value={registerData.Fname}
          onChange={handleRegisterChange}
        />
        <input
          type="text"
          name="Lname"
          placeholder="Last Name"
          value={registerData.Lname}
          onChange={handleRegisterChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerData.email}
          onChange={handleRegisterChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registerData.password}
          onChange={handleRegisterChange}
        />
        <input
          type="text"
          name="Contact"
          placeholder="Contact Number"
          value={registerData.Contact}
          onChange={handleRegisterChange}
        />
        <input
          type="text"
          name="Address"
          placeholder="Address"
          value={registerData.Address}
          onChange={handleRegisterChange}
        />
        <button type="submit" className="btn-primary">
          Register
        </button>
        <p>
          Already have an account?{' '}
          <span className="toggle-link" onClick={toggleForm}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
