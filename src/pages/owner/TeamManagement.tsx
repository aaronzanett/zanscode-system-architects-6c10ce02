import { useState, useEffect, useMemo } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { TablePagination } from '@/components/admin/TablePagination';
import { usePagination } from '@/hooks/usePagination';
import { useTeamMembers, generateId } from '@/hooks/useAdminData';
import { SEED_TEAM } from '@/lib/seedData';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import type { TeamMember } from '@/types/admin';

const ROLES: TeamMember['role'][] = ['owner', 'manager', 'developer', 'designer', 'marketing', 'finance'];
const STATUSES: TeamMember['status'][] = ['active', 'on-leave', 'inactive'];

const emptyForm = { name: '', email: '', role: 'developer' as TeamMember['role'], department: '', phone: '', status: 'active' as TeamMember['status'] };

export default function TeamManagement() {
  const [team, setTeam] = useTeamMembers();
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (team.length === 0) setTeam(SEED_TEAM);
  }, []);

  const filtered = useMemo(() => {
    return team.filter((m) => {
      const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase());
      const matchRole = roleFilter === 'all' || m.role === roleFilter;
      const matchStatus = statusFilter === 'all' || m.status === statusFilter;
      return matchSearch && matchRole && matchStatus;
    });
  }, [team, search, roleFilter, statusFilter]);

  const { currentPage, totalPages, paginatedItems, setCurrentPage } = usePagination(filtered, 6);

  const openAdd = () => { setForm(emptyForm); setEditingId(null); setDialogOpen(true); };
  const openEdit = (m: TeamMember) => {
    setForm({ name: m.name, email: m.email, role: m.role, department: m.department, phone: m.phone, status: m.status });
    setEditingId(m.id);
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!form.name.trim() || !form.email.trim()) return;
    if (editingId) {
      setTeam((prev) => prev.map((m) => m.id === editingId ? { ...m, ...form } : m));
    } else {
      setTeam((prev) => [...prev, { id: generateId(), ...form, joinedAt: new Date().toISOString() }]);
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: string) => setTeam((prev) => prev.filter((m) => m.id !== id));

  const statusBadge = (s: TeamMember['status']) => {
    const cls = s === 'active' ? 'bg-green-100 text-green-800' : s === 'on-leave' ? 'bg-yellow-100 text-yellow-800' : 'bg-muted text-muted-foreground';
    return <Badge variant="outline" className={cls}>{s}</Badge>;
  };

  const roleBadge = (r: TeamMember['role']) => {
    const cls = r === 'owner' ? 'bg-primary/10 text-primary' : r === 'manager' ? 'bg-secondary/10 text-secondary' : 'bg-accent/20 text-accent-foreground';
    return <Badge variant="outline" className={cls}>{r}</Badge>;
  };

  return (
    <AdminLayout title="Team Management">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle>Team Members</CardTitle>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={openAdd} size="sm"><Plus className="h-4 w-4 mr-1" /> Add Member</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>{editingId ? 'Edit' : 'Add'} Team Member</DialogTitle></DialogHeader>
                <div className="space-y-4 pt-2">
                  <div><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                  <div><Label>Email</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                  <div><Label>Phone</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                  <div><Label>Department</Label><Input value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Role</Label>
                      <Select value={form.role} onValueChange={(v) => setForm({ ...form, role: v as TeamMember['role'] })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{ROLES.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Status</Label>
                      <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as TeamMember['status'] })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={handleSave} className="w-full">{editingId ? 'Update' : 'Add'} Member</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search name or email..." value={search} onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} className="pl-9" />
            </div>
            <Select value={roleFilter} onValueChange={(v) => { setRoleFilter(v); setCurrentPage(1); }}>
              <SelectTrigger className="w-[150px]"><SelectValue placeholder="Role" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                {ROLES.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setCurrentPage(1); }}>
              <SelectTrigger className="w-[150px]"><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedItems.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No team members found.</TableCell></TableRow>
              ) : (
                paginatedItems.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell className="font-medium">{m.name}</TableCell>
                    <TableCell>{m.email}</TableCell>
                    <TableCell>{roleBadge(m.role)}</TableCell>
                    <TableCell>{m.department}</TableCell>
                    <TableCell>{statusBadge(m.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(m)}><Pencil className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(m.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          <TablePagination currentPage={currentPage} totalPages={totalPages} totalItems={filtered.length} onPageChange={setCurrentPage} />
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
