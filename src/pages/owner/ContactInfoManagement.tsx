import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useContactInfo, generateId } from '@/hooks/useAdminData';
import { useToast } from '@/hooks/use-toast';
import { Save, Mail, Phone, Instagram } from 'lucide-react';

export default function ContactInfoManagement() {
  const [contactInfo, setContactInfo] = useContactInfo();
  const [formData, setFormData] = useState({
    email: '',
    whatsapp: '',
    instagram: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    if (contactInfo) {
      setFormData({
        email: contactInfo.email,
        whatsapp: contactInfo.whatsapp,
        instagram: contactInfo.instagram,
      });
    }
  }, [contactInfo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setContactInfo({
      id: contactInfo?.id || generateId(),
      ...formData,
      updatedAt: new Date().toISOString(),
    });
    
    toast({ title: 'Contact info saved successfully' });
  };

  return (
    <AdminLayout title="Contact Info Management">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="contact@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> WhatsApp Number
              </Label>
              <Input
                id="whatsapp"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="+62812345678"
              />
              <p className="text-xs text-muted-foreground">Include country code (e.g., +62 for Indonesia)</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="instagram" className="flex items-center gap-2">
                <Instagram className="h-4 w-4" /> Instagram Username
              </Label>
              <Input
                id="instagram"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                placeholder="@yourusername"
              />
            </div>
            
            <Button type="submit" className="w-full sm:w-auto">
              <Save className="h-4 w-4 mr-2" /> Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
