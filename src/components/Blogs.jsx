import React, { useState } from 'react'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
const Blogs = () => {

    const blogs = [
        {
            'id': 1,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 2,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 3,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 4,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 5,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 6,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 7,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 8,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 9,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End With React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 10,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End React',
            'blogDescription': '?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 11,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'React',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        },
        {
            'id': 12,
            'blogImg': '../../strapi/public/uploads/react_fe04941c3a.svg',
            'blogTitle': 'Front End',
            'blogDescription': 'What is react?',
            'blogContent': '',
            'blogAuthor': 'Gabriel Carlos'
        }
    ]
    const numberOfBlogs = {
        1: 1,
        3: 3,
        5: 5,
        8: 8,
        10: 10
    }

    const [currentPage, setCurrentPage] = useState(1)
    const [blogPerPage, setBlogPerPage] = useState(numberOfBlogs[3])

    const indexOfLastBlog = currentPage * blogPerPage
    const indexOfFirstBlog = indexOfLastBlog - blogPerPage
    const currentBlog = blogs.slice(indexOfFirstBlog, indexOfLastBlog)

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1)
    };


    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1)
    }

    const renderPaginationButtons = () => {
        const totalBlogs = blogs.length
        const totalPages = Math.ceil(totalBlogs / blogPerPage)
        const currentPageIndex = currentPage - 1

        if (totalPages <= 1) {
            return null
        }

        const paginationButtons = []

        const maxButtons = 5


        let startButtonNumber = currentPageIndex - Math.floor(maxButtons / 2)

        let endButtonNumber = currentPageIndex + Math.floor(maxButtons / 2)


        if (startButtonNumber < 0) {
            startButtonNumber = 0


            endButtonNumber = Math.min(maxButtons - 1, totalPages - 1)

        } else if (endButtonNumber >= totalPages) {
            endButtonNumber = totalPages - 1
            startButtonNumber = Math.max(0, endButtonNumber - (maxButtons - 1))
        }

        for (let i = startButtonNumber; i <= endButtonNumber; i++) {
            const pageNumber = i + 1


            const isCurrentPage = pageNumber === currentPage

            paginationButtons.push(
                <button
                    className='mx-1 p-1'
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    disabled={isCurrentPage}
                >
                    {pageNumber}
                </button>
            )
        }

        return paginationButtons;
    }

    
    return (

        <div className='w-full bg-[#f9f9f9f9] py-[50px] '>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 gap-8 px-4 text-black'>
                    {
                        currentBlog.map((blog) => (
                            <div key={blog.id} className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                                <img className='h-56 w-full object-cover' src={blog.blogImg} alt="imagem do blog" />
                                <div className='p-8 bg-slate-100'>
                                    <h3 className='font-bold text-2xl my-1 '>{blog.blogTitle}</h3>
                                    <p className='text-gray-600 text-xl mb-5'>{blog.blogDescription}</p>
                                    <span className='text-gray-500 text-sm'>Autor: {blog.blogAuthor}</span>
                                </div>
                            </div>))
                    }
                </div>
                <div className='mt-5 ml-4'>
                    <label htmlFor="blogsPerPage">Blogs por Página</label>
                    <select value={blogPerPage} onChange={e => setBlogPerPage(e.target.value)} className='mx-2' name='blogsPerPage'>
                        {Object.entries(numberOfBlogs).map((nB)=> (
                            <option key={nB.length+1} value={nB[0]}>{nB[1]}</option>
                        ))}


                    </select>
                </div>
                <div className='mt-5'>
                    <button className='mx-2 p-1' disabled={currentPage === 1} onClick={prevPage}>
                        <ArrowBackIosRoundedIcon></ArrowBackIosRoundedIcon>
                    </button>
                    {renderPaginationButtons()}
                    <button
                        className='mx-2 p-1'
                        disabled={currentPage === Math.ceil(blogs.length / blogPerPage)}
                        onClick={nextPage}
                    >
                        <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
                    </button>

                </div>
            </div>
        </div >
    )
}

export default Blogs
