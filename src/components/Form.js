import React, { useState } from 'react';


function Form(props) {
  const [team, setTeam] = useState({ first: '', last: '', role: '' });
  
  const handleChange = e => {
    setTeam({...team, [e.target.name]: e.target.value})
  }

  const submitForm = e => {
    e.preventDefault();
    const newMember = {
      ...team,
      id: Date.now()
    };
    props.addNewMember(newMember);
    setTeam({ first: '', last: '',  role: ''})
  }

  return (
    <div className='team-form'>
      
      <form onSubmit={submitForm}>
        <label htmlFor='first'>First Name</label>
        <input
          type='text'
          name='first'
          placeholder='First name here'
          value={team.first}
          onChange={handleChange}
        />
      </form>
      <form >
        <label htmlFor='last'>Last Name</label>
        <input
          type='text'
          name='last'
          placeholder='Last name here'
          value={team.last}
          onChange={handleChange}
        />
      </form>
      <form >
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='role'
          placeholder='Job description'
          value={team.role}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;