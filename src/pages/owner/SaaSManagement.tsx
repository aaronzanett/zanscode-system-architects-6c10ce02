import { useState } from 'react';
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
import { useSaaSProducts, generateId } from '@/hooks/useAdminData';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import type { SaaSProduct } from '@/types/admin';

export default function SaaSManagement() {
  const [products, setProducts] = useSaaSProducts();
  const [isOpen, setIsOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<SaaSProduct | null>(null);
  const [formData, setFormData] = useState({ 
    icon: '', 
    title: '', 
    description: '', 
    status: 'coming-soon' as SaaSProduct['status'] 
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...formData }
          : p
      ));
      toast({ title: 'SaaS product updated successfully' });
    } else {
      const newProduct: SaaSProduct = {
        id: generateId(),
        ...formData,
        createdAt: new Date().toISOString(),
      };
      setProducts([...products, newProduct]);
      toast({ title: 'SaaS product added successfully' });
    }
    
    resetForm();
  };

  const handleEdit = (product: SaaSProduct) => {
    setEditingProduct(product);
    setFormData({ 
      icon: product.icon, 
      title: product.title, 
      description: product.description,
      status: product.status,
    });
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
    const variants: Record<SaaSProduct['status'], 'default' | 'secondary' | 'outline'> = {
      'active': 'default',
      'beta': 'secondary',
      'coming-soon': 'outline',
    };
    const labels: Record<SaaSProduct['status'], string> = {
      'active': 'Active',
      'beta': 'Beta',
      'coming-soon': 'Coming Soon',
    };
    return <Badge variant={variants[status]}>{labels[status]}</Badge>;
  };

  return (
    <AdminLayout title="SaaS Products Management">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>SaaS Products</CardTitle>
          <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) resetForm(); }}>
            <DialogTrigger asChild>
              <Button><Plus className="h-4 w-4 mr-2" /> Add Product</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="icon">Icon Name *</Label>
                  <Input
                    id="icon"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    placeholder="e.g., Cloud, Database, Shield"
                    required
                  />
                  <p className="text-xs text-muted-foreground">Use Lucide icon names</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <Select 
                    value={formData.status} 
                    onValueChange={(value: SaaSProduct['status']) => setFormData({ ...formData, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="beta">Beta</SelectItem>
                      <SelectItem value="coming-soon">Coming Soon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    className="min-h-24"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={resetForm}>Cancel</Button>
                  <Button type="submit">{editingProduct ? 'Update' : 'Add'}</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {products.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No SaaS products added yet.</p>
          ) : (
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
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.icon}</TableCell>
                    <TableCell className="font-medium">{product.title}</TableCell>
                    <TableCell>{getStatusBadge(product.status)}</TableCell>
                    <TableCell className="max-w-xs truncate">{product.description}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
