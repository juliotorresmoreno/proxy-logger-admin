
import React from "react";
import { Outlet } from "react-router-dom";
import { Container,  } from "reactstrap";
import AppBar from "./AppBar";

const AppLayout: React.FC = () => {
    return (
        <>
            <AppBar />
            <br />
            <Container>
                <Outlet />
            </Container>
            <footer>
                
            </footer>
        </>
    );
}

export default AppLayout;
