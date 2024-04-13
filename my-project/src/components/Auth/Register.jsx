import React, { useState } from "react";
import study from "../../assets/study.webp";
import axios from 'axios';

const Register = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { fname, lname, email, username, password })
      .then((response) => {
        console.log(response);
      });
      if (response.data.status === 'success') {
        console.log('Registered successfully!');
        // Redirect to login page upon successful registration
        // Replace '/auth' with the actual path
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
      setError(error.response.data.message);
    }
  }

  return (
    <div className="grid grid-cols-2" style={{ marginTop: "-5%" }}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img src={study} alt="" style={{ width: '400px', height: '400px' }} />
      </div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{ marginTop: "-5%" }}>
          <div className="p-6 space-y-4 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input
                    type="text" name="fname" id="fname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                    placeholder="First Name" value={fname}
                    onChange={(e) => setFname(e.target.value)} />
                </div>
                <div>
                  <input
                    type="text" name="lname" id="lname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                    placeholder="Last Name" value={lname}
                    onChange={(e) => setLname(e.target.value)} />
                </div>
              </div>
              <div>
                <input
                  type="email" name="email" id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                  placeholder="Email" value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <input
                  type="text" name="username" id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                  placeholder="Username" value={username}
                  onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div>
                <input
                  type="password" name="password" id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                  placeholder="Password" value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <select
                name="gender" id="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                value={gender}
                onChange={(e) => setGender(e.target.value)} >
                <option value="" disabled>
                  Gender
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary
                -600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
