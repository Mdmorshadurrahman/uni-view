import React from 'react';
import { Box, TextField, Button } from '@mui/material';

function ChatBox({ isVisible }) {
  if (!isVisible) return null;

  return (
    <Box position="fixed" bottom={20} right={20} style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <TextField
        label="Type your message..."
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" color="primary">Send</Button>
    </Box>
  );
}

export default ChatBox;
