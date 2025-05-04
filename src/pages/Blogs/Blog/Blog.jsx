import React from 'react';
import { LuCalendarHeart } from "react-icons/lu";


const Blog = ({ blog }) => {
    
    const { question, answer, date } = blog;
    
    return (
        <div className='p-5 bg-gray-100 rounded-2xl'>
            <p className='plus-jakarta-sans font-bold text-lg mb-2'>{question}</p>

            <p className='py-2 border-y-2 border-dotted border-gray-300 space-y-1.5'>
                <span className='text-blue-500'>Answer:</span>
                <br />
                <span className='font-medium'>{answer}</span>
            </p>
            
            <p className='mt-2 flex items-center gap-2 text-gray-500'><LuCalendarHeart /> {date}</p>
        </div>
    );
};

export default Blog;