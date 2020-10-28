import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { frontendUrls } from "../../routes/frontendUrls";

const Header = () => (
    <Navbar>
        <Nav>
            <NavItem>
                <NavLink to={frontendUrls.home}>home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={frontendUrls.catalogue}>catalogue</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={frontendUrls.registration}>registration</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={frontendUrls.editProduct}>editProduct</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={frontendUrls.addProduct}>addProduct</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
)

export default Header;
