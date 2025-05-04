import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog/Blog';


const Blogs = () => {

    const blogs = useLoaderData();
    
    return (
        <div>
            <div className='text-center space-y-2.5 my-6'>
                <h1 className='text-3xl font-extrabold'>Blogs</h1>
                <p className='text-sm text-[#0F0F0F]'>Let's explore some basic concepts that will make you a good developer.</p>
            </div>
            <div className='grid grid-cols-1 gap-y-5 my-10'>
                {blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)}
            </div>
        </div>
    );
};

export default Blogs;