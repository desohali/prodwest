import { setSearch } from '@/src/features/clubAdminSlice';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon, IconButton, Grid, Tooltip } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';

let timeout;
function debounce(func, wait) {

  return function (...args) {
    const context = this;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

export const CompaniesAdminSearch = () => {

  const dispatch = useDispatch();
  // search local
  const [searchLocal, setSearchLocal] = React.useState("");

  const handleInputChange = (value) => {
    setSearchLocal(value);
  };

  const clearSearch = () => {
    setSearchLocal('');
    dispatch(setSearch(''));
  };

  const debouncedSearch = debounce((value) => {
    dispatch(setSearch(value));
  }, 600);


  return (
    <Card sx={{ p: 2, width: "100%" }}>
      <Grid container spacing={[2, 5]}>
        <Grid item xs={12} md={6} lg={7}>
          <Tooltip title="Search by name, contact name and contact email">
            <OutlinedInput
              value={searchLocal}
              onChange={(event) => {
                handleInputChange(event.target.value);
                debouncedSearch(event.target.value);
              }}
              fullWidth
              placeholder="Search"
              startAdornment={(
                <InputAdornment position="start">
                  <SvgIcon
                    color="action"
                    fontSize="small"
                  >
                    <MagnifyingGlassIcon />
                  </SvgIcon>
                </InputAdornment>
              )}
              endAdornment={(
                <InputAdornment position="end">
                  {searchLocal && (
                    <IconButton onClick={clearSearch} size="small">
                      <ClearIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              )}
              sx={{ width: "100%" }}
            />
          </Tooltip>
        </Grid>
        <Grid item xs={12} md={6} lg={5} />
      </Grid>

    </Card>
  )
};
