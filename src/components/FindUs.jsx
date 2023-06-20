import React from 'react';

const FindUs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mt-8 text-gray-800" id="location">Find Us</h1>
      <div className="h-1.5 w-10 bg-yellow-500 mx-auto mt-4 mb-8" />

      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d31918.130709640463!2d36.0767463!3d-0.2924735!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x18298d90cf610bef%3A0xf2f21833bc7cc21a!2sNakuru!3m2!1d-0.3030988!2d36.080026!4m5!1s0x1829937abc9b0049%3A0x1c0d311e3628727e!2sRightmen%20Customz%2C%20Nakuru!3m2!1d-0.2902463!2d36.1202627!5e0!3m2!1sen!2ske!4v1681034839223!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default FindUs;
