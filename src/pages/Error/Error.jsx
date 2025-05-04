import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div>
                    <img className='w-[400px]' src="https://i.ibb.co.com/4RQZ2WBQ/Oops-404-Error.png" alt="Error 404" />
                </div>
            </div>
            <div className='flex justify-center mb-10'>
                <Link to="/">
                    <button className="btn btn-lg bg-white text-[#0EA106] rounded-4xl hover:bg-[#0EA106] border-[#0EA106] hover:text-white hover:font-medium">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;