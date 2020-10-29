import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, Container } from "reactstrap";
import { frontendUrls } from "../../routes/frontendUrls";

const Header = () => (
    <Navbar color="light" light expand="md" className="mb-4">
        <Container className=" justify-content-center ">
            <Nav active className="text-uppercase p-3">
                <NavItem active className="mr-2 my-4 my-lg-2">
                    <NavLink
                        exact
                        to={frontendUrls.home}
                        activeClassName="bg-warning"
                        className="p-3"
                    >
                        home
                    </NavLink>
                </NavItem>
                <NavItem className="mr-2 my-4 my-lg-2">
                    <NavLink
                        to={frontendUrls.catalogue}
                        activeClassName="bg-warning"
                        className="p-3"
                    >
                        catalogue
                    </NavLink>
                </NavItem>
                <NavItem className="mr-2 my-4 my-lg-2">
                    <NavLink
                        to={frontendUrls.registration}
                        activeClassName="bg-warning"
                        className="p-3"
                    >
                        registration
                    </NavLink>
                </NavItem>
                <NavItem className="mr-2 my-4 my-lg-2">
                    <NavLink
                        to={frontendUrls.editProduct}
                        activeClassName="bg-warning"
                        className="p-3"
                    >
                        edit Product
                    </NavLink>
                </NavItem>
                <NavItem className="mr-2 my-4 my-lg-2">
                    <NavLink
                        to={frontendUrls.addProduct}
                        activeClassName="bg-warning"
                        className="p-3"
                    >
                        add new Product
                    </NavLink>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
)

export default Header;
