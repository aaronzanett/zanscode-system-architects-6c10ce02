import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, Database, TrendingDown, MonitorX } from 'lucide-react';

export function ProblemSection() {
  const { t } = useLanguage();

  const problems = [
    {
      icon: Clock,
      title: t('problem.1.title'),
      description: t('problem.1.desc'),
    },
    {
      icon: Database,
      title: t('problem.2.title'),
      description: t('problem.2.desc'),
    },
    {
      icon: TrendingDown,
      title: t('problem.3.title'),
      description: t('problem.3.desc'),
    },
    {
      icon: MonitorX,
      title: t('problem.4.title'),
      description: t('problem.4.desc'),
    },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t('problem.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('problem.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-xl bg-background border border-border hover:border-destructive/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
