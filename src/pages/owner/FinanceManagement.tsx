import { useState, useEffect, useMemo } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { TablePagination } from '@/components/admin/TablePagination';
import { usePagination } from '@/hooks/usePagination';
import { useFinance, generateId } from '@/hooks/useAdminData';
import { SEED_FINANCE } from '@/lib/seedData';
import { Plus, Pencil, Trash2, Search, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import type { FinanceRecord } from '@/types/admin';

const TYPES: FinanceRecord['type'][] = ['income', 'expense'];
const STATUSES: FinanceRecord['status'][] = ['paid', 'pending', 'overdue'];
const CATEGORIES = ['Project', 'Consulting', 'SaaS', 'Salary', 'Infrastructure', 'Marketing', 'Office', 'Software', 'Other'];

const emptyForm = { type: 'income' as FinanceRecord['type'], category: 'Project', description: '', amount: 0, date: '', invoiceNumber: '', status: 'pending' as FinanceRecord['status'] };

const statusColor: Record<string, string> = {
  paid: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  overdue: 'bg-red-100 text-red-800',
};

export default function FinanceManagement() {
  const [records, setRecords] = useFinance();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => { if (records.length === 0) setRecords(SEED_FINANCE); }, []);

  const filtered = useMemo(() => {
    return records.filter((r) => {
      const matchSearch = r.description.toLowerCase().includes(search.toLowerCase()) || r.category.toLowerCase().includes(search.toLowerCase());
      const matchType = typeFilter === 'all' || r.type === typeFilter;
      const matchStatus = statusFilter === 'all' || r.status === statusFilter;
      return matchSearch && matchType && matchStatus;
    });
  }, [records, search, typeFilter, statusFilter]);

  const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filtered, { pageSize: 8 });

  const totalIncome = records.filter(r => r.type === 'income').reduce((s, r) => s + r.amount, 0);
  const totalExpense = records.filter(r => r.type === 'expense').reduce((s, r) => s + r.amount, 0);
  const netCashFlow = totalIncome - totalExpense;

  const openAdd = () => { setForm(emptyForm); setEditingId(null); setDialogOpen(true); };
  const openEdit = (r: FinanceRecord) => {
    setForm({ type: r.type, category: r.category, description: r.description, amount: r.amount, date: r.date, invoiceNumber: r.invoiceNumber || '', status: r.status });
    setEditingId(r.id); setDialogOpen(true);
  };
  const handleSave = () => {
    if (!form.description.trim()) return;
    if (editingId) {
      setRecords((prev) => prev.map((r) => r.id === editingId ? { ...r, ...form } : r));
    } else {
      setRecords((prev) => [...prev, { id: generateId(), ...form, createdAt: new Date().toISOString() }]);
    }
    setDialogOpen(false);
  };
  const handleDelete = (id: string) => setRecords((prev) => prev.filter((r) => r.id !== id));

  return (
    <AdminLayout title="Finance Management">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-muted-foreground">Total Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent><p className="text-2xl font-bold text-green-600">${totalIncome.toLocaleString()}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-muted-foreground">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent><p className="text-2xl font-bold text-destructive">${totalExpense.toLocaleString()}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm text-muted-foreground">Net Cash Flow</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><p className={`text-2xl font-bold ${netCashFlow >= 0 ? 'text-green-600' : 'text-destructive'}`}>${netCashFlow.toLocaleString()}</p></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle>Transactions</CardTitle>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild><Button onClick={openAdd} size="sm"><Plus className="h-4 w-4 mr-1" /> Add Record</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>{editingId ? 'Edit' : 'Add'} Transaction</DialogTitle></DialogHeader>
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Type</Label>
                      <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v as FinanceRecord['type'] })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Category</Label>
                      <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div><Label>Description</Label><Input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>Amount ($)</Label><Input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })} /></div>
                    <div><Label>Date</Label><Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label>Invoice #</Label><Input value={form.invoiceNumber} onChange={(e) => setForm({ ...form, invoiceNumber: e.target.value })} /></div>
                    <div>
                      <Label>Status</Label>
                      <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as FinanceRecord['status'] })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={handleSave} className="w-full">{editingId ? 'Update' : 'Add'} Record</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search description..." value={search} onChange={(e) => { setSearch(e.target.value); goToPage(1); }} className="pl-9" />
            </div>
            <Select value={typeFilter} onValueChange={(v) => { setTypeFilter(v); goToPage(1); }}>
              <SelectTrigger className="w-[140px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); goToPage(1); }}>
              <SelectTrigger className="w-[140px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedItems.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground py-8">No records found.</TableCell></TableRow>
              ) : paginatedItems.map((r) => (
                <TableRow key={r.id}>
                  <TableCell><Badge variant="outline" className={r.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>{r.type}</Badge></TableCell>
                  <TableCell className="font-medium">{r.description}</TableCell>
                  <TableCell>{r.category}</TableCell>
                  <TableCell className={r.type === 'income' ? 'text-green-600 font-medium' : 'text-destructive font-medium'}>{r.type === 'income' ? '+' : '-'}${r.amount.toLocaleString()}</TableCell>
                  <TableCell>{r.date}</TableCell>
                  <TableCell><Badge variant="outline" className={statusColor[r.status]}>{r.status}</Badge></TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(r)}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(r.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
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
