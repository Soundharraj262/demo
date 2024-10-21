import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const [roll,setRoll]=useState('');
  const [name,setName]=useState('');

  const navigate = useNavigate()

  const handleSubmit =async (e)=>{
    e.preventDefault();

    try{
      const response=await axios.post('http://localhost:9090/data',{
        rollno:roll,
        name:name,
      });

      console.log("login success",response.data);
      alert("login sucessfully!");
      navigate('/DisplayData');
    }
    catch(error){
      console.error("the error is",error);
      alert("login failed");
    }
  }
  return (
    <div className='w-screen  flex justify-center items-center '>
      <form onSubmit={handleSubmit} 
      className='w-[50vw]  bg-white border-2 flex flex-col border-[#efe808] gap-5 p-10'
      >
        <h1 className='text-center text-5xl '>Student Info</h1>
        <h1 htmlFor="roll_no">Roll No</h1>
        <input 
        className='bg-slate-400 p-4 rounded-md'
        type="number" 
        name='roll_no'
        value={roll}
        onChange={(e)=>setRoll(e.target.value)}
        />

        <h1 htmlFor="">name</h1>
        <input 
        className='bg-slate-400 p-4 rounded-md'
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}

        />
        <button 
        type='submit'
        className='bg-[#efe808] rounded-lg p-4'
        >submit value</button>
      </form>
    </div>
  )
}

export default Profile