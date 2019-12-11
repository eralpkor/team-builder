import React, { useState } from 'react';

function Form(props) {
  const [team, setTeam] = useState({
    first: "",
    last: "",
    role: "",
    email: ""
  });

  const handleChange = e => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();

    const newMember = {
      ...team,
      id: Date.now()
    };
    // added for validation
    if (!newMember.first || !newMember.email || !newMember.role) {
      alert("All fields must have value.");
    } else {
      props.addNewMember(newMember);
      // setTeam({ first: "", last: "", role: "", email: "" });
    }
    console.log(team)
  };

  return (
    <div className="team-form">
      <form onSubmit={submitForm}>
        <label htmlFor="first">Name</label>
        <input
          type="text"
          name="first"
          placeholder="Name"
          value={team.first}
          onChange={handleChange}
        />

        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={team.email}
          onChange={handleChange}
        />

        <label htmlFor="role">Role</label>
        <input
          type="text"
          name="role"
          placeholder="Job description"
          value={team.role}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;