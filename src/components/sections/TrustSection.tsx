import { useLanguage } from '@/contexts/LanguageContext';
import { Layers, Target, Shield, Handshake } from 'lucide-react';

const partners = [
  { name: 'Microsoft', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Alibaba Cloud', logo: 'https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png' },
  { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Digital Ocean', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' },
  { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
];

export function TrustSection() {
  const { t, language } = useLanguage();

  const partnerHeading = language === 'id' 
    ? 'Dipercaya oleh tim dari perusahaan seperti'
    : 'Trusted by teams from companies like';

  

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
    <section className="section-padding bg-background overflow-hidden">
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

        {/* Partners */}
        <div className="mt-16">
          <p className="text-center text-sm text-muted-foreground mb-8 tracking-wide">
            {partnerHeading}
          </p>
          
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-scroll-left">
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-8 sm:px-12"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 sm:h-10 w-auto grayscale opacity-40 hover:opacity-70 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
