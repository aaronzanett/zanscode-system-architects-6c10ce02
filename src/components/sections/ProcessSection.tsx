import { useLanguage } from '@/contexts/LanguageContext';

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    t('process.1'),
    t('process.2'),
    t('process.3'),
    t('process.4'),
    t('process.5'),
    t('process.6'),
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t('process.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-secondary/50 via-secondary/30 to-transparent" />

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold shadow-lg z-10">
                  {index + 1}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm font-semibold text-foreground">
                    {step}
                  </span>
                </div>
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-secondary/30 to-secondary/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
