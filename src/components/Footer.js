import React from 'react';
import { Typography, Button, Box, TextField, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: '50px 0',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
        color: 'white',
      }}
    >
      {/* Contact Info Section */}
      <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Stay Connected
      </Typography>

      {/* Subscription Form */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '30px',
          flexWrap: 'wrap', // Make the form responsive
        }}
      >
        <TextField
          type="email"
          placeholder="Your email"
          variant="outlined"
          sx={{
            input: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              '&:hover fieldset': {
                borderColor: 'white',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            width: { xs: '100%', sm: '300px' }, // Full width on mobile, fixed on larger screens
          }}
          InputLabelProps={{ sx: { color: 'white' } }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            borderRadius: '30px',
            padding: '10px 30px',
            backgroundColor: '#ff6f61', // Modern button color
            '&:hover': {
              backgroundColor: '#ff5a4e',
            },
          }}
        >
          Subscribe
        </Button>
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        <IconButton href="https://facebook.com" target="_blank" color="inherit">
          <FacebookIcon fontSize="large" sx={{ color: 'white', '&:hover': { color: '#ff6f61' } }} />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" color="inherit">
          <TwitterIcon fontSize="large" sx={{ color: 'white', '&:hover': { color: '#ff6f61' } }} />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" color="inherit">
          <InstagramIcon fontSize="large" sx={{ color: 'white', '&:hover': { color: '#ff6f61' } }} />
        </IconButton>
      </Box>

      {/* Contact Information */}
      <Box sx={{ marginBottom: '30px' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          Contact Info:
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
          Email: <a href="mailto:john.doe@example.com" style={{ color: '#ff6f61' }}>john.doe@example.com</a>
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
          Phone: <a href="tel:+1234567890" style={{ color: '#ff6f61' }}>+1 (234) 567-890</a>
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
          Address: <a href="https://www.google.com/maps/place/Edmonton,+AB/data=!4m2!3m1!1s0x53a0224580deff23:0x411fa00c4af6155d?sa=X&ved=1t:242&ictx=111" style={{ color: '#ff6f61' }}>123 abc street, NW, Edmonton, Canada</a>
        </Typography>
        {/* Highlighted Name of the Main Website Person */}
        <Typography
          variant="h5"
          sx={{
            marginTop: '10px',
            fontFamily: '"Playfair Display", serif', // Example of a unique, serif font
            fontWeight: '700',
            color: '#ff6f61',
          }}
        >
          Sarah Akintunde
        </Typography>

        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Founder & CEO
        </Typography>
      </Box>

      {/* Footer Text */}
      <Typography variant="body2" sx={{ marginTop: '20px', color: 'rgba(255, 255, 255, 0.7)' }}>
        © 2024 Voice Of Kingdom. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
