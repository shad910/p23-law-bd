import React from 'react';
import CountUp from 'react-countup';

const LawService = () => {
    return (
        <div className='my-20'>
            <div className='text-center space-y-2.5 mb-6'>
                <h2 className='text-3xl font-extrabold'>We Provide Best Law Services</h2>
                <p className='text-sm text-[#0F0F0F]'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

                <div className='px-9 py-8 bg-[#0f0f0f26] rounded-2xl'>
                    <div className='flex justify-center lg:justify-start'>
                        <img className='w-[50px] mb-2.5' src="https://i.ibb.co.com/0S4XfpZ/success-doctor.png" alt="" />
                    </div>

                    <div className='text-center lg:text-left'>
                        <h5 className='text-4xl font-extrabold mb-1.5'><CountUp end={199} duration={20} />+</h5>
                        <p className='text-[#0f0f0f99] font-medium'>Total Lawyer</p>
                    </div>
                </div>

                <div className='px-7 py-6 bg-[#0f0f0f26] rounded-2xl'>
                    <div className='flex justify-center lg:justify-start'>
                        <img className='w-[50px] mb-2.5' src="https://i.ibb.co.com/VcRyvtwV/success-review.png" alt="" />
                    </div>

                    <div className='text-center lg:text-left'>
                        <h5 className='text-4xl font-extrabold mb-1.5'><CountUp end={467} duration={20} />+</h5>
                        <p className='text-[#0f0f0f99] font-medium'>Total Reviews</p>
                    </div>
                </div>

                <div className='px-9 py-8 bg-[#0f0f0f26] rounded-2xl'>
                    <div className='flex justify-center lg:justify-start'>
                        <img className='w-[50px] mb-2.5' src="https://i.ibb.co.com/gF6kwBHF/success-patients.png" alt="" />
                    </div>

                    <div className='text-center lg:text-left'>
                        <h5 className='text-4xl font-extrabold mb-1.5'><CountUp end={1900} duration={20} />+</h5>
                        <p className='text-[#0f0f0f99] font-medium'>Cases Initiated</p>
                    </div>
                </div>

                <div className='px-9 py-8 bg-[#0f0f0f26] rounded-2xl'>
                    <div className='flex justify-center lg:justify-start'>
                        <img className='w-[50px] mb-2.5' src="https://i.ibb.co.com/0j2kLwxq/success-staffs.png" alt="" />
                    </div>

                    <div className='text-center lg:text-left'>
                        <h5 className='text-4xl font-extrabold mb-1.5'><CountUp end={300} duration={20} />+</h5>
                        <p className='text-[#0f0f0f99] font-medium'>Total Stuffs</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LawService;