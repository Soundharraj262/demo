import axios from 'axios';
import React, { useState, useEffect } from 'react'

const SignupData = () => {

  const [data, setData] = useState([]);
  const [loading,setLoading] =useState(true)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('http://localhost:9090/signup');
        console.log("data in res", response);
        console.log("log data", response.data);

        setData(response.data);
        setLoading(false)
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchdata();
  }, []);

  console.log("received data", data);

  

  return (
    <div>
      <div>
        <table className='border-2 w-[50vh]'>
          <tr  className='border-2'>
            <th>Username</th>
            <th>Password</th>
          </tr>
          {data.length === 0 ? (
            <li>no data</li>
          ) : (data.map((item)=>(
 
              <tr key={item._id}  className='border-2'>
                <td  className='border-2'>{item.username}</td>
                <td  className='border-2'>{item.password}</td>
              </tr>
          )))
          }
        </table>
      </div>
    </div>
  )
}

export default SignupData