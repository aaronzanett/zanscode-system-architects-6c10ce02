import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Workflow, BarChart3, Plug } from 'lucide-react';

const SaaS = () => {
  const { t } = useLanguage();

  const products = [
    {
      icon: Workflow,
      title: t('saas.product1.title'),
      description: t('saas.product1.desc'),
      status: 'coming',
    },
    {
      icon: BarChart3,
      title: t('saas.product2.title'),
      description: t('saas.product2.desc'),
      status: 'coming',
    },
    {
      icon: Plug,
      title: t('saas.product3.title'),
      description: t('saas.product3.desc'),
      status: 'coming',
    },
  ];

  return (
    <Layout>
      <PageHeader
        title={t('saas.title')}
        subtitle={t('saas.subtitle')}
        illustration="saas"
      />

      {/* Vision */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
              {t('saas.vision.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('saas.vision.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:border-secondary/30 hover:shadow-premium transition-all duration-300"
              >
                {/* Coming Soon Badge */}
                {product.status === 'coming' && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                      {t('saas.coming')}
                    </span>
                  </div>
                )}

                <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-secondary hover:bg-secondary/90 text-white text-base px-8 py-6 rounded-lg font-semibold"
          >
            <Link to="/contact">
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SaaS;
