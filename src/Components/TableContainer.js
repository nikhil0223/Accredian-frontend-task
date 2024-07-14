import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ReferralFormModal from './Form';

const TableContain = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-full">
      <div className="mt-16">
        <Box
          component="section"
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
        >
          <Typography
            className="text-lg font-bold"
            sx={{
              color: 'black',
              fontSize: '1.1rem',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationColor: 'blue',
              },
            }}
          >
            What are the{' '}
            <span style={{ color: 'blue' }} className="text-lg font-bold">
              Referral benefits?
            </span>
          </Typography>
        </Box>
      </div>
      <div className="mt-12 flex flex-wrap lg:justify-center ">
        <div className="w-full lg:w-2/12 mt-24">
          <div className="">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: '40vh', sm: '40vh', md: '65vh', lg: '65vh' },
                borderRadius: 8,
              }}
            >
              <Box
                sx={{
                  width: '75%',
                  backgroundColor: '#ffffff',
                  boxShadow: 3,
                  border: '1px solid #ccc',
                  borderRadius: 8,
                }}
              >
                <Box sx={{ borderRadius: 8 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: '#1A73E8',
                      p: 1,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      color: 'white',
                    }}
                  >
                    All Programs
                  </Typography>
                  <ul className="px-2 text-gray-600">
                    <li className="flex items-center justify-between my-3 py-2 border-b border-gray-300 px-4">
                      <span className="text-gray-600">Item 1</span>
                      <span className="text-gray-600">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                    <li className="flex items-center justify-between my-3 py-2 border-b border-gray-300 px-4">
                      <span className="text-gray-600">Item 1</span>
                      <span className="text-gray-600">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                    <li className="flex items-center justify-between my-3 py-2 border-b border-gray-300 px-4">
                      <span className="text-gray-600">Item 1</span>
                      <span className="text-gray-600">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                    <li className="flex items-center justify-between my-3 py-2 border-b border-gray-300 px-4">
                      <span className="text-gray-600">Item 1</span>
                      <span className="text-gray-600">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                    <li className="flex items-center justify-between my-3 py-2 border-b border-gray-300 px-4">
                      <span className="text-gray-600">Item 1</span>
                      <span className="text-gray-600">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                    <li className="flex items-center justify-between my-3 py-2 border-b border-gray-300 px-4">
                      <span className="text-gray-600">Item 1</span>
                      <span className="text-gray-600">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                    <li className="flex items-center justify-between my-3 py-2 border-b border-gray-300 px-4">
                      <span className="text-gray-600">Item 1</span>
                      <span className="text-gray-600">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                    <li className="flex items-center justify-between my-3 py-2 border-b border-gray-300 px-4">
                      <span className="text-gray-600">Item 1</span>
                      <span className="text-gray-600">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
        <div className="w-full mx-6 lg:w-6/12 mt-24">
          <Box>
            <TableContainer sx={{ border: '1px solid #ccc', borderRadius: 8, boxShadow: 3 }}>
              <Table>
                <TableHead sx={{ backgroundColor: '#EEF5FF' }}>
                  <TableRow sx={{}}>
                    <TableCell
                      sx={{ width: '50%', borderBottom: '1px solid #ccc', pb: 2, fontWeight: 'bold', color: '#1350A0' }}
                    >
                      Programs
                    </TableCell>
                    <TableCell
                      sx={{ width: '25%', borderBottom: '1px solid #ccc', pb: 2, fontWeight: 'bold', color: '#1350A0' }}
                    >
                      Referrer Bonus
                    </TableCell>
                    <TableCell
                      sx={{ width: '25%', borderBottom: '1px solid #ccc', pb: 2, fontWeight: 'bold', color: '#1350A0' }}
                    >
                      Referee Bonus
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Data 1</TableCell>
                    <TableCell>$ 7000</TableCell>
                    <TableCell>$ 9000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Data 4</TableCell>
                    <TableCell>Data 5</TableCell>
                    <TableCell>Data 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Data 4</TableCell>
                    <TableCell>Data 5</TableCell>
                    <TableCell>Data 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Data 4</TableCell>
                    <TableCell>Data 5</TableCell>
                    <TableCell>Data 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Data 4</TableCell>
                    <TableCell>Data 5</TableCell>
                    <TableCell>Data 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Data 4</TableCell>
                    <TableCell>Data 5</TableCell>
                    <TableCell>Data 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Data 4</TableCell>
                    <TableCell>Data 5</TableCell>
                    <TableCell>Data 6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Data 4</TableCell>
                    <TableCell>Data 5</TableCell>
                    <TableCell>Data 6</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              <div className="rounded-lg flex border border-gray-300">
                <Button sx={{ color: 'gray' }}>cources</Button>
                <FontAwesomeIcon icon={faChevronDown} className="text-gray py-2 px-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button
          onClick={handleOpen}
          sx={{
            backgroundColor: '#1A73E8',
            color: 'white',
            height: '4rem',
            width: '12rem',
            '&:hover': {
              transform: 'scale(1.1)',
              outline: 'none',
              boxShadow: '0 0 6px rgba(26, 115, 232, 0.5)',
              backgroundColor: '#1A73E8',
            },
          }}
        >
          Refer Now
        </Button>
        <ReferralFormModal open={open} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default TableContain;
