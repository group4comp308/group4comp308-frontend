import React from 'react';
import { Navbar, Nav,  Button, Container } from 'react-bootstrap';
import {  useNavigate, NavLink } from 'react-router-dom';
import cookie from 'js-cookie';
import DailyTips from './DailyTips';

const PatientMenu = () => {
    const patientId = localStorage.getItem('userId');
    const navigate = useNavigate();
    const firstName = localStorage.getItem('firstname');

    const handleLogout = () => {
        // remove the token and user info from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        localStorage.removeItem('firstname');

        // Remove token from cookie
        cookie.remove('token');
        // redirect to login page
        navigate('/');
    };

    return (
        <div>
            <Navbar className='navbar navbar-dark bg-dark'>
                <Container>
                <Navbar.Brand>Welcome, {firstName}!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="nav-link" to={`/patient/${patientId}/emergency-alert`}>Emergency Alert</NavLink>
                        <NavLink className="nav-link" to={`/game`}>Fitness Games</NavLink>
                        <NavLink className="nav-link" to={`/patient/${patientId}/dailyinfo`}>Daily Info</NavLink>
                        <NavLink className="nav-link" to={`/patient/${patientId}/symptom-checklist`}>Symptom Checklist</NavLink>

                    </Nav>
                   
                        <Button style={{ marginLeft: '100px' }} variant="outline-primary" onClick={handleLogout}>Logout</Button>
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default PatientMenu;
