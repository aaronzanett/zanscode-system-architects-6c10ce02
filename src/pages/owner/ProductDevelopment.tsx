import { useState, useEffect, useMemo } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { TablePagination } from '@/components/admin/TablePagination';
import { usePagination } from '@/hooks/usePagination';
import { useProductFeatures, generateId } from '@/hooks/useAdminData';
import { SEED_PRODUCT_FEATURES } from '@/lib/seedData';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import type { ProductFeature } from '@/types/admin';

const TYPES: ProductFeature['type'][] = ['feature', 'bug', 'improvement'];
const STATUSES: ProductFeature['status'][] = ['planned', 'in-development', 'testing', 'released'];
const PRIORITIES: ProductFeature['priority'][] = ['low', 'medium', 'high', 'critical'];

const emptyForm = { product: '', title: '', description: '', type: 'feature' as ProductFeature['type'], status: 'planned' as ProductFeature['status'], priority: 'medium' as ProductFeature['priority'], version: '' };

const statusColor: Record<string, string> = {
  planned: 'bg-muted text-muted-foreground',
  'in-development': 'bg-yellow-100 text-yellow-800',
  testing: 'bg-purple-100 text-purple-800',
  released: 'bg-green-100 text-green-800',
};
const typeColor: Record<string, string> = {
  feature: 'bg-blue-100 text-blue-800',
  bug: 'bg-red-100 text-red-800',
  improvement: 'bg-orange-100 text-orange-800',
};
const priorityColor: Record<string, string> = {
  low: 'bg-muted text-muted-foreground',
  medium: 'bg-blue-100 text-blue-800',
  high: 'bg-orange-100 text-orange-800',
  critical: 'bg-red-100 text-red-800',
};

export default function ProductDevelopment() {
  const [features, setFeatures] = useProductFeatures();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => { if (features.length === 0) setFeatures(SEED_PRODUCT_FEATURES); }, []);

  const filtered = useMemo(() => {
    return features.filter((f) => {
      const matchSearch = f.title.toLowerCase().includes(search.toLowerCase()) || f.product.toLowerCase().includes(search.toLowerCase());
      const matchType = typeFilter === 'all' || f.type === typeFilter;
      const matchStatus = statusFilter === 'all' || f.status === statusFilter;
      return matchSearch && matchType && matchStatus;
    });
  }, [features, search, typeFilter, statusFilter]);

  const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filtered, { pageSize: 6 });

  const openAdd = () => { setForm(emptyForm); setEditingId(null); setDialogOpen(true); };
  const openEdit = (f: ProductFeature) => {
    setForm({ product: f.product, title: f.title, description: f.description, type: f.type, status: f.status, priority: f.priority, version: f.version || '' });
    setEditingId(f.id); setDialogOpen(true);
  };
  const handleSave = () => {
    if (!form.title.trim()) return;
    if (editingId) {
      setFeatures((prev) => prev.map((f) => f.id === editingId ? { ...f, ...form } : f));
    } else {
      setFeatures((prev) => [...prev, { id: generateId(), ...form, createdAt: new Date().toISOString() }]);
    }
    setDialogOpen(false);
  };
  const handleDelete = (id: string) => setFeatures((prev) => prev.filter((f) => f.id !== id));

  return (
    <AdminLayout title="Product Development">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle>Roadmap & Backlog</CardTitle>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild><Button onClick={openAdd} size="sm"><Plus className="h-4 w-4 mr-1" /> Add Item</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>{editingId ? 'Edit' : 'Add'} Item</DialogTitle></DialogHeader>
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>Product</Label><Input value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} /></div>
                    <div><Label>Version</Label><Input value={form.version} onChange={(e) => setForm({ ...form, version: e.target.value })} placeholder="e.g. 2.1.0" /></div>
                  </div>
                  <div><Label>Title</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
                  <div><Label>Description</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label>Type</Label>
                      <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v as ProductFeature['type'] })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Status</Label>
                      <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as ProductFeature['status'] })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Priority</Label>
                      <Select value={form.priority} onValueChange={(v) => setForm({ ...form, priority: v as ProductFeature['priority'] })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{PRIORITIES.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={handleSave} className="w-full">{editingId ? 'Update' : 'Add'} Item</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search title or product..." value={search} onChange={(e) => { setSearch(e.target.value); goToPage(1); }} className="pl-9" />
            </div>
            <Select value={typeFilter} onValueChange={(v) => { setTypeFilter(v); goToPage(1); }}>
              <SelectTrigger className="w-[150px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); goToPage(1); }}>
              <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Version</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedItems.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground py-8">No items found.</TableCell></TableRow>
              ) : paginatedItems.map((f) => (
                <TableRow key={f.id}>
                  <TableCell>{f.product}</TableCell>
                  <TableCell className="font-medium">{f.title}</TableCell>
                  <TableCell><Badge variant="outline" className={typeColor[f.type]}>{f.type}</Badge></TableCell>
                  <TableCell><Badge variant="outline" className={statusColor[f.status]}>{f.status}</Badge></TableCell>
                  <TableCell><Badge variant="outline" className={priorityColor[f.priority]}>{f.priority}</Badge></TableCell>
                  <TableCell>{f.version || '—'}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(f)}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(f.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination currentPage={currentPage} totalPages={totalPages} totalItems={filtered.length} onPageChange={goToPage} />
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
