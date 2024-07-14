// src/pages/LogInForm.js
import React, { useState } from 'react';
import { useAuth } from '../authcontext';
import FormButton from '../components/formbutton';
import '../styles/register.css';
import FormInput from '../components/forminput';
import { useNavigate } from 'react-router-dom';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const Navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please Fill All Fields!");
      return;
    }

    const userData = {
      user_email: email,
    };

    login(userData);
    Navigate("/home")
  };

  return (
    <section>
      <div className="login_container">
        <div className="login_image"></div>
        <div className="login_info">
          <div className="login_info_inner">
            <h2 className="page_title">LogIn with email</h2>
            <form className="login_form" onSubmit={handleSubmit}>
              <FormInput id="email" labelclass="form_label" inputclass="form_input" label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
              <FormInput id="password" labelclass="form_label" inputclass="form_input" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
              <div className='button_container'>
                <FormButton type="submit" text="Log In" className="common_button primary" />
              </div>
              <div className="user_registration_container">
                Don't have an account?
                <a className="user_registration_link" href="/signup">Join Now</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInForm;
