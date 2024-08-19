import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Registration.css';

function Registration() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNo: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords don't match");
            return;
        }

        try {
            // Assuming your server sends a response with a status code upon successful registration
            await axios.post('http://localhost:8080/user/save', {
                fullName: formData.fullName,
                email: formData.email,
                mobileNo: formData.mobileNo,
                password: formData.password,
            });

            toast.success('Registration successful!');
            navigate('/sign-in'); // Redirect to the login page after successful registration

        } catch (error) {
            console.error('Registration failed:', error);
            toast.error('Registration failed. Please try again.');
        }
    };
    return (
        <>
            <div className='maindiv'>
                <h1 className='header1registration'>Welcome</h1>
                <h2 className='headerregistration'> --- Your Details --- </h2>
                <form className='registrationform' onSubmit={handleSubmit}>
                    <input
                        className='registrationinput'
                        placeholder='Full Name'
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                    />
                    <br/>

                    <input
                        className='registrationinput'
                        placeholder='Email'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <br/>

                    <input
                        className='registrationinput'
                        placeholder='Mobile Number'
                        type="text"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleInputChange}
                        required
                    />
                    <br/>

                    <input
                        className='registrationinput'
                        placeholder='Password'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <br/>

                    <input
                        className='registrationinput'
                        placeholder='Confirm Password'
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                    />
                    <br/>

                    <button className='buttons' type="submit" >Register</button>
                </form>
                <br/>
                <label className='registrationlabel'>Already have an account?
                    <br/>
                    <a href='/sign-in' className='ancher'> Sign-In </a> </label>
                <br/>
                <a href='#' className='ancher2'> Forget Password</a>

            </div>
        </>
    );
}

export default Registration
