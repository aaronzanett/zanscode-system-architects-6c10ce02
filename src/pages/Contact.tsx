import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle } from 'lucide-react';
import type { ConsultationRequest } from '@/types/admin';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    industry: '',
    problems: '',
    goals: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save to localStorage
    const existingConsultations = JSON.parse(localStorage.getItem('admin_consultations') || '[]');
    const newConsultation: ConsultationRequest = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      ...formData,
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('admin_consultations', JSON.stringify([...existingConsultations, newConsultation]));

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ company: '', industry: '', problems: '', goals: '', budget: '' });
      toast({
        title: 'Success!',
        description: 'Your consultation request has been submitted.',
      });
    }, 1500);
  };

  const nextSteps = [
    t('contact.next.1'),
    t('contact.next.2'),
    t('contact.next.3'),
    t('contact.next.4'),
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <section className="pt-32 pb-20 min-h-screen flex items-center">
          <div className="container-narrow text-center">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your consultation request has been submitted. We'll be in touch soon.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10"
            >
              Submit Another Request
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        illustration="contact"
      />

      {/* Form Section */}
      <section className="section-padding-first bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">{t('contact.form.company')}</Label>
                    <Input
                      id="company"
                      required
                      className="h-12"
                      placeholder="PT Example Indonesia"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">{t('contact.form.industry')}</Label>
                    <Input
                      id="industry"
                      required
                      className="h-12"
                      placeholder="e.g., Manufacturing, Healthcare"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="problems">{t('contact.form.problems')}</Label>
                  <Textarea
                    id="problems"
                    required
                    className="min-h-32 resize-none"
                    placeholder={t('contact.form.problems.placeholder')}
                    value={formData.problems}
                    onChange={(e) => setFormData({ ...formData, problems: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">{t('contact.form.goals')}</Label>
                  <Textarea
                    id="goals"
                    required
                    className="min-h-32 resize-none"
                    placeholder={t('contact.form.goals.placeholder')}
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">{t('contact.form.budget')}</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder={t('contact.form.budget.select')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-100">{t('contact.form.budget.1')}</SelectItem>
                      <SelectItem value="100-250">{t('contact.form.budget.2')}</SelectItem>
                      <SelectItem value="250-500">{t('contact.form.budget.3')}</SelectItem>
                      <SelectItem value="500+">{t('contact.form.budget.4')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary hover:brightness-90 text-white hover:text-white text-base px-8 py-6 rounded-lg font-semibold transition-all duration-300"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      {t('contact.form.submit')}
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Next Steps */}
            <div className="lg:col-span-2">
              <div className="sticky top-32 p-8 rounded-2xl border border-border bg-muted/30">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {t('contact.next.title')}
                </h3>
                <ol className="space-y-4">
                  {nextSteps.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-sm font-semibold text-secondary">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground leading-relaxed pt-1">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
