import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Server, Globe, Boxes, TrendingUp, Check, X } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Server,
      title: t('services.1.title'),
      description: t('services.1.desc'),
      bgColor: 'bg-[hsl(var(--service-systems))]',
      features: [
        'Custom workflow automation',
        'Internal dashboards & portals',
        'CRM & ERP integrations',
        'API development',
      ],
    },
    {
      icon: Globe,
      title: t('services.2.title'),
      description: t('services.2.desc'),
      bgColor: 'bg-[hsl(var(--service-websites))]',
      features: [
        'Corporate websites',
        'Multi-language support',
        'CMS integration',
        'Performance optimized',
      ],
    },
    {
      icon: Boxes,
      title: t('services.3.title'),
      description: t('services.3.desc'),
      bgColor: 'bg-[hsl(var(--service-saas))]',
      features: [
        'MVP development',
        'Product strategy',
        'Scalable architecture',
        'Subscription systems',
      ],
    },
    {
      icon: TrendingUp,
      title: t('services.4.title'),
      description: t('services.4.desc'),
      bgColor: 'bg-[hsl(var(--service-scaling))]',
      features: [
        'System audit',
        'Performance optimization',
        'Infrastructure scaling',
        'Technical debt reduction',
      ],
    },
  ];

  const comparison = [
    {
      zanscode: t('services.comparison.1.zanscode'),
      typical: t('services.comparison.1.typical'),
    },
    {
      zanscode: t('services.comparison.2.zanscode'),
      typical: t('services.comparison.2.typical'),
    },
    {
      zanscode: t('services.comparison.3.zanscode'),
      typical: t('services.comparison.3.typical'),
    },
    {
      zanscode: t('services.comparison.4.zanscode'),
      typical: t('services.comparison.4.typical'),
    },
  ];

  return (
    <Layout>
      <PageHeader
        title={t('services.page.title')}
        subtitle={t('services.page.subtitle')}
        illustration="services"
      />

      {/* Services Grid */}
      <section className="section-padding-first bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 lg:p-10 rounded-2xl border border-border bg-card hover:border-secondary/30 hover:shadow-premium transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              {t('services.comparison.title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t('services.comparison.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border bg-card">
            {/* Header */}
            <div className="grid grid-cols-2">
              <div className="p-6 bg-secondary/10 border-r border-border">
                <h3 className="text-lg font-semibold text-secondary">
                  {t('services.comparison.zanscode')}
                </h3>
              </div>
              <div className="p-6 bg-muted/50">
                <h3 className="text-lg font-semibold text-muted-foreground">
                  {t('services.comparison.typical')}
                </h3>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-2 border-t border-border">
                <div className="p-6 border-r border-border flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{row.zanscode}</span>
                </div>
                <div className="p-6 flex items-start gap-3 bg-muted/30">
                  <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{row.typical}</span>
                </div>
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
              {t('services.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
