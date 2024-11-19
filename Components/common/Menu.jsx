
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../src/assets/rdlogo1.png";
import { useState } from "react";

const Menu = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);
  return (
    <Navbar expanded={expanded} onToggle={handleToggle} expand="lg" className="nav" variant="ligth">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <div>
            <img src={Logo} alt="rocio diseños logo" className="logo img-fluid" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-item nav-link" to={"/"} onClick={closeNavbar}>
              Inicio
            </NavLink>
            <NavLink end className="nav-item nav-link" to={"/servicios"} onClick={closeNavbar}>
              Servicios
            </NavLink>
            <NavLink end className="nav-item nav-link" to={"/contacto"} onClick={closeNavbar}>
              Contacto
            </NavLink>
            <NavLink end className="nav-item nav-link" to={"/nosotros"} onClick={closeNavbar}>
              Nosotros
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
