import React, { useEffect } from 'react';
import CategoryContainer from '../../Components/Category/CategoryContainer';
import Pagination from '../../Components/Uitily/Pagination';
import AllCategoryHook from '../../hook/category/all-category-page-hook';

const AllCategoryPage = () => {
  const [category, loading, currentPage, pageCount, setPage] = AllCategoryHook();

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryContainer data={category.data} loading={loading} />
      {pageCount > 1 && (
        <Pagination pageCount={pageCount} initialPage={currentPage} onPress={handlePageChange} />
      )}
    </div>
  );
};

export default AllCategoryPage;
