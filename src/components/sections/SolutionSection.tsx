import { useLanguage } from '@/contexts/LanguageContext';

export function SolutionSection() {
  const { t } = useLanguage();

  const steps = [
    {
      step: t('solution.1.step'),
      title: t('solution.1.title'),
      description: t('solution.1.desc'),
    },
    {
      step: t('solution.2.step'),
      title: t('solution.2.title'),
      description: t('solution.2.desc'),
    },
    {
      step: t('solution.3.step'),
      title: t('solution.3.title'),
      description: t('solution.3.desc'),
    },
    {
      step: t('solution.4.step'),
      title: t('solution.4.title'),
      description: t('solution.4.desc'),
    },
  ];

  return (
    <section className="section-padding gradient-dark text-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t('solution.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            {t('solution.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-[calc(100%-2rem)] h-px bg-gradient-to-r from-secondary/50 to-transparent z-0" />
              )}
              
              <div className="relative z-10 p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 hover:border-secondary/30 transition-all duration-300">
                <span className="text-5xl font-bold text-secondary/20 group-hover:text-secondary/40 transition-colors">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
