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
import { useClients, generateId } from '@/hooks/useAdminData';
import { SEED_CLIENTS } from '@/lib/seedData';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import type { Client } from '@/types/admin';

const CLIENT_STATUSES: Client['status'][] = ['lead', 'prospect', 'active', 'inactive'];
const emptyForm = { name: '', company: '', email: '', phone: '', status: 'lead' as Client['status'], dealValue: 0, notes: '', lastContact: '' };

const statusColor: Record<string, string> = {
  lead: 'bg-blue-100 text-blue-800',
  prospect: 'bg-yellow-100 text-yellow-800',
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-muted text-muted-foreground',
};

export default function ClientManagement() {
  const [clients, setClients] = useClients();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => { if (clients.length === 0) setClients(SEED_CLIENTS); }, []);

  const filtered = useMemo(() => {
    return clients.filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.company.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === 'all' || c.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [clients, search, statusFilter]);

  const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filtered, { pageSize: 6 });

  const openAdd = () => { setForm(emptyForm); setEditingId(null); setDialogOpen(true); };
  const openEdit = (c: Client) => {
    setForm({ name: c.name, company: c.company, email: c.email, phone: c.phone, status: c.status, dealValue: c.dealValue, notes: c.notes, lastContact: c.lastContact });
    setEditingId(c.id); setDialogOpen(true);
  };
  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editingId) {
      setClients((prev) => prev.map((c) => c.id === editingId ? { ...c, ...form } : c));
    } else {
      setClients((prev) => [...prev, { id: generateId(), ...form, createdAt: new Date().toISOString() }]);
    }
    setDialogOpen(false);
  };
  const handleDelete = (id: string) => setClients((prev) => prev.filter((c) => c.id !== id));

  const totalDealValue = clients.filter(c => c.status === 'active').reduce((sum, c) => sum + c.dealValue, 0);

  return (
    <AdminLayout title="Client Management (CRM)">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Total Clients</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{clients.length}</p></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Active Clients</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">{clients.filter(c => c.status === 'active').length}</p></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Active Deal Value</CardTitle></CardHeader><CardContent><p className="text-2xl font-bold">${totalDealValue.toLocaleString()}</p></CardContent></Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle>Clients</CardTitle>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild><Button onClick={openAdd} size="sm"><Plus className="h-4 w-4 mr-1" /> Add Client</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>{editingId ? 'Edit' : 'Add'} Client</DialogTitle></DialogHeader>
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                    <div><Label>Company</Label><Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>Email</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                    <div><Label>Phone</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Status</Label>
                      <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as Client['status'] })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{CLIENT_STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div><Label>Deal Value ($)</Label><Input type="number" value={form.dealValue} onChange={(e) => setForm({ ...form, dealValue: Number(e.target.value) })} /></div>
                  </div>
                  <div><Label>Last Contact</Label><Input type="date" value={form.lastContact} onChange={(e) => setForm({ ...form, lastContact: e.target.value })} /></div>
                  <div><Label>Notes</Label><Textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></div>
                  <Button onClick={handleSave} className="w-full">{editingId ? 'Update' : 'Add'} Client</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search name or company..." value={search} onChange={(e) => { setSearch(e.target.value); goToPage(1); }} className="pl-9" />
            </div>
            <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); goToPage(1); }}>
              <SelectTrigger className="w-[150px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {CLIENT_STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Deal Value</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedItems.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No clients found.</TableCell></TableRow>
              ) : paginatedItems.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell>{c.company}</TableCell>
                  <TableCell><Badge variant="outline" className={statusColor[c.status]}>{c.status}</Badge></TableCell>
                  <TableCell>${c.dealValue.toLocaleString()}</TableCell>
                  <TableCell>{c.lastContact}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(c)}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(c.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
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
