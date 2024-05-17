import React from 'react';
import { Backdrop, Typography, Box, LinearProgress } from '@mui/material';

const Loading = () => {
  return (
    <Backdrop open={true}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minWidth: '280px'
        }}
      >
        <Box sx={{ width: '100%', color: "white" }}>
          <LinearProgress />
        </Box>
        <Typography variant="h5" style={{ color: "white" }}>
          Loading...
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default Loading;
