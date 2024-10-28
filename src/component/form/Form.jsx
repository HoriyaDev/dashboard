

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, Box, Button, Typography } from '@mui/material';

const Form = () => {
  const [input, setInput] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address1: '',
    address2: ''
  });

  const [error, setError] = useState({
    fnameError: '',
    lnameError: '',
    emailError: '',
    phoneError: '',
    address1Error: '',
    address2Error: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "fname" && value.trim() !== "") {
      setError((prev) => ({ ...prev, fnameError: "" }));
    }
    if (name === "lname" && value.trim() !== "") {
      setError((prev) => ({ ...prev, lnameError: "" }));
    }
    if (name === "email" && validateEmail(value)) {
      setError((prev) => ({ ...prev, emailError: "" }));
    }
    if (name === "phone" && value.trim() !== "") {
      setError((prev) => ({ ...prev, phoneError: "" }));
    }
    if (name === "address1" && value.trim() !== "") {
      setError((prev) => ({ ...prev, address1Error: "" }));
    }
    if (name === "address2" && value.trim() !== "") {
      setError((prev) => ({ ...prev, address2Error: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Validation();
    console.log(input);
  };

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const Validation = () => {
    let isValid = true;
    let newError = {
      fnameError: '',
      lnameError: '',
      emailError: '',
      phoneError: '',
      address1Error: '',
      address2Error: ''
    };

    if (input.fname.trim() === '') {
      newError.fnameError = "First name is required.";
      isValid = false;
    }
    if (input.lname.trim() === '') {
      newError.lnameError = "Last name is required.";
      isValid = false;
    }
    if (!validateEmail(input.email)) {
      newError.emailError = "Invalid email.";
      isValid = false;
    }
    if (input.phone.trim() === '') {
      newError.phoneError = "Phone is required.";
      isValid = false;
    }
    if (input.address1.trim() === '') {
      newError.address1Error = "Address 1 is required.";
      isValid = false;
    }
    if (input.address2.trim() === '') {
      newError.address2Error = "Address 2 is required.";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  return (
    <FormControl fullWidth component="form" onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="row" gap={1}>
        <Box display="flex" flexDirection="column" sx={{ flex: 1 }}>
          <TextField
            type={'text'}
            name="fname"
            value={input.fname}
            onChange={handleInputChange}
            label="First Name"
            variant="filled"
            fullWidth
          />
          <Typography sx={{ minHeight: '20px', color: 'red' }}>{error.fnameError}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" sx={{ flex: 1 }}>
          <TextField
            type={'text'}
            name="lname"
            value={input.lname}
            onChange={handleInputChange}
            label="Last Name"
            variant="filled"
            fullWidth
          />
          <Typography sx={{ minHeight: '20px', color: 'red' }}>{error.lnameError}</Typography>
        </Box>
      </Box>

      <TextField
        type={'email'}
        name="email"
        value={input.email}
        onChange={handleInputChange}
        label="Email"
        variant="filled"
        fullWidth
        sx={{ marginTop: '10px' }}
      />
      <Typography sx={{ minHeight: '20px', color: 'red' }}>{error.emailError}</Typography>
      
      <TextField
        type={'number'}
        name="phone"
        value={input.phone}
        onChange={handleInputChange}
        label="Contact"
        variant="filled"
        fullWidth
        sx={{ marginTop: '10px' }}
      />
      <Typography sx={{ minHeight: '20px', color: 'red' }}>{error.phoneError}</Typography>
      
      <TextField
        type={'text'}
        name="address1"
        value={input.address1}
        onChange={handleInputChange}
        label="Address 1"
        variant="filled"
        fullWidth
        sx={{ marginTop: '10px' }}
      />
      <Typography sx={{ minHeight: '20px', color: 'red' }}>{error.address1Error}</Typography>
      
      <TextField
        type={'text'}
        name="address2"
        value={input.address2}
        onChange={handleInputChange}
        label="Address 2"
        variant="filled"
        fullWidth
        sx={{ marginTop: '10px' }}
      />
      <Typography sx={{ minHeight: '20px', color: 'red' }}>{error.address2Error}</Typography>
      
      <Box marginTop={2} display='flex' justifyContent='flex-end' alignItems='center'>
        <Button type="submit" variant="contained" color="primary">
          Create New User
        </Button>
      </Box>
    </FormControl>
  );
};

export default Form;
