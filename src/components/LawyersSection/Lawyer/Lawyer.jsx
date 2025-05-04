import React from 'react';
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { Link } from 'react-router';


const Lawyer = ({ lawyer }) => {

    const { id, image, name, specialty, licenseNumber, experience, available } = lawyer;

    return (
        <div className='md:flex items-center gap-4 lg:gap-12 bg-[#FFFFFF] shadow-xl border-2 border-[#176ae533] p-4 rounded-2xl'>
            <div className='flex justify-center'>
                <img className='w-[120px] h-[150px] object-cover rounded-xl' src={image} alt={name} />
            </div>
            <div className='flex-1'>
                <div className='md:space-x-1.5 space-y-2 lg:space-y-0  mb-2'>
                    {
                        available? <div className="badge badge-lg bg-[#09982f1a] text-[#09982F] rounded-4xl">Available</div> : <div className="badge badge-lg bg-red-100 text-red-500 rounded-4xl"> Not Available</div>
                    }
                    <div className="badge badge-lg bg-[#176ae51a] text-[#176AE5] rounded-4xl">{experience} Years Experience</div>
                </div>
                <h3 className='text-lg font-extrabold mb-1.5'>{name}</h3>
                <p className='text-[#0f0f0f99]'>{specialty} Expert</p>
                <p className='flex items-center gap-0.5 text-[#0f0f0f99] text-sm mb-2.5'><PiTrademarkRegisteredLight /> License No: {licenseNumber}</p>

                <Link to={`lawyerDetails/${id}`}>
                    <button className="btn w-full bg-slate-50 text-[#176AE5] border-[#176AE5] rounded-4xl hover:text-white hover:bg-[#176AE5] ">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Lawyer;