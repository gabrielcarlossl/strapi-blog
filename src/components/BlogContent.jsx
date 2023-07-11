/* eslint-disable react/prop-types */
import React from 'react'
import { useParams } from 'react-router-dom'

const BlogContent = ({ blogs }) => {

    const { blogTitle } = useParams()
    const formattedBlogTitle = blogTitle.replace(/-/g, ' ');

    blogs.data.filter(blog => blog.blogTitle === formattedBlogTitle)
    blogs = blogs.data[0]

    return (
        <div className='w-full pb-10 bg-[#f9f9f9]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 max-w-3xl:grid-cols-3 sm:grid-cols-1 md:gap-8 px-4 md:mt-0 text-black'>

                    <div className='col-span-2 gap-x-8 gap-y-8'>
                        <img className='mt-20 h-56 w-full object-contain' src={blogs.attributes.blogImg} alt="" />
                        <h1 className='font-bold text-2xl my-1 pt-5'>{formattedBlogTitle}</h1>
                        <div className='pt-5'>
                            <p>{blogs.attributes.blogContent}</p>
                        </div>
                    </div>

                    <div className='mt-20 w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]'>
                        <div>
                            <img className='p-2 w-32 h-32 rounded-full mx-auto' src={blogs.attributes.authorImg} alt={`Imagem do autor ${blogs.attributes.blogAuthor}`} />
                            <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blogs.attributes.blogAuthor}</h1>
                            <p className='text-center text-gray-900 font-medium'>{blogs.attributes.authorDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent
