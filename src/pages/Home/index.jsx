import React, { useState, useEffect } from 'react';

import { Card } from '../../Components/Card';
import './style.css';

export function Home() { 
  const [studendName, setStudendName] = useState();
  const [students, setStudents] = useState([]);

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

  return (
    <>
      <div className="container">
        <header>
          <h1>Lista de Presença</h1>
          <div>
            <strong>Eduardo</strong>
            <img src="https://avatars.githubusercontent.com/u/18013936?v=4" alt="Eduardo" />
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