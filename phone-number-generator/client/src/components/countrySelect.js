// CountrySelect.js
import React, { useState, useEffect } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import axios from 'axios';

function CountrySelect({ countryCode, setCountryCode }) {
  const [countryOptions, setCountryOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/countries');
        setCountryOptions(response.data);
        setCountryCode({
          code: response.data[0].code,
          dial_code: response.data[0].dial_code
        });
      } catch (error) {
        console.error('Error fetching country codes:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = countryOptions.filter(option =>
      option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm, countryOptions]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCountrySelectChange = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    const code = e.target.options[selectedIndex].getAttribute('data-code');
    const dial_code = e.target.value;
    setCountryCode({ code, dial_code });
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by country name..."
          aria-label="Search"
          aria-describedby="search-country-code"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <Form.Select
        value={countryCode.dial_code}
        onChange={handleCountrySelectChange}
      >
        {filteredOptions.map(option => (
          <option key={option.code} value={option.dial_code} data-code={option.code}>
            {option.name} ({option.dial_code})
          </option>
        ))}
      </Form.Select>
    </>
  );
}

export default CountrySelect;