import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/sections/PageHeader';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Career = () => {
  const { t } = useLanguage();

  const vacancies = [
    {
      id: 1,
      title: t('career.job1.title'),
      type: t('career.fulltime'),
      location: t('career.remote'),
      department: t('career.engineering'),
      description: t('career.job1.desc'),
    },
    {
      id: 2,
      title: t('career.job2.title'),
      type: t('career.fulltime'),
      location: t('career.remote'),
      department: t('career.engineering'),
      description: t('career.job2.desc'),
    },
    {
      id: 3,
      title: t('career.job3.title'),
      type: t('career.fulltime'),
      location: t('career.remote'),
      department: t('career.design'),
      description: t('career.job3.desc'),
    },
    {
      id: 4,
      title: t('career.job4.title'),
      type: t('career.fulltime'),
      location: t('career.hybrid'),
      department: t('career.business'),
      description: t('career.job4.desc'),
    },
  ];

  return (
    <Layout>
      <PageHeader
        title={t('career.title')}
        subtitle={t('career.subtitle')}
        illustration="about"
      />

      {/* Why Join Us */}
      <section className="py-16 sm:py-20 gradient-dark text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              {t('career.why.title')}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              {t('career.why.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              {t('career.openings.title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('career.openings.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {vacancies.map((job) => (
              <div
                key={job.id}
                className="group relative p-6 sm:p-8 rounded-2xl border border-border bg-card hover:border-secondary/30 hover:shadow-premium transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary mb-3">
                      {job.department}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {job.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" />
                      {job.department}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full sm:w-auto bg-secondary hover:bg-secondary-hover text-white hover:text-white transition-all duration-300"
                  >
                    <Link to="/contact">
                      {t('career.apply')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
            {t('career.cta.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('career.cta.subtitle')}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-secondary hover:bg-secondary-hover text-white hover:text-white text-base px-8 py-6 rounded-lg font-semibold transition-all duration-300"
          >
            <Link to="/contact">
              {t('career.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
