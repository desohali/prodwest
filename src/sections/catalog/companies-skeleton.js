import { Box, Card, CardActions, CardContent, Divider, Grid, Skeleton, Stack } from '@mui/material';
import React from 'react';

export const CompaniesSkeleton = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardContent sx={{ pb: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Skeleton variant="rounded" width={128} height={128} />
        </Box>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2, width: "100%" }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
          sx={{ width: "50%" }}
        >
          <Skeleton variant="text" sx={{ fontSize: '1rem', width: "100%" }} />
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
          sx={{ width: "50%" }}
        >
          <Skeleton variant="text" sx={{ fontSize: '1rem', width: "100%" }} />
        </Stack>
      </Stack>
      <CardActions>
        <Skeleton variant="rounded" width="50%" height={40} />
        <Skeleton variant="rounded" width="50%" height={40} />
      </CardActions>
    </Card>
  )
}
