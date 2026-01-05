import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 md:p-16 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-white text-primary hover:bg-white/90 text-base px-8 py-6 rounded-lg font-semibold shadow-lg transition-all duration-300"
            >
              <Link to="/contact">
                {t('cta.button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
