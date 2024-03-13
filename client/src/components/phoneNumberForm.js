// PhoneNumberForm.js
import React, { useState } from 'react';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import CountrySelect from './countrySelect';

const PhoneNumberForm = () => {
  const [quantity, setQuantity] = useState('');
  const [countryCode, setCountryCode] = useState({ code: '', dial_code: '' });
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generatePhoneNumber = async () => {
    try {
      const { data } = await axios.post('http://localhost:9000/api/validate-phone-numbers', {
        quantity: parseInt(quantity),
        countryCode: countryCode.code,
        countryDialCode: countryCode.dial_code
      });
      setResponse(data);
    } catch (error) {
      console.error(error);
      setResponse(null);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    generatePhoneNumber();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="quantity">
        <Form.Label>Quantity: </Form.Label>
        <Form.Label>Between 1 and 10000 can be generated each request</Form.Label>
        <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="countryCode">
        <Form.Label>Country Code:</Form.Label>
        <CountrySelect countryCode={countryCode} setCountryCode={setCountryCode} />
      </Form.Group>
      <br></br>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </>
        ) : (
          'Generate Phone Numbers'
        )}
      </Button>
      
      {response && (

        <p style={{ paddingTop: '10px' }}>{response.message}</p>
      )}
    </Form>
  );
};

export default PhoneNumberForm;
