import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';

function Registeruser() {

const navigate = useNavigate(); 

const [formData , setformdata] = useState({
  username:'',
  email:'',
  password:'',
  role:'user',
  dateofbirth:''
})

const handleChange = ((e)=>{
  setformdata((prev)=>{
     return {...prev, [e.target.name]:e.target.value}
      })
})

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:3000/api/user/signup', formData);
     toast.success(res.data.message);
    navigate("/login");
  } catch (error) {
alert("error:" + error.response.data.message);
  }
}

  return (
    <div className='flex'>
      <div className='hidden lg:block md:block '>
        <img
          className='h-[100vh]'
          src='https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
      </div>

      <div className='lg:bg-pink-200 w-full max-w-md mx-auto lg:mt-10 md:mt-0 p-6 rounded-2xl mb-10 lg:shadow-lg'>
        <h1 className='text-center lg:text-white md:text-black text-4xl font-bold'>Register</h1>

        {/* 🧠 Make it a form */}
        <form onSubmit={handleSubmit} className='flex flex-col p-5 rounded-2xl bg-white gap-4 mt-10 shadow-lg'>
          <input
            className='p-2 border-gray-300 outline-1 mt-3 rounded'
            type='text'
            placeholder='Enter username'
            autoComplete='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
          <input
            className='p-2 border-gray-300 outline-1 mt-3 rounded'
            type='email'
            placeholder='Enter email'
            autoComplete='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className='p-2 border-gray-300 outline-1 mt-3 rounded'
            type='password'
            placeholder='Enter password'
            autoComplete='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          <select
            className='border-gray-300 outline-1 p-2 mt-3 rounded'
            name='role'
            value={formData.role}
            onChange={handleChange}
          >
            <option value='User'>User</option>
            <option value='Seller'>Seller</option>
          </select>
          <input
            className='p-2 border-gray-300 outline-1 mt-3 rounded'
            type='datetime-local'
            name='dateofbirth'
            value={formData.dateofbirth}
            onChange={handleChange}
          />
          
          <button type='submit' className='bg-cyan-600 p-2 mx-auto rounded text-white hover:bg-cyan-500'>
            Create Account
          </button>

          <div className='text-center mt-4'>
            <h1>OR</h1>
            <p>
              Already have an account? <a className='text-cyan-600' href='/login'>Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registeruser
