import { useState, useMemo, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { TablePagination } from '@/components/admin/TablePagination';
import { useConsultations } from '@/hooks/useAdminData';
import { usePagination } from '@/hooks/usePagination';
import { SEED_CONSULTATIONS } from '@/lib/seedData';
import { useToast } from '@/hooks/use-toast';
import { Eye, Trash2, Search } from 'lucide-react';
import type { ConsultationRequest } from '@/types/admin';

export default function Consultations() {
  const [consultations, setConsultations] = useConsultations();
  const [selectedConsultation, setSelectedConsultation] = useState<ConsultationRequest | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const { toast } = useToast();

  useEffect(() => {
    if (consultations.length === 0) setConsultations(SEED_CONSULTATIONS);
  }, []);

  const filtered = useMemo(() => {
    let result = consultations;
    if (statusFilter !== 'all') result = result.filter(c => c.status === statusFilter);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(c => c.company.toLowerCase().includes(q) || c.industry.toLowerCase().includes(q));
    }
    return result;
  }, [consultations, search, statusFilter]);

  const { currentPage, totalPages, paginatedItems, goToPage, totalItems } = usePagination(filtered);

  const handleStatusChange = (id: string, status: ConsultationRequest['status']) => {
    setConsultations(consultations.map(c => c.id === id ? { ...c, status } : c));
    toast({ title: 'Status updated successfully' });
  };

  const handleDelete = (id: string) => {
    setConsultations(consultations.filter(c => c.id !== id));
    toast({ title: 'Consultation deleted successfully' });
  };

  const getStatusBadge = (status: ConsultationRequest['status']) => {
    const variants: Record<ConsultationRequest['status'], 'default' | 'secondary' | 'outline' | 'destructive'> = {
      new: 'default', 'in-progress': 'secondary', completed: 'outline', archived: 'destructive',
    };
    const labels: Record<ConsultationRequest['status'], string> = {
      new: 'New', 'in-progress': 'In Progress', completed: 'Completed', archived: 'Archived',
    };
    return <Badge variant={variants[status]}>{labels[status]}</Badge>;
  };

  return (
    <AdminLayout title="Consultation Requests">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>All Requests ({consultations.length})</CardTitle>
          <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
            <div className="relative flex-1 sm:w-52">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search company/industry..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">{search || statusFilter !== 'all' ? 'No requests found.' : 'No consultation requests yet.'}</p>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Industry</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedItems.map((consultation) => (
                    <TableRow key={consultation.id}>
                      <TableCell className="font-medium">{consultation.company}</TableCell>
                      <TableCell>{consultation.industry}</TableCell>
                      <TableCell>{consultation.budget}</TableCell>
                      <TableCell>{getStatusBadge(consultation.status)}</TableCell>
                      <TableCell>{new Date(consultation.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => setSelectedConsultation(consultation)}><Eye className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(consultation.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination currentPage={currentPage} totalPages={totalPages} totalItems={totalItems} onPageChange={goToPage} />
            </>
          )}
        </CardContent>
      </Card>

      <Dialog open={!!selectedConsultation} onOpenChange={() => setSelectedConsultation(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Consultation Request Details</DialogTitle>
          </DialogHeader>
          {selectedConsultation && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><p className="text-sm font-medium text-muted-foreground">Company</p><p className="font-medium">{selectedConsultation.company}</p></div>
                <div><p className="text-sm font-medium text-muted-foreground">Industry</p><p className="font-medium">{selectedConsultation.industry}</p></div>
                <div><p className="text-sm font-medium text-muted-foreground">Budget</p><p className="font-medium">{selectedConsultation.budget}</p></div>
                <div><p className="text-sm font-medium text-muted-foreground">Submitted</p><p className="font-medium">{new Date(selectedConsultation.createdAt).toLocaleString()}</p></div>
              </div>
              <div><p className="text-sm font-medium text-muted-foreground mb-1">Problems</p><p className="text-sm bg-muted p-3 rounded-lg">{selectedConsultation.problems}</p></div>
              <div><p className="text-sm font-medium text-muted-foreground mb-1">Goals</p><p className="text-sm bg-muted p-3 rounded-lg">{selectedConsultation.goals}</p></div>
              <div className="flex items-center gap-4 pt-4 border-t">
                <p className="text-sm font-medium text-muted-foreground">Update Status:</p>
                <Select value={selectedConsultation.status} onValueChange={(value: ConsultationRequest['status']) => {
                  handleStatusChange(selectedConsultation.id, value);
                  setSelectedConsultation({ ...selectedConsultation, status: value });
                }}>
                  <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
