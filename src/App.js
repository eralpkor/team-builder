import React, { useState } from 'react';
import data from './data';
import Form from '../src/components/Form';
import Card from '../src/components/Cards';
import './App.css';
// console.log(data);

function App() {
  const [teamMember, setTeamMember] = useState(data);

  const addNewMember = member => {
    setTeamMember([...teamMember, member]);
  }

  return (
    <div className='App'>
      <h1>Team Builder</h1>
      <Form addNewMember={addNewMember} />

      <div className='card-container'>
        <Card teamList={teamMember}/>
      </div>
      
    </div>
  )
}

export default App;
