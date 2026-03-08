import { useState, useMemo } from 'react';

interface UsePaginationOptions {
  pageSize?: number;
}

export function usePagination<T>(items: T[], options: UsePaginationOptions = {}) {
  const { pageSize = 5 } = options;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedItems = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, safeCurrentPage, pageSize]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return {
    currentPage: safeCurrentPage,
    totalPages,
    paginatedItems,
    goToPage,
    totalItems: items.length,
  };
}
