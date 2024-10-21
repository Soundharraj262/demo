import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9090/data');
        console.log(response.data);
        
        setData(response.data);  // Store the fetched data
        setLoading(false);  // Set loading to false
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();  // Call the fetch function
  }, []);  // Empty dependency array to run only once when the component mounts

  if (loading) return <div>Loading...</div>;  // Display a loading message

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-[50vw] bg-white border-2 flex flex-col border-[#efe808] gap-5 p-10">
        <h1 className="text-center text-5xl">Student Data</h1>
        {data.length === 0 ? (
          <p>No data available</p>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item._id} className="bg-slate-200 p-4 mb-2 rounded-md">
                <strong>Roll No:</strong> {item.rollno} <br />
                <strong>Name:</strong> {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DisplayData;
