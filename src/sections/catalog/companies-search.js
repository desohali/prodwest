import * as React from 'react';
import { setSearch } from '@/src/features/catalogSlice';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, IconButton, InputAdornment, OutlinedInput, SvgIcon, Tooltip } from '@mui/material';
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


export const CompaniesSearch = () => {

  const dispatch = useDispatch();

  const [searchLocal, setSearchLocal] = React.useState("");

  const handleInputChange = (value) => {
    setSearchLocal(value);
  };

  const debouncedSearch = debounce((value) => {
    dispatch(setSearch(value));
  }, 600);

  const clearSearch = () => {
    setSearchLocal('');
    dispatch(setSearch(''));
  };


  return (
    <Card sx={{ p: 2 }}>
      <Tooltip title="Search by club name">
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
          sx={{ maxWidth: 500 }}
        />
      </Tooltip>
    </Card>
  )
};
