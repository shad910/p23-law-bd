import React, { use, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const LawyersData = ({ lawyersData }) => {

    const lawyers = use(lawyersData);

    const [visibleCount, setVisibleCount] = useState(6);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-self-center mx-auto gap-8 mb-10'>
                {
                    lawyers.slice(0, visibleCount).map(lawyer => <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>)
                }
            </div>
            <div className='flex justify-center'>
                <button onClick={() => setVisibleCount(visibleCount + 6)}
                    className='btn bg-[#0EA106] text-white rounded-4xl hover:text-[#0EA106] hover:bg-white hover:border-[#0EA106]'>
                    Show All Lawyer
                </button>
            </div>
        </div>
    );
};

export default LawyersData;