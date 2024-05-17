import { setFiltersName, setOpenDialog, setSearch } from '@/src/features/tagSlice';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon, IconButton, Grid, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, ButtonGroup, Button, Tooltip } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import TuneIcon from '@mui/icons-material/Tune';
import RefreshIcon from '@mui/icons-material/Refresh';
import { TagsDialog } from './tags-dialog';
import { initialState } from '../../features/tagSlice';

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

const FILTERS = [
  'Batch',
  'Manufacturing',
  'Club',
  'Product'
];


export const TagsSearch = () => {

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

  // filters
  const { filtersName } = useSelector((state) => state.tag);

  const someFilters = Object.entries(filtersName).some(([key]) => filtersName[key].value);
  const filtersLength = Object.entries(filtersName).filter(([key]) => filtersName[key].value).length;

  return (
    <Card sx={{ p: 2, width: "100%" }}>
      <Grid container spacing={[2, 5]}>
        <Grid item xs={12} md={6} lg={7}>
          <Tooltip title="Search by batch, product and product label">
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
        <Grid item xs={12} md={6} lg={5}>
          <ButtonGroup variant="contained" aria-label="Basic button group" sx={{ width: "100%" }}>
            <Button fullWidth
              onClick={() => {
                console.log('true', true)
                dispatch(setOpenDialog(true))
              }}
              startIcon={<TuneIcon />}
              variant="outlined"
              size="large"
              sx={{ height: "53.11px" }}>
              Search Filters {Boolean(filtersLength) && filtersLength}
            </Button>
            {someFilters && (
              <Button fullWidth
                onClick={() => {
                  dispatch(setFiltersName(initialState.filtersName));
                }}
                startIcon={<RefreshIcon />}
                variant="outlined"
                size="large"
                sx={{ height: "53.11px", width: "48px" }}>
              </Button>
            )}
          </ButtonGroup>
          <TagsDialog />
        </Grid>
      </Grid>

    </Card>
  )
};
