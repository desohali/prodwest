import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Chip,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { setClubsAdminSelected } from '@/src/features/ordersSlice';
import CheckIcon from '@mui/icons-material/Check';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { format } from 'date-fns';

export const CompaniesAdminTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => { },
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  const dispatch = useDispatch();

  const { clubsAdminSelected = [] } = useSelector((state) => state.orders);
  const selectedSome = (clubsAdminSelected.length > 0) && (clubsAdminSelected.length < items.length);
  const selectedAll = (items.length > 0) && (clubsAdminSelected.length === items.length);

  const selectOne = (clubAdmin) => {
    dispatch(setClubsAdminSelected([...clubsAdminSelected, ...[clubAdmin]]));
  };
  const deselectOne = (clubAdmin) => {
    dispatch(setClubsAdminSelected(clubsAdminSelected.filter(({ Id }) => Id != clubAdmin?.Id)));
  };

  const selectAll = () => {
    dispatch(setClubsAdminSelected(items));
  };
  const deselectAll = () => {
    dispatch(setClubsAdminSelected([]));
  };

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        selectAll();
                      } else {
                        deselectAll();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  Order
                </TableCell>
                {/* <TableCell>
                  Payment Method
                </TableCell> */}
                <TableCell>
                  Customer
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>

                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : items).map((clubAdmin) => {

                  const isSelected = clubsAdminSelected.find(({ Id }) => Id == clubAdmin?.Id) ? true : false;

                  return (
                    <TableRow
                      hover
                      key={clubAdmin?.Id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected}
                          onChange={(event) => {
                            if (event.target.checked) {
                              selectOne(clubAdmin);
                            } else {
                              deselectOne(clubAdmin);
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <ListItem>
                          <ListItemText primary={"APR 22. ORD-001"} secondary={`1 Products. $${Number(clubAdmin?.subtotal)?.toFixed(2)}`} />
                        </ListItem>
                      </TableCell>
                      {/* <TableCell>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <CreditCardIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Mastercard" secondary="**** **** 2244" />
                        </ListItem>
                      </TableCell> */}
                      <TableCell>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <AccountCircleIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Hamer albarran valderrama" secondary="hameralbarran@gmail.com" />
                        </ListItem>
                      </TableCell>
                      <TableCell>
                        <Chip color='warning' icon={<CheckIcon />} label={clubAdmin?.order_status} />
                      </TableCell>
                      <TableCell>
                        <Tooltip title="Details">
                          <IconButton onClick={() => {

                          }}>
                            <Avatar sx={{ width: 32, height: 32 }}>
                              <VisibilityIcon />
                            </Avatar>
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CompaniesAdminTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
