import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Server, Globe, Boxes, TrendingUp } from 'lucide-react';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Server,
      title: t('services.1.title'),
      description: t('services.1.desc'),
      bgColor: 'bg-[hsl(var(--service-systems))]',
    },
    {
      icon: Globe,
      title: t('services.2.title'),
      description: t('services.2.desc'),
      bgColor: 'bg-[hsl(var(--service-websites))]',
    },
    {
      icon: Boxes,
      title: t('services.3.title'),
      description: t('services.3.desc'),
      bgColor: 'bg-[hsl(var(--service-saas))]',
    },
    {
      icon: TrendingUp,
      title: t('services.4.title'),
      description: t('services.4.desc'),
      bgColor: 'bg-[hsl(var(--service-scaling))]',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-secondary/30 hover:shadow-premium transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-white hover:text-white font-medium hover:bg-secondary-hover transition-all duration-300"
          >
            {t('services.viewMore')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
