import Button from "react-bootstrap/esm/Button"
import "./styles-pages/ProfilePage.css"
import { useAuth } from "../context/AuthContext"
import Form from 'react-bootstrap/Form';

function ProfilePage() {

    const {logout, user} = useAuth()

    return (
        <div>
            <h2>Profile</h2>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={user.username}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" value={user.email}/>
                </Form.Group>
            </Form>
            <Button variant="danger" onClick={logout}><i class="bi bi-dash-circle"></i></Button>
        </div>
    )
}

export default ProfilePage