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
      {/* {teamMember.map(member => {
        return (
          <div key={member.id}>
          <p>{member.name}</p>
          </div>
        )
      })} */}

      <h1>My Team</h1>
      <Form addNewMember={addNewMember} />

      <Card teamList={teamMember}/>
    </div>
  )
}

export default App;
