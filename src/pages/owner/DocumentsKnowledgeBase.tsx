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
import { useDocuments, generateId } from '@/hooks/useAdminData';
import { SEED_DOCUMENTS } from '@/lib/seedData';
import { Plus, Pencil, Trash2, Search, Eye } from 'lucide-react';
import type { Document } from '@/types/admin';

const CATEGORIES: Document['category'][] = ['sop', 'legal', 'product', 'general'];
const emptyForm = { title: '', category: 'general' as Document['category'], content: '', author: '' };

const categoryColor: Record<string, string> = {
  sop: 'bg-blue-100 text-blue-800',
  legal: 'bg-red-100 text-red-800',
  product: 'bg-purple-100 text-purple-800',
  general: 'bg-muted text-muted-foreground',
};

export default function DocumentsKnowledgeBase() {
  const [docs, setDocs] = useDocuments();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [viewDialog, setViewDialog] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [viewDoc, setViewDoc] = useState<Document | null>(null);

  useEffect(() => { if (docs.length === 0) setDocs(SEED_DOCUMENTS); }, []);

  const filtered = useMemo(() => {
    return docs.filter((d) => {
      const matchSearch = d.title.toLowerCase().includes(search.toLowerCase()) || d.author.toLowerCase().includes(search.toLowerCase());
      const matchCategory = categoryFilter === 'all' || d.category === categoryFilter;
      return matchSearch && matchCategory;
    });
  }, [docs, search, categoryFilter]);

  const { currentPage, totalPages, paginatedItems, goToPage } = usePagination(filtered, { pageSize: 6 });

  const openAdd = () => { setForm(emptyForm); setEditingId(null); setDialogOpen(true); };
  const openEdit = (d: Document) => {
    setForm({ title: d.title, category: d.category, content: d.content, author: d.author });
    setEditingId(d.id); setDialogOpen(true);
  };
  const handleSave = () => {
    if (!form.title.trim()) return;
    const now = new Date().toISOString();
    if (editingId) {
      setDocs((prev) => prev.map((d) => d.id === editingId ? { ...d, ...form, updatedAt: now } : d));
    } else {
      setDocs((prev) => [...prev, { id: generateId(), ...form, updatedAt: now, createdAt: now }]);
    }
    setDialogOpen(false);
  };
  const handleDelete = (id: string) => setDocs((prev) => prev.filter((d) => d.id !== id));
  const openView = (d: Document) => { setViewDoc(d); setViewDialog(true); };

  return (
    <AdminLayout title="Documents & Knowledge Base">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle>Documents</CardTitle>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild><Button onClick={openAdd} size="sm"><Plus className="h-4 w-4 mr-1" /> Add Document</Button></DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader><DialogTitle>{editingId ? 'Edit' : 'Add'} Document</DialogTitle></DialogHeader>
                <div className="space-y-4 pt-2">
                  <div><Label>Title</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Category</Label>
                      <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v as Document['category'] })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>{CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c.toUpperCase()}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div><Label>Author</Label><Input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} /></div>
                  </div>
                  <div><Label>Content</Label><Textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={6} /></div>
                  <Button onClick={handleSave} className="w-full">{editingId ? 'Update' : 'Add'} Document</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search title or author..." value={search} onChange={(e) => { setSearch(e.target.value); goToPage(1); }} className="pl-9" />
            </div>
            <Select value={categoryFilter} onValueChange={(v) => { setCategoryFilter(v); goToPage(1); }}>
              <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c.toUpperCase()}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedItems.length === 0 ? (
                <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No documents found.</TableCell></TableRow>
              ) : paginatedItems.map((d) => (
                <TableRow key={d.id}>
                  <TableCell className="font-medium">{d.title}</TableCell>
                  <TableCell><Badge variant="outline" className={categoryColor[d.category]}>{d.category.toUpperCase()}</Badge></TableCell>
                  <TableCell>{d.author}</TableCell>
                  <TableCell>{new Date(d.updatedAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => openView(d)}><Eye className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => openEdit(d)}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(d.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination currentPage={currentPage} totalPages={totalPages} totalItems={filtered.length} onPageChange={goToPage} />
        </CardContent>
      </Card>

      <Dialog open={viewDialog} onOpenChange={setViewDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>{viewDoc?.title}</DialogTitle></DialogHeader>
          {viewDoc && (
            <div className="space-y-3 pt-2">
              <div className="flex gap-2">
                <Badge variant="outline" className={categoryColor[viewDoc.category]}>{viewDoc.category.toUpperCase()}</Badge>
                <span className="text-sm text-muted-foreground">by {viewDoc.author}</span>
              </div>
              <p className="text-sm text-foreground whitespace-pre-wrap">{viewDoc.content}</p>
              <p className="text-xs text-muted-foreground">Last updated: {new Date(viewDoc.updatedAt).toLocaleDateString()}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
