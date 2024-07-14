// src/pages/SignUpForm.js
import React, { useState } from 'react';
import FormButton from '../components/formbutton';
import '../styles/register.css';
import FormInput from '../components/forminput';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passcheck, setPasscheck] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password || !passcheck) {
      alert("Please Fill All Fields!");
      return;
    }

    if (password !== passcheck) {
      alert("Password Didn't Matched!");
      return;
    }

    const data = {
      user_email: email,
      user_name: name,
      user_password: password,
    };

    fetch('http://127.0.0.1:8000/api/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to submit data.');
      });
  };

  return (
    <section>
      <div className="login_container">
        <div className="login_image"></div>
        <div className="login_info">
          <div className="login_info_inner">
            <h2 className="page_title">Sign Up with email</h2>
            <form className="login_form" onSubmit={handleSubmit}>
              <FormInput id="user_name" labelclass="form_label" inputclass="form_input" label="User Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your User Name" required />
              <FormInput id="email" labelclass="form_label" inputclass="form_input" label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
              <FormInput id="password" labelclass="form_label" inputclass="form_input" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
              <FormInput id="passcheck" labelclass="form_label" inputclass="form_input" label="Confirm Password" type="password" value={passcheck} onChange={(e) => setPasscheck(e.target.value)} placeholder="Confirm your password" required />
              <div className='button_container'>
              <FormButton type="submit" text="SIGN UP" className="common_button primary" />
              </div>
              <div className="user_registration_container">
                Already have an account?
                <a className="user_registration_link" href="/login">Log In</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
