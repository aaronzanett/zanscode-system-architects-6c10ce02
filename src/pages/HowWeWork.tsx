import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Search, Map, FileText, Code, Handshake } from 'lucide-react';

const HowWeWork = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t('howwework.1.title'),
      description: t('howwework.1.desc'),
      number: '01',
    },
    {
      icon: Map,
      title: t('howwework.2.title'),
      description: t('howwework.2.desc'),
      number: '02',
    },
    {
      icon: FileText,
      title: t('howwework.3.title'),
      description: t('howwework.3.desc'),
      number: '03',
    },
    {
      icon: Code,
      title: t('howwework.4.title'),
      description: t('howwework.4.desc'),
      number: '04',
    },
    {
      icon: Handshake,
      title: t('howwework.5.title'),
      description: t('howwework.5.desc'),
      number: '05',
    },
  ];

  return (
    <Layout>
      <PageHeader
        title={t('howwework.title')}
        subtitle={t('howwework.subtitle')}
        illustration="process"
      />

      {/* Steps */}
      <section className="section-padding-first bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex gap-6 lg:gap-10 p-8 rounded-2xl border border-border bg-card hover:border-secondary/30 hover:shadow-premium transition-all duration-300"
              >
                {/* Number */}
                <div className="hidden sm:flex flex-shrink-0 w-20 h-20 rounded-2xl gradient-primary items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className="h-6 w-6 text-secondary" />
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute left-[3.25rem] top-full w-px h-8 bg-gradient-to-b from-secondary/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emphasis */}
      <section className="py-20 bg-muted/50">
        <div className="container-narrow text-center">
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground italic">
            "{t('howwework.emphasis')}"
          </blockquote>
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

export default HowWeWork;
