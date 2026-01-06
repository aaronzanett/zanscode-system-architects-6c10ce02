import { useLanguage } from '@/contexts/LanguageContext';
import { Layers, Target, Shield, Handshake } from 'lucide-react';

export function TrustSection() {
  const { t } = useLanguage();

  const trustPoints = [
    {
      icon: Layers,
      title: t('trust.scalable.title'),
      description: t('trust.scalable.desc'),
    },
    {
      icon: Target,
      title: t('trust.business.title'),
      description: t('trust.business.desc'),
    },
    {
      icon: Shield,
      title: t('trust.secure.title'),
      description: t('trust.secure.desc'),
    },
    {
      icon: Handshake,
      title: t('trust.partner.title'),
      description: t('trust.partner.desc'),
    },
  ];

  return (
    <section className="pt-56 pb-24 bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t('trust.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('trust.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-secondary/30 hover:shadow-premium transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <point.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
