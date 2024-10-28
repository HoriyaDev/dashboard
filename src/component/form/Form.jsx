import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, Box, Button, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Form = () => {
  const [open, setOpen] = useState(false);
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

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validation conditions omitted for brevity
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Validation();
    if (isValid) {
      handleClick();
      console.log(input);
      setInput({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address1: '',
        address2: ''
      });
    }
  };

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

    // Validation conditions omitted for brevity

    setError(newError);
    return isValid;
  };

  return (
    <FormControl fullWidth component="form" onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="row" gap={1}>
        <Box display="flex" flexDirection="column" sx={{ flex: 1 }}>
          <TextField
            type="text"
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
            type="text"
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
        type="email"
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
        type="number"
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
        type="text"
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
        type="text"
        name="address2"
        value={input.address2}
        onChange={handleInputChange}
        label="Address 2"
        variant="filled"
        fullWidth
        sx={{ marginTop: '10px' }}
      />
      <Typography sx={{ minHeight: '20px', color: 'red' }}>{error.address2Error}</Typography>
      
      <Box marginTop={2} display="flex" justifyContent="flex-end" alignItems="center">
        <Button type="submit" variant="contained" color="primary">
          Create New User
        </Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          User created successfully!
        </Alert>
      </Snackbar>
    </FormControl>
  );
};

export default Form;
