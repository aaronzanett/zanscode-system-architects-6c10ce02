import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Lightbulb, Rocket, Target } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.1.title'),
      description: t('about.values.1.desc'),
    },
    {
      icon: Rocket,
      title: t('about.values.2.title'),
      description: t('about.values.2.desc'),
    },
    {
      icon: Target,
      title: t('about.values.3.title'),
      description: t('about.values.3.desc'),
    },
  ];

  return (
    <Layout>
      <PageHeader
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        illustration="about"
      />

      {/* Philosophy */}
      <section className="section-padding-first bg-muted/50">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {t('about.philosophy.title')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.philosophy.desc')}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {t('about.why.title')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.why.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              {t('about.values.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-border bg-card hover:border-secondary/30 hover:shadow-premium transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
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

export default About;
