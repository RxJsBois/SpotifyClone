import { Navbar, Nav, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <i class="fab fa-spotify fa-3x" />
      </Navbar.Brand>
      <h1 style={{ color: "white" }}>Spotify</h1>
      <Nav style={{ marginLeft: "auto" }}>
        <Button style={{ margin: "0 10px" }} variant="success">
          Login
        </Button>
        <Button style={{ margin: "0 10px" }} variant="success">
          SignUp
        </Button>
      </Nav>
    </Navbar>
    // <nav className="homePage__navbar">
    //   <i class="fab fa-spotify fa-4x" />
    //   <h1>Spotify</h1>

    //   <button>Login</button>
    //   <button>SignUp</button>
    // </nav>
  );
}
