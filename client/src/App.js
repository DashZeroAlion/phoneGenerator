import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhoneNumberForm from './components/phoneNumberForm';

function App() {
  return (
    <div className="App"> 
     <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <h3>📞 Phone Number Generator</h3>
          <PhoneNumberForm />
          </Col>
        <Col></Col>
      </Row>
      
      </Container>
    </div>
    
  );
}

export default App;
