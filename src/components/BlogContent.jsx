/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogContent = ({ blogs }) => {
  const { blogTitle } = useParams();
  const formattedBlogTitle = blogTitle.replace(/_/g, ' ').replace(/ {2}/g, ' ')



    console.log(formattedBlogTitle)
  const filteredBlogs = blogs.data.filter(
    (blog) => blog.attributes.blogTitle == formattedBlogTitle
  )
  console.log('filtered', filteredBlogs)
  console.log(blogs.data )
  if (filteredBlogs.length === 0) {
    
    return <div>Nenhum blog correspondente encontrado.</div>;
  }



  return (
    <div className="w-full pb-10 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div
          className="grid lg:grid-cols-3 md:grid-cols-3 max-w-3xl:grid-cols-3 sm:grid-cols-1 md:gap-8 px-4 md:mt-0 text-black"
        >
          <div className="col-span-2 gap-x-8 gap-y-8">
            <img
              className="mt-20 h-56 w-full object-contain"
              src={filteredBlogs[0].attributes.blogImg}
              alt=""
            />
            <h1 className="font-bold text-2xl my-1 pt-5">{formattedBlogTitle}</h1>
            <div className="pt-5">
              <p>{filteredBlogs[0].attributes.blogContent}</p>
            </div>
          </div>

          <div className="mt-20 w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div>
              <img
                className="p-2 w-32 h-32 rounded-full mx-auto"
                src={filteredBlogs[0].attributes.authorImg}
                alt={`Imagem do autor ${filteredBlogs[0].attributes.blogAuthor}`}
              />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                {filteredBlogs[0].attributes.blogAuthor}
              </h1>
              <p className="text-center text-gray-900 font-medium">
                {filteredBlogs[0].attributes.authorDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
