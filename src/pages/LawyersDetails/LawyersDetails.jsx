import React from 'react';
import { PiTrademarkRegisteredLight } from 'react-icons/pi';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { BsExclamationCircle } from "react-icons/bs";
import { addToDB } from '../../utility/Utility';


const LawyersDetails = () => {

    const lawyerData = useLoaderData();
    const { Id } = useParams();
    const ConID = parseInt(Id);

    const singleLawyerData = lawyerData.find((lawyer) => lawyer.id == ConID);

    const { id, image, name, specialty, licenseNumber, experience, availability, fee, available } = singleLawyerData;

    let navigate = useNavigate();

    const handleApp = (id) => {
        addToDB(id);

        navigate("/my-bookings");
    }



    return (

        <div>
            <div className='text-center space-y-2.5 my-6 bg-[#0f0f0f26] p-5 lg:p-14 rounded-4xl'>
                <h1 className='text-2xl font-extrabold'>Lawyer’s Profile Details</h1>
                <p className='text-sm text-[#141414b3] font-medium'>Explore comprehensive profiles of experienced attorneys dedicated to protecting clients’ rights and delivering <br /> results with integrity and professionalism.</p>
            </div>

            <div className='md:flex items-center p-5 lg:p-10 gap-6 bg-[#FFFFFF] border-[#14141426] rounded-2xl shadow-lg my-12'>
                <div className='mb-6 md:mb-0 flex justify-center'>
                    <img className='w-[200px] h-[270px] object-cover rounded-xl' src={image} alt={name} />
                </div>
                <div className='flex-1'>
                    <div className="badge badge-lg bg-[#176ae51a] text-[#176AE5] rounded-4xl mb-3.5">{experience} Years Experience</div>
                    <h3 className='text-lg font-extrabold mb-1.5'>{name}</h3>
                    <div className='md:flex gap-8 space-y-2 md:space-y-0'>
                        <p className='text-[#0f0f0f99]'>{specialty} Expert</p>
                        <p className='flex items-center gap-0.5 text-[#0f0f0f99] text-sm '><PiTrademarkRegisteredLight /> License No: {licenseNumber}</p>
                    </div>
                    <div className='my-4 flex'>
                        <span className='font-bold hidden md:flex'>Availability:</span> {availability.map((here, index) => <p key={index} className="badge badge-sm bg-[#ffa00033] text-[#FFA000] font-medium ml-2.5">{here}</p>)}
                    </div>
                    <p className='font-bold text-sm'>Consultation Fee: <span className='text-[#0EA106]'>Taka : {fee}</span></p>
                </div>
            </div>

            <div className='bg-[#FFFFFF] p-6 rounded-2xl shadow-lg mb-10 border-[#14141426]'>

                <p className='text-center text-lg font-bold border-b-2 border-gray-200 border-dashed py-2.5'>Book an Appointment</p>
                <div className='md:flex text-center justify-between items-center mt-4 pb-4 mb-5 border-b-2 border-gray-200 '>
                    <p className='font-bold'>Availability</p>
                    {
                        available ? <p className='badge badge-md bg-[#09982f33] text-[#09982F] font-medium'>Lawyer Available Today</p> : <p className='badge badge-md bg-red-100 text-red-500 font-medium'>Not Available</p>
                    }
                </div>
                <div className='text-[#FFA000] bg-[#ffa0001a] py-1 pl-2 rounded-4xl text-center flex items-center gap-1'> <BsExclamationCircle />
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</div>

                <button onClick={() => handleApp(id)} className='btn w-full my-8 bg-[#0EA106] text-white rounded-4xl hover:text-[#0EA106] hover:bg-white hover:border-[#0EA106]' disabled={!available}>Book Appointment Now</button>
            </div>

        </div>
    );
};

export default LawyersDetails;