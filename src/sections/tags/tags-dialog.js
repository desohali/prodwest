import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { setFiltersName, setOpenDialog } from '@/src/features/tagSlice';
import { Checkbox, DialogContent, IconButton, ListItemIcon, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { listClubs as listClubsQuery } from '../../graphql/queries';
import { generateClient } from 'aws-amplify/api';
import '../../../styles/stylesSelect.css';

const client = generateClient();

const FILTERS = [
  'Club',
  /* 'City',
  'State',
  'DateCreated' */
];

export const TagsDialog = () => {

  const dispatch = useDispatch();
  const { openDialog } = useSelector((state) => state.tag);

  const handleClose = () => {
    dispatch(setOpenDialog(false));
  };

  // filters
  const [filtersMenu, setFiltersMenu] = React.useState(FILTERS);
  const { listTags = [], filtersName } = useSelector((state) => state.tag);

  // if club
  const { club } = useSelector((state) => state.club);
  React.useEffect(() => {
    if (club && !club?.isAdmin) {
      setFiltersMenu(FILTERS.filter((item) => !["Club"].includes(item)));
    }
  }, [club]);

  React.useEffect(() => {
    // filter Club
    if (filtersName["Club"]?.checked) {
      client.graphql({
        query: listClubsQuery,
        variables: {}
      }).then(async ({ data: { listClubs: { items = [] } } }) => {
        const list = items.map((c) => ({ value: c?.Id, text: c?.Name }));
        dispatch(setFiltersName({ ...filtersName, Club: { ...filtersName?.Club, list } }));
      });
    } else {
      handleToggleSelect("Club", "");
    }
  }, [filtersName.Club?.checked]);


  const handleToggleCheckbox = (name) => () => {
    const newChecked = { ...filtersName };
    newChecked[name] = { ...newChecked[name], checked: !filtersName[name]?.checked };
    dispatch(setFiltersName(newChecked));
  };

  const handleToggleSelect = (name, value) => {
    const newChecked = { ...filtersName };
    newChecked[name] = { ...newChecked[name], value };
    dispatch(setFiltersName(newChecked));
  };


  return (
    <Dialog fullWidth minWidth="md" onClose={handleClose} open={openDialog}>
      <DialogTitle>Search Filters</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        {filtersMenu.map((name) => (
          <ListItem
            key={name}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggleCheckbox(name)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={filtersName?.[name]?.checked}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={name} />

            </ListItemButton>
            {filtersName?.[name]?.checked && (
              <TextField
                label={`Select ${name}`}
                size='small'
                name="Font"
                onChange={(e) => {
                  handleToggleSelect(name, e.target.value);
                }}
                required
                select
                SelectProps={{ native: true }}
                sx={{ minWidth: "50%", paddingLeft: "0.5rem" }}
                value={filtersName[name]?.value}
              >
                <option value={''} />
                {(filtersName[name]?.list || []).map((club) => (
                  <option
                    key={club.value}
                    value={club.value}
                  >
                    {club.text}
                  </option>
                ))}
              </TextField>

            )}
          </ListItem>
        ))}

      </DialogContent>
      {/* <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Save changes
        </Button>
      </DialogActions> */}

    </Dialog >
  );
};