import React from 'react'

function Contact() {
  return (
    <div id='contact'className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-center text-3xl mt-8 text-gray-800'>Contact Us</h1>
        <div className="h-1.5 w-10 bg-yellow-500 mx-auto mt-4 mb-8" />
      <form action="https://getform.io/f/dc75b8f3-355d-49ee-b55a-529caed05e65" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Name</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name'/>
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Phone</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='email'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'></textarea>
            </div>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg border-3'>Send Message</button>

      </form>
    </div>
  )
}

export default Contact