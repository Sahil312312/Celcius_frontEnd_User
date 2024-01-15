import React, { useState } from 'react';
import './SimpleForm.css';

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEnrollmentNoChange = (event) => {
    setEnrollmentNo(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Values:', { name, enrollmentNo, email });
    // You can handle the form submission logic here
  };

  return (
    <div className="form-container">
      <h1 className='form-heading'>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="enrollmentNo">Enrollment No:</label>
        <input
          type="text"
          id="enrollmentNo"
          value={enrollmentNo}
          onChange={handleEnrollmentNoChange}
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;

