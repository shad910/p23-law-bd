import React from 'react';
import { getStoredData } from '../../utility/Utility';



const Appointment = ({ appointment, setAppointments, handleTost }) => {

    const { id, name, specialty, fee } = appointment;

    const cancelAppointment = (key, Id) => {
      
        const storedData = getStoredData();
        if (storedData && Array.isArray(storedData)) {
            const filtered = storedData.filter(id => id !== Id);
            localStorage.setItem(key, JSON.stringify(filtered));

            setAppointments(prev => prev.filter(item => item.id !== Id));
        }
    }

   
    return (
        <div className='p-6 bg-gray-50 rounded-2xl my-12 shadow-xl'>
            <div className='flex justify-between md:items-center items-end pb-2.5 border-b-2 border-gray-200 border-dashed mb-3'>
                <div className='space-y-2'>
                    <h4 className='font-bold'>{name}</h4>
                    <p className='font-medium text-sm text-[#14141499]'>{specialty} Expert</p>
                </div>
                <p className='font-medium text-sm text-[#14141499]'>Appointment Fee :  {fee} Taka</p>
            </div>
            <button onClick={() => (cancelAppointment('appointment', id),handleTost())} className="btn w-full rounded-4xl font-semibold bg-white text-[#FF0000] border-[#FF0000] hover:bg-[#FF0000] hover:text-white">Cancel Appointment</button>

            
        </div>
    );
};

export default Appointment;