import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from '../src/logo_go_my_code.png';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img style={{width:"60px", heigth:"60px"}} src={myImage} alt='GoMyCode logo'/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h3 id='intro-text'>Welcome to our first react application </h3>
      <div id='authentification'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <footer id='footer'>
      <hr></hr>
        <h6>&copy; GoMyCode 2022</h6>
      </footer>
    </div>
  );
}

export default App;
