/* eslint-disable no-unused-vars */
export const renderPaginationButtons = (currentPage, setCurrentPage, blogs, blogPerPage) => {
  const totalBlogs = blogs.data.length;
  const totalPages = Math.ceil(totalBlogs / blogPerPage);
  const currentPageIndex = currentPage - 1;

  if (totalPages <= 1) {
    return null;
  }

  const paginationButtons = [];

  const maxButtons = 5;

  let startButtonNumber = currentPageIndex - Math.floor(maxButtons / 2);
  let endButtonNumber = currentPageIndex + Math.floor(maxButtons / 2);

  if (startButtonNumber < 0) {
    startButtonNumber = 0;
    endButtonNumber = Math.min(maxButtons - 1, totalPages - 1);
  } else if (endButtonNumber >= totalPages) {
    endButtonNumber = totalPages - 1;
    startButtonNumber = Math.max(0, endButtonNumber - (maxButtons - 1));
  }

  for (let i = startButtonNumber; i <= endButtonNumber; i++) {
    const pageNumber = i + 1;
    const isCurrentPage = pageNumber === currentPage;

    paginationButtons.push(
      <button
        className='mx-1 px-3 border-none rounded-[50%]'
        key={pageNumber}
        onClick={() => setCurrentPage(pageNumber)}
        disabled={isCurrentPage}
      >
        {pageNumber}
      </button>
    );
  }

  return paginationButtons;
};

export const nextPage = (setCurrentPage, currentPage) => {
  setCurrentPage((prevPage) => prevPage + 1);
};

export const prevPage = (setCurrentPage, currentPage) => {
  setCurrentPage((prevPage) => prevPage - 1);
};

export const numberOfBlogs = {
  1: 1,
  3: 3,
  5: 5,
  8: 8,
  10: 10
};