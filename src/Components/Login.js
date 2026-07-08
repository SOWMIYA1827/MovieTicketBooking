import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(){
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('name', name);
        navigate('/');
    }
        return(
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <fieldset className="login-fieldset">
        
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
                    <label>Mobile:</label>
                    <input type="text" value={Mobile} onChange={(e) => setMobile(e.target.value)} /><br />
                    <label>Email:</label>
                    <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <label>Password:</label>
                    <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} /><br/>    
                    <button type="submit">Login</button>
              
                </fieldset>
                </form>
            </div>
        );         


}


export default Login;