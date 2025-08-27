import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {

    const {register} = useAuth();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    function handleRegister(e) {
        e.preventDefault()
        if (!username || !password || !email) {
            alert("Please fill all fields")
            return;
        }
        if(register(username, password, email)) {
            navigate("/login")
        }
        else {
            alert("User already exist")
        }

    }

    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter username" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>   
            <Button variant="primary" type="submit">
                Register
            </Button>

            <p>Already have an account? <Link to={"/login"}>Login</Link></p>
        </Form>
    )
}

export default RegisterPage;