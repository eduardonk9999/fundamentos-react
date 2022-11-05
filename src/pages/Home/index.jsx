import React, { useState, useEffect } from 'react';

import { Card } from '../../Components/Card';
import './style.css';

export function Home() { 
  const [studendName, setStudendName] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '' });

  function handleAddStudent() {
    const newStudent = {
      name: studendName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    setStudents([...students, newStudent]);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/eduardonk9999');
      const data = await response.json();

      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    }

    fetchData();
    
  }, [])

  return (
    <>
      <div className="container">
        <header>
          <h1>Lista de Presença</h1>
          <div>
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="Eduardo" />
          </div>
        </header>
        <input 
          type="text" 
          placeholder="Digite o nome..." 
          onChange={e => setStudendName(e.target.value)}
        />
        <button 
          onClick={handleAddStudent}
          type="button">
            Adcionar
          </button>
        
        {
          students.map((student, index) => 
            <Card 
              key={index}
              name={student.name} 
              time={student.time} 
            />
          )
        }
      </div>
    </>
  )
} 