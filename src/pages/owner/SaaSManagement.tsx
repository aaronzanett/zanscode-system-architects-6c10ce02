import { useState, useMemo, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { TablePagination } from '@/components/admin/TablePagination';
import { useSaaSProducts, generateId } from '@/hooks/useAdminData';
import { usePagination } from '@/hooks/usePagination';
import { SEED_SAAS } from '@/lib/seedData';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import type { SaaSProduct } from '@/types/admin';

export default function SaaSManagement() {
  const [products, setProducts] = useSaaSProducts();
  const [isOpen, setIsOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<SaaSProduct | null>(null);
  const [formData, setFormData] = useState({ icon: '', title: '', description: '', status: 'coming-soon' as SaaSProduct['status'] });
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const { toast } = useToast();

  useEffect(() => {
    if (products.length === 0) setProducts(SEED_SAAS);
  }, []);

  const filtered = useMemo(() => {
    let result = products;
    if (statusFilter !== 'all') result = result.filter(p => p.status === statusFilter);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return result;
  }, [products, search, statusFilter]);

  const { currentPage, totalPages, paginatedItems, goToPage, totalItems } = usePagination(filtered);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...formData } : p));
      toast({ title: 'SaaS product updated successfully' });
    } else {
      setProducts([...products, { id: generateId(), ...formData, createdAt: new Date().toISOString() }]);
      toast({ title: 'SaaS product added successfully' });
    }
    resetForm();
  };

  const handleEdit = (product: SaaSProduct) => {
    setEditingProduct(product);
    setFormData({ icon: product.icon, title: product.title, description: product.description, status: product.status });
    setIsOpen(true);
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast({ title: 'SaaS product deleted successfully' });
  };

  const resetForm = () => {
    setFormData({ icon: '', title: '', description: '', status: 'coming-soon' });
    setEditingProduct(null);
    setIsOpen(false);
  };

  const getStatusBadge = (status: SaaSProduct['status']) => {
    const variants: Record<SaaSProduct['status'], 'default' | 'secondary' | 'outline'> = { active: 'default', beta: 'secondary', 'coming-soon': 'outline' };
    const labels: Record<SaaSProduct['status'], string> = { active: 'Active', beta: 'Beta', 'coming-soon': 'Coming Soon' };
    return <Badge variant={variants[status]}>{labels[status]}</Badge>;
  };

  return (
    <AdminLayout title="SaaS Products Management">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CardTitle>SaaS Products</CardTitle>
          <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
            <div className="relative flex-1 sm:w-52">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="beta">Beta</SelectItem>
                <SelectItem value="coming-soon">Coming Soon</SelectItem>
              </SelectContent>
            </Select>
            <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) resetForm(); }}>
              <DialogTrigger asChild>
                <Button><Plus className="h-4 w-4 mr-2" /> Add</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="icon">Icon Name *</Label>
                    <Input id="icon" value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} placeholder="e.g., Cloud, Database" required />
                    <p className="text-xs text-muted-foreground">Use Lucide icon names</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input id="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status *</Label>
                    <Select value={formData.status} onValueChange={(v: SaaSProduct['status']) => setFormData({ ...formData, status: v })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="beta">Beta</SelectItem>
                        <SelectItem value="coming-soon">Coming Soon</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea id="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required className="min-h-24" />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                    <Button type="submit">{editingProduct ? 'Update' : 'Add'}</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">{search || statusFilter !== 'all' ? 'No products found.' : 'No SaaS products added yet.'}</p>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Icon</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedItems.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.icon}</TableCell>
                      <TableCell className="font-medium">{product.title}</TableCell>
                      <TableCell>{getStatusBadge(product.status)}</TableCell>
                      <TableCell className="max-w-xs truncate">{product.description}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}><Pencil className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
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
