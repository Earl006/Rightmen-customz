import React from 'react';
import {AiOutlineMenu,AiOutlineHome,AiOutlineProject,AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-4">Contact Information</h4>
            <p className="text-gray-400">FreeArea, Nakuru, Kenya</p>
            <p className="text-gray-400">Phone: +254727068900</p>
            <p className="text-gray-400">Email: info@rightmencustomz.com</p>
          </div>
          <div className="mt-6 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href='#main'>
              <AiOutlineHome size={20}  style={{olor:'white'}}/>
                </a>
              </li>
              <li>
               <a href='#about'>
               <BsPerson size={20} />

               </a>
              </li>
              <li>
                <a href='#projects'>
                <AiOutlineProject size={20} />

                </a>
              </li>
              <li>
                <a href='#contact'>
                    <AiOutlineMail size={20}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rightmen Customz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
