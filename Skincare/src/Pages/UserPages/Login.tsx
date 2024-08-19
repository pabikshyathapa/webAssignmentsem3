import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Login.css";  // Import CSS styles from the same directory

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/authenticate", {
                email: formData.email,
                password: formData.password
            });

            if (response.status === 200) {
                toast.success('Login Success');
                navigate('/dashboard');
            }  else {
                // Assuming the server provides meaningful error messages in the response
                toast.error(response.data.message || 'Login Failed');
            }
        } catch (error) {
            console.error('Login failed:', error);
            toast.error('Login Failed');
        }
    };

    return (
        <div className='loginpage'>
            <h2 className='loginheader'>--- Welcome ---</h2>
            <form className='loginForm' onSubmit={handleSubmit}>
                <input
                    className='logininput'
                    placeholder='Email'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <br/>
                <input
                    className='logininput'
                    placeholder='Password'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <br/>
                <button className='buttons' type="submit">Login</button>
            </form>
            <br/>
            <br/>
            <br/>
            <br/>
            <label className='loginlabel'>Don't have an account?
                <a href='/' className='ancher'> Sign-Up </a>
            </label>
            <br/>
            <a href='#' className='ancher2'> Forget Password</a>
        </div>
    );
}

export default Login;
