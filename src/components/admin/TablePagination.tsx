import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export function TablePagination({ currentPage, totalPages, totalItems, onPageChange }: TablePaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between pt-4 border-t">
      <p className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages} ({totalItems} items)
      </p>
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={page === currentPage ? 'default' : 'outline'}
            size="icon"
            className="h-8 w-8"
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
