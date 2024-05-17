import { Grid, Skeleton } from '@mui/material';
import React from 'react';

export const CompaniesAdminSkeleton = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <Skeleton animation="wave" height={60} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Skeleton animation="wave" height={60} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Skeleton animation="wave" height={60} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Skeleton animation="wave" height={60} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Skeleton animation="wave" height={60} />
      </Grid>
    </Grid>
  )
}
