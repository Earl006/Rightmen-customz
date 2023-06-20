import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';


function Main() {
  return (
    <div className='h-screen overflow-hidden'>
      <img
        className='w-screen h-full object-cover fixed top-0 left-0'
        src='images/back2.jpg'
        alt='Background'
      />
       <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">We are Rightmen Customz</h1>
          <h2 className="text-white text-2xl lg:text-4xl">
            Specialists in<br/>{' '}
            <TypeAnimation
              sequence={[
                'Minor and Major collision repairs.',
                3000,
                'Customization and Restoration.',
                3000,
                'Uphoslstery and detailed interiors.',
                3000,
                'Body and Rims respray.',
                3000,
                'Perfomance Tuning.',
                3000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                display: 'inline-block',
                fontSize: '1em',
                paddingLeft: '5px',
                color: 'orange',
                fontWeight: 'bold',
                fontStyle: 'italic',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex items-center justify-center mt-4">
      <a href="https://m.facebook.com/edeninvestment" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="cursor-pointer text-white text-2xl lg:text-4xl mr-4" size={20} />
      </a>
      <a href="https://www.instagram.com/rightmencustomz/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="cursor-pointer text-white text-2xl lg:text-4xl mr-4" size={20} />
      </a>
      <a href="https://wa.me/+254726616929" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="cursor-pointer text-white text-2xl lg:text-4xl mr-4" size={20} />
      </a>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
