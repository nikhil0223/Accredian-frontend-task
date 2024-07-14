import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import contact from '../assets/div.cta-grad.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const FAQContainer = () => {
  return (
    <div className="mt-32">
      <Box component="section" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography
          className="text-lg font-bold"
          sx={{
            color: 'black',
            fontSize: '1rem',
            '&:hover': {
              textDecoration: 'underline',
              textDecorationColor: 'blue',
            },
          }}
        >
          Frequently Asked{' '}
          <span style={{ color: '#1A73E8', fontSize: '1rem' }} className="text-lg font-bold">
            Questions
          </span>
        </Typography>
      </Box>
      <div className="lg:mx-[10rem]">
        <div className="flex justify-center mx-auto">
          <div className="flex flex-wrap mx-auto">
            <div className="w-full lg:w-1/4">
              <div className="flex flex-col items-center justify-start space-y-4">
                <Button
                  sx={{
                    backgroundColor: 'white',
                    color: 'gray',
                    height: '4rem',
                    width: '12rem',
                    border: '2px solid #ccc',
                    marginTop: '4rem',
                    '&:hover': {
                      outline: 'none',
                      boxShadow: 2,
                      color: '#1A73E8',
                      border: '2px solid transparent',
                    },
                  }}
                >
                  Eligibility
                </Button>
                <Button
                  sx={{
                    backgroundColor: 'white',
                    color: 'gray',
                    height: '4rem',
                    width: '12rem',
                    border: '2px solid #ccc',
                    marginTop: '4rem',
                    '&:hover': {
                      outline: 'none',
                      boxShadow: 2,
                      color: '#1A73E8',
                      border: '2px solid transparent',
                    },
                  }}
                >
                  How To Use?
                </Button>
                <Button
                  sx={{
                    backgroundColor: 'white',
                    color: 'gray',
                    height: '4rem',
                    width: '12rem',
                    border: '2px solid #ccc',
                    marginTop: '4rem',
                    '&:hover': {
                      outline: 'none',
                      boxShadow: 2,
                      color: '#1A73E8',
                      border: '2px solid transparent',
                    },
                  }}
                >
                  Terms & Conditions
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-2/4 flex justify-center mx-12">
              <div className="mt-[4rem]">
                <Accordion sx={{ boxShadow: 'none', color: '#1A73E8', '&:before': { display: 'none' } }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography sx={{ color: 'black', fontWeight: 'bold', '&.Mui-expanded': { color: '#1A73E8' } }}>
                      Eligibility
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: 'black' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="mx-4 my-8 py-1 flex justify-center">
        <div className="bg-blue-700 rounded-lg flex">
          <Button sx={{ color: 'white' }}>Get In Touch</Button>
          <FontAwesomeIcon icon={faGreaterThan} className="text-white py-2.5 px-2" />
        </div>
      </div>
    </div>
  );
};

export default FAQContainer;
