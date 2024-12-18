// src/components/Pagination.tsx

import React from 'react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    itemsPerPage: number;
    onItemsPerPageChange: (count: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
   currentPage,
   totalPages,
   onPageChange,
   itemsPerPage,
   onItemsPerPageChange,
}) => {
    const handlePageClick = (page: number) => {
        if (page < 1 || page > totalPages) return;
        onPageChange(page);
    };

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 ">
            <div className="flex items-center justify-around gap-2.5 mb-2 sm:mb-0">

                <Button
                    onClick={() => handlePageClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-2 py-1 text-sm"
                >
                    {'<'}
                </Button>
                {currentPage}{'/'}{totalPages}

                <Button
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-2 py-1 text-sm"
                >
                    {'>'}
                </Button>
                <select
                    value={itemsPerPage}
                    onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                    className="border border-gray-300 rounded-md p-1 text-sm"
                >
                    <option value={25}>25 / page</option>
                    <option value={50}>50 / page</option>
                </select>
            </div>
        </div>
    );
};

export default Pagination;