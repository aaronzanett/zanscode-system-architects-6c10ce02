import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAboutContent, generateId } from '@/hooks/useAdminData';
import { useToast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';

export default function AboutManagement() {
  const [aboutContent, setAboutContent] = useAboutContent();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    mission: '',
    vision: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    if (aboutContent) {
      setFormData({
        title: aboutContent.title,
        description: aboutContent.description,
        mission: aboutContent.mission || '',
        vision: aboutContent.vision || '',
      });
    }
  }, [aboutContent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setAboutContent({
      id: aboutContent?.id || generateId(),
      ...formData,
      updatedAt: new Date().toISOString(),
    });
    
    toast({ title: 'About content saved successfully' });
  };

  return (
    <AdminLayout title="About Page Management">
      <Card>
        <CardHeader>
          <CardTitle>About Page Content</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Page Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="About Us"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Main Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="min-h-32"
                placeholder="Describe your company..."
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mission">Mission Statement</Label>
              <Textarea
                id="mission"
                value={formData.mission}
                onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                className="min-h-24"
                placeholder="Our mission is..."
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="vision">Vision Statement</Label>
              <Textarea
                id="vision"
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                className="min-h-24"
                placeholder="Our vision is..."
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
