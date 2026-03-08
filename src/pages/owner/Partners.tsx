import { useState, useMemo, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TablePagination } from '@/components/admin/TablePagination';
import { usePartners, generateId } from '@/hooks/useAdminData';
import { usePagination } from '@/hooks/usePagination';
import { SEED_PARTNERS } from '@/lib/seedData';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import type { Partner } from '@/types/admin';

export default function Partners() {
  const [partners, setPartners] = usePartners();
  const [isOpen, setIsOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [formData, setFormData] = useState({ name: '', logo: '', website: '' });
  const [search, setSearch] = useState('');
  const { toast } = useToast();

  // Seed dummy data on first load
  useEffect(() => {
    if (partners.length === 0) {
      setPartners(SEED_PARTNERS);
    }
  }, []);

  const filtered = useMemo(() => {
    if (!search) return partners;
    const q = search.toLowerCase();
    return partners.filter(p =>
      p.name.toLowerCase().includes(q) || (p.website || '').toLowerCase().includes(q)
    );
  }, [partners, search]);

  const { currentPage, totalPages, paginatedItems, goToPage, totalItems } = usePagination(filtered);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPartner) {
      setPartners(partners.map(p => p.id === editingPartner.id ? { ...p, ...formData } : p));
      toast({ title: 'Partner updated successfully' });
    } else {
      setPartners([...partners, { id: generateId(), ...formData, createdAt: new Date().toISOString() }]);
      toast({ title: 'Partner added successfully' });
    }
    resetForm();
  };

  const handleEdit = (partner: Partner) => {
    setEditingPartner(partner);
    setFormData({ name: partner.name, logo: partner.logo || '', website: partner.website || '' });
    setIsOpen(true);
  };

  const handleDelete = (id: string) => {
    setPartners(partners.filter(p => p.id !== id));
    toast({ title: 'Partner deleted successfully' });
  };

  const resetForm = () => {
    setFormData({ name: '', logo: '', website: '' });
    setEditingPartner(null);
    setIsOpen(false);
  };

  return (
    <AdminLayout title="Partners Management">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>Partners</CardTitle>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search partners..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
            <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) resetForm(); }}>
              <DialogTrigger asChild>
                <Button><Plus className="h-4 w-4 mr-2" /> Add</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{editingPartner ? 'Edit Partner' : 'Add New Partner'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Partner Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="logo">Logo URL</Label>
                    <Input id="logo" value={formData.logo} onChange={(e) => setFormData({ ...formData, logo: e.target.value })} placeholder="https://..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website URL</Label>
                    <Input id="website" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} placeholder="https://..." />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                    <Button type="submit">{editingPartner ? 'Update' : 'Add'}</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">{search ? 'No partners found.' : 'No partners added yet.'}</p>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Website</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedItems.map((partner) => (
                    <TableRow key={partner.id}>
                      <TableCell className="font-medium">{partner.name}</TableCell>
                      <TableCell>{partner.website || '-'}</TableCell>
                      <TableCell>{new Date(partner.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(partner)}><Pencil className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(partner.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
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
