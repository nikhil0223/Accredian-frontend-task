import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import circle from '../assets/18512590-ai (1) 1.png';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReferralFormModal from './Form';

const Third = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="mt-12">
      <Box component="section" sx={{ p: 4, backgroundColor: '#EEF5FF' }}>
        <Box
          component="section"
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
        >
          <Typography
            className="text-lg"
            sx={{
              color: 'black',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationColor: 'blue',
              },
            }}
          >
            How Do I{' '}
            <span style={{ color: 'blue' }} className="text-lg">
              Refer?
            </span>
          </Typography>
        </Box>
        <div style={{ position: 'relative' }} className="hidden lg:block">
          <div className="relative" style={{ zIndex: 1 }}>
            <img src={circle} alt="" className="z-10" />
          </div>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}
          >
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  ml: { md: 15, lg: 24 },
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  backgroundColor: '#EEF5FF',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PersonAddIcon sx={{ fontSize: 60, color: 'blue' }} />
                <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                  Submit referrals easily via our website's referral section.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  ml: { md: 8, lg: 16 },
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  backgroundColor: '#EEF5FF',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <AssignmentIcon sx={{ fontSize: 60, color: 'blue' }} />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Earn rewards once your referral joins an Accredian program.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  ml: { md: 0, lg: 8 },
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  backgroundColor: '#EEF5FF',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <AttachMoneyIcon sx={{ fontSize: 60, color: 'blue' }} />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Both parties receive a bonus 30 days after program enrollment.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className="flex justify-center">
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
      </Box>
    </div>
  );
};

export default Third;
