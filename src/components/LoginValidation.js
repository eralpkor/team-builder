import React from 'react';

const Validate = (props) => {

  console.log(props);

  let errors = {};
  if (!props.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(props.email)) {
    errors.email = 'Email address is invalid';
  }
  return errors;
}

export default Validate;