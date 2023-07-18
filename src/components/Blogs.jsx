/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Link } from 'react-router-dom';
import { renderPaginationButtons, nextPage, prevPage, numberOfBlogs } from './Pagination';

// eslint-disable-next-line react/prop-types
const Blogs = ({blogs}) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [blogPerPage, setBlogPerPage] = useState(numberOfBlogs[3]);

    const indexOfLastBlog = currentPage * blogPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
    const currentBlog = blogs.data.slice(indexOfFirstBlog, indexOfLastBlog);
    const paginationButtons = renderPaginationButtons(currentPage, setCurrentPage, blogs, blogPerPage);

    return (
        <div className='w-full bg-[#f9f9f9f9] py-[50px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className={blogPerPage === '1' ? 'grid lg:grid-cols-3 md:grid-cols-1  gap-8 px-4 text-black' : 'grid lg:grid-cols-3 md:grid-cols-2  gap-8 px-4 text-black'}>
                    {currentBlog.map((blog) => (
                        
                            
                        <Link to={`/blog/${encodeURIComponent(blog.attributes.blogTitle.replace(/\s+/g, '_'))}`} key={blog.id}>
                            <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                                <img className='h-56 w-full object-contain' src={blog.attributes.blogImg} alt="imagem do blog" />
                                <div className='p-8 bg-slate-100'>
                                    <h3 className='font-bold text-2xl my-1'>{blog.attributes.blogTitle}</h3>
                                    <p className='text-gray-600 text-xl mb-5'>{blog.attributes.blogDescription}</p>
                                    <span className='text-gray-500 text-sm'>Autor: {blog.attributes.blogAuthor}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='mt-5 ml-4'>
                    <label htmlFor="blogsPerPage">Blogs por Página</label>
                    <select value={blogPerPage} onChange={(e) => setBlogPerPage(e.target.value)} className='mx-2' name='blogsPerPage'>
                        {Object.entries(numberOfBlogs).map((nB) => (
                            <option key={nB[1] + 1} value={nB[0]}>{nB[1]}</option>
                        ))}
                    </select>
                </div>
                <div className='flex mt-5 justify-center'>
                    <button className='mx-2 p-1 border-none rounded-xl' disabled={currentPage === 1} onClick={() => prevPage(setCurrentPage, currentPage)}>
                        <ArrowBackIosRoundedIcon></ArrowBackIosRoundedIcon>
                    </button>
                    {paginationButtons}
                    <button
                        className='mx-2 p-1 border-none rounded-xl'
                        disabled={currentPage === Math.ceil(blogs.data.length / blogPerPage)}
                        onClick={() => nextPage(setCurrentPage, currentPage)}
                    >
                        <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
