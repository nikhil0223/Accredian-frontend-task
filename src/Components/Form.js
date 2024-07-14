import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  maxHeight: '80vh',
  overflowY: 'auto',
};
const scrollBarStyle = {
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

const ReferralFormModal = ({ open, handleClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;
    let newErrors = { name: '', phone: '', email: '' };

    if (!name.trim() || !/^[a-zA-Z]+$/.test(name) || name.length <= 2) {
      newErrors.name = 'Name is not valid';
      isValid = false;
    }

    if (!validatePhone(phone)) {
      newErrors.phone = 'Invalid Phone Number';
      isValid = false;
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      try {
        const response = await fetch('http://localhost:3001/referrals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, phone, email }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.message);
        setName('');
        setPhone('');
        setEmail('');
        handleClose();
      } catch (error) {
        console.error('Error sending form data:', error.message);
      }
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{}}
    >
      <Box sx={{ ...modalStyle, ...scrollBarStyle }}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: '#1A73E8' }}>
          Referral Form
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            id="name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
            error={!!errors.name}
            helperText={errors.name}
            required
          />
          <TextField
            fullWidth
            id="phone"
            label="Phone Number"
            variant="outlined"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ mb: 2 }}
            error={!!errors.phone}
            helperText={errors.phone}
            required
          />
          <TextField
            fullWidth
            id="email"
            label="Email Address"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReferralFormModal;
