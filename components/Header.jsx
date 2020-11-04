import { Navbar, Nav, InputGroup, FormControl, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar
      style={{
        height: "8vh",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        position: "sticky",
        position: "fixed",
      }}
    >
      <Nav>
        <InputGroup
          style={{
            margin: "0",
            padding: "auto 10px",
            height: "25px",
            backgroundColor: "white",
            borderRadius: "25px",
          }}
        >
          <i
            style={{
              color: "grey",
              margin: "auto 5px",
              backgroundColor: "white",
            }}
            className="fas fa-search"
          />
          <input
            style={{
              fontSize: "15px",
              fontWeight: "600",
              border: "0",
              borderRadius: "25px",
              backgroundColor: "white",
              color: "black",
            }}
            placeholder="Search"
          />
        </InputGroup>
      </Nav>
      <div id="profile">
        <i className="fas fa-user-tie" />
      </div>
    </Navbar>
  );
}
