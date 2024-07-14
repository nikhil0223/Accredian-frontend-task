import React from 'react';
import Anniversary1 from '../assets/Anniversary (7) 1.png';
import Group from '../assets/Group 22035.png';
import Anniversary2 from '../assets/Anniversary (8) 4.png';
import { Button } from '@mui/material';

const SecondContainer = () => {
  return (
    <div className="w-full mt-12">
      <div className="flex justify-center">
        <div className="w-full lg:w-4/12 flex  bg-blue-200 h-12 rounded-full text-medium">
          <h1 className="py-3 w-1/4 text-center text-neutral-600 cursor-pointer">Refer</h1>
          <h1 className="py-3 w-1/4 text-center text-neutral-600 cursor-pointer">Benefits</h1>
          <h1 className="py-3 w-1/4 text-center text-neutral-600 cursor-pointer">FAQs</h1>
          <h1 className="py-3 w-1/4 text-center text-neutral-600 cursor-pointer">Support</h1>
        </div>
      </div>
      <div className="mt-8">
        <div className="m-auto flex justify-center lg:mx-40">
          <div className="flex bg-blue-200 shadow-2xl rounded-2xl overflow-hidden">
            <div className="w-full lg:w-1/2">
              <img src={Anniversary2} alt="" />
              <img className="w-3/4 mx-12 lg:pt-16 " src={Group} alt="" />
              <div className="mx-12 mt-4 mb-6 lg:mt-20">
                <Button
                  sx={{
                    backgroundColor: '#1A73E8',
                    color: 'white',
                  }}
                >
                  Refer Now
                </Button>
              </div>
            </div>
            <div className="lg:w-3/4 flex justify-end p-0 m-0">
              <img className="w-full h-full object-cover hidden lg:block" src={Anniversary1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondContainer;
