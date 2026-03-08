import { useState, useMemo, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TablePagination } from '@/components/admin/TablePagination';
import { useServices, generateId } from '@/hooks/useAdminData';
import { usePagination } from '@/hooks/usePagination';
import { SEED_SERVICES } from '@/lib/seedData';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import type { Service } from '@/types/admin';

export default function Services() {
  const [services, setServices] = useServices();
  const [isOpen, setIsOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({ icon: '', title: '', description: '' });
  const [search, setSearch] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (services.length === 0) setServices(SEED_SERVICES);
  }, []);

  const filtered = useMemo(() => {
    if (!search) return services;
    const q = search.toLowerCase();
    return services.filter(s => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));
  }, [services, search]);

  const { currentPage, totalPages, paginatedItems, goToPage, totalItems } = usePagination(filtered);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService) {
      setServices(services.map(s => s.id === editingService.id ? { ...s, ...formData } : s));
      toast({ title: 'Service updated successfully' });
    } else {
      setServices([...services, { id: generateId(), ...formData, createdAt: new Date().toISOString() }]);
      toast({ title: 'Service added successfully' });
    }
    resetForm();
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({ icon: service.icon, title: service.title, description: service.description });
    setIsOpen(true);
  };

  const handleDelete = (id: string) => {
    setServices(services.filter(s => s.id !== id));
    toast({ title: 'Service deleted successfully' });
  };

  const resetForm = () => {
    setFormData({ icon: '', title: '', description: '' });
    setEditingService(null);
    setIsOpen(false);
  };

  return (
    <AdminLayout title="Services Management">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>Services</CardTitle>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search services..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
            <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) resetForm(); }}>
              <DialogTrigger asChild>
                <Button><Plus className="h-4 w-4 mr-2" /> Add</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="icon">Icon Name *</Label>
                    <Input id="icon" value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} placeholder="e.g., Briefcase, Cloud, Code" required />
                    <p className="text-xs text-muted-foreground">Use Lucide icon names</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input id="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea id="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required className="min-h-24" />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                    <Button type="submit">{editingService ? 'Update' : 'Add'}</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">{search ? 'No services found.' : 'No services added yet.'}</p>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Icon</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedItems.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell>{service.icon}</TableCell>
                      <TableCell className="font-medium">{service.title}</TableCell>
                      <TableCell className="max-w-xs truncate">{service.description}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}><Pencil className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
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
    </AdminLayout>
  );
}
