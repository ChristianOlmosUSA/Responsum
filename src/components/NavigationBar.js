import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import NavStyles from './NavStyles.css';

                                                //  backtick makes this all one giant string basically 
const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    
    &:hover {
      color: crimson;
     }
    }
  `;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">TEMPLATE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-nvbar-nav" >
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>

            </Navbar.Collapse>

        </Navbar>


    </Styles>


)