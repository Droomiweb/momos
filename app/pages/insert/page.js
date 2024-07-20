'use client'
import { useState } from 'react';
import '@/app/globals.css';
import { Button } from 'flowbite-react';

export default function Pagess(){
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async () => {
    const data = { name, age };

    try {
      const response = await fetch('../api/insertData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Handle success (e.g., display a success message)
      } else {
        const error = await response.json();
        console.error(error.error); // Handle error (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error:', error); // Handle network or other errors
    }
  };

  return (
    <div className='pt-20'>
      Name : 
      <input 
        className='text-black'
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br/><br/>
      Age : 
      <input 
        className='text-black'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
