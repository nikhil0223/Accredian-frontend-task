import React from 'react';
import logo from '../assets/main-logo.png';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <div className="w-full  top-0 z-20 bg-white items-center">
        <div className="w-full flex px-4 py-4 border-b bg-blue-100 gap-4 justify-between md:justify-center">
          <div className="flex text-center text-lg">
            <h1 className="text-sm text-neutral-800 gap-3 lg:text-lg">
              Navigate your ideal career path with tailored expert advice
            </h1>
            <button className="text-blue-500 pl-6 font-medium text-nowrap">Contact Expert</button>
          </div>
        </div>
        <div className="w-full top-0 z-20 bg-white shadow-lg items-center py-[0.6rem] nav-3 px-4 lg:px-12">
          <div className="">
            <div className="flex justify-between">
              <div className="flex">
                <div className="mt-4 w-32 h-12">
                  <img src={logo} alt="" />
                </div>
                <div className="mx-4 my-2 py-1  hidden lg:block">
                  <div className="bg-blue-700 rounded-lg flex">
                    <Button sx={{ color: 'white' }}>cources</Button>
                    <FontAwesomeIcon icon={faChevronDown} className="text-white py-2 px-1" />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="mx-4 my-2 hidden lg:flex">
                  <h2 className="mr-8 py-2 cursor-pointer">Refer And Earn</h2>
                  <h2 className="mr-8 py-2 cursor-pointer">Resource</h2>
                  <h2 className="mr-4 py-2 cursor-pointer">About Us</h2>
                </div>
                <div className="my-2 flex">
                  <Button
                    sx={{
                      backgroundColor: 'rgba(148, 163, 184, 0.2)',
                      color: 'black',
                      marginRight: '8px',
                      borderRadius: '0.5rem',
                      '&:hover': {
                        backgroundColor: 'rgba(148, 163, 184, 0.4)',
                      },
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    sx={{
                      color: 'white',
                      backgroundColor: '#1D4ED8',
                      borderRadius: '0.5rem',
                      display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
                      '&:hover': {
                        backgroundColor: 'rgba(29, 78, 216, 0.8)',
                      },
                    }}
                  >
                    Try For Free
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
