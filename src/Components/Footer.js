import React from 'react';

const Footer = () => {
  return (
    <div className="mt-20 bg-black">
      <div className="hidden text-white w-full px-40 py-5 lg:block">
        <div className="flex justify-between items-center border-b border-white pb-5">
          <div>
            <h1 className="text-2xl font-bold">accredian</h1>
          </div>
          <div>
            <button className="bg-[#007BFF] py-1 px-2 rounded border-white border">Schedule 1-on-1 Call Now</button>
            <p className="text-sm">Speak with our learning advisor</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-2 mt-5">
            <div className="pl-3 pr-10">
              <h4 className="text-xl font-normal mb-2">Programs</h4>
              <div className="flex justify-between items-center my-2">
                <p className="font-medium">Data Science & AI</p>
                <span className="text-xl font-medium">+</span>
              </div>
              <div className="flex justify-between items-center my-2">
                <p className="font-medium">Data Science & AI</p>
                <span className="text-xl font-medium">+</span>
              </div>
              <div className="flex justify-between items-center my-2">
                <p className="font-medium">Data Science & AI</p>
                <span className="text-xl font-medium">+</span>
              </div>
              <div className="flex justify-between items-center my-2">
                <p className="font-medium">Data Science & AI</p>
                <span className="text-xl font-medium">+</span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-normal mb-2">Contact Us</h4>
              <p className="text-sm mb-1 leading-normal">
                Email us (For Data Science Queries): admissions@accredian.com
              </p>
              <p className="text-sm mb-1 leading-normal">Email us (For Product Management Queries):pm@accredian.com</p>
              <p className="text-sm mb-1 leading-normal">
                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
              </p>
              <p className="text-sm mb-1 leading-normal">Product Management Admission Helpline:+91 9625811095</p>
              <p className="text-sm mb-1 leading-normal">Enrolled Student Helpline: +91 7969322507</p>
              <p className="text-sm mb-1 leading-normal">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
              </p>
              <h4 className="text-xl font-normal my-3">Why Accredian</h4>
              <h4 className="text-xl mb-3">Follow Us</h4>
              <div className="flex items-center gap-1"></div> {/*socil icons */}
            </div>
            <div className="ml-5">
              <h4 className="text-xl font-normal mb-2">Accredian</h4>
              <ul className="">
                <li>About</li>
                <li>Carrer</li>
                <li>Blog</li>
                <li>Admission Policy</li>
                <li>Referal Policy</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Masters FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full text-white pb-4 flex justify-center">
        <p>@ 2024 Accredian A Brand of FullStack Education Pvt. Ltd. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
