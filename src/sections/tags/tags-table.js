import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  IconButton,
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
import { setTag, setTagsSelected } from '@/src/features/tagSlice';
import CheckIcon from '@mui/icons-material/Check';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';

export const TagsTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => { },
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  const router = useRouter();
  const dispatch = useDispatch();

  const { tagsSelected = [] } = useSelector((state) => state.tag);
  const selectedSome = (tagsSelected.length > 0) && (tagsSelected.length < items.length);
  const selectedAll = (items.length > 0) && (tagsSelected.length === items.length);

  const selectOne = (tag) => {
    dispatch(setTagsSelected([...tagsSelected, ...[tag]]));
  };
  const deselectOne = (tag) => {
    dispatch(setTagsSelected(tagsSelected.filter(({ Id }) => Id != tag?.Id)));
  };

  const selectAll = () => {
    dispatch(setTagsSelected(items));
  };
  const deselectAll = () => {
    dispatch(setTagsSelected([]));
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
                  Enabled
                </TableCell>
                <TableCell>
                  Batch
                </TableCell>
                <TableCell>
                  Product
                </TableCell>
                <TableCell>
                  Product Label
                </TableCell>
                <TableCell>
                  Manufacturing
                </TableCell>
                <TableCell>
                  Manufacturer/Club
                </TableCell>
                <TableCell>
                  Scan Count
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : items).map((tag) => {

                  const isSelected = tagsSelected.find(({ Id }) => Id == tag?.Id) ? true : false;

                  return (
                    <TableRow
                      hover
                      key={tag?.Id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected}
                          onChange={(event) => {
                            if (event.target.checked) {
                              selectOne(tag);
                            } else {
                              deselectOne(tag);
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Stack
                          alignItems="center"
                          direction="row"
                          spacing={2}
                        >
                          {/* <Avatar>
                            {tag?.FirstName?.charAt(0).toUpperCase()}
                          </Avatar> */}
                          <Chip icon={<CheckIcon />} label="success" color={tag?.Enabled ? "success" : "warning"} />
                        </Stack>
                      </TableCell>
                      <TableCell>
                        {tag?.Batch}
                      </TableCell>
                      <TableCell>
                        {tag?.Product}
                      </TableCell>
                      <TableCell>
                        {tag?.ProductLabel}
                      </TableCell>
                      <TableCell>
                        {tag?.Manufacturing && format(new Date(tag?.Manufacturing), "yyyy/MM/dd HH:mm")}
                      </TableCell>
                      <TableCell>
                        {tag?.ManufacturerClub}
                      </TableCell>
                      <TableCell>
                        {tag?.ScanCount}
                      </TableCell>
                      <TableCell>
                        <Tooltip title="Details">
                          <IconButton onClick={() => {
                            dispatch(setTag(tag));
                            router.push(`/tags/${tag?.Id}`);
                          }}>
                            <Avatar sx={{ width: 32, height: 32 }}>
                              <FindInPageIcon />
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

TagsTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
