import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 font-sans">
      <h1 className="text-center text-3xl mt-8 text-gray-800" id="about">
        About Us
      </h1>
      <div className="h-1.5 w-10 bg-yellow-500 mx-auto mt-4 mb-8" />
      <div className="max-w-3xl mx-auto text-gray-700">
        <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
          At Rightmen Customz, we are passionate about cars and providing exceptional service to our customers.
          Our team of experienced professionals is dedicated to providing you with the highest quality workmanship and customer service.
          We specialize in a complete range of automotive services, from minor to major collision repairs.
          Our skilled technicians have the expertise and tools necessary to get your vehicle back on the road and looking like new again.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
          In addition to collision repairs, we offer customizations and restorations of all types of cars.
          Whether you want to update your car with a new paint job, add custom wheels and tires, or completely overhaul the interior,
          we have the expertise and experience to make your vision a reality.
          Our team also specializes in upholstery and detailed interiors.
          We understand that the interior of your car is just as important as the exterior, and we take great care to ensure that every detail is perfect.
          From custom upholstery to intricate detailing, we have the skills and expertise to transform your car's interior into a work of art.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
          At Rightmen Customz, we pride ourselves in giving every case, from small to large, the utmost attention and care.
          We know that your car is important to you, and we treat every vehicle that comes through our doors as if it were our own.
          We strive to exceed your expectations and ensure that you are completely satisfied with our work.
          Thank you for choosing Rightmen Customz for all of your automotive needs.
          We look forward to working with you and making your automotive dreams a reality.
        </p>
      </div>
    </div>
  );
}

export default About;
