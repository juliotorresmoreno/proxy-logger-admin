import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const AppBar: React.FC = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color='dark' dark expand={'md'} {...args}>
            <Link className='navbar-brand' to="/">reactstrap</Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar />
                <Nav navbar>
                    <NavItem>
                        <Link className='nav-link' to="/about">About</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default AppBar;