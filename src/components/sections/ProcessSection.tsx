import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function ProcessSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.7 });

  const steps = [
    t('process.1'),
    t('process.2'),
    t('process.3'),
    t('process.4'),
    t('process.5'),
    t('process.6'),
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-muted/50"
    >
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
          {/* Gradient connector line - desktop */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 overflow-hidden">
            <motion.div 
              className="h-full w-full"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--muted-foreground) / 0.2) 0%, hsl(var(--secondary)) 50%, hsl(var(--muted-foreground) / 0.2) 100%)'
              }}
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut"
                }}
              >
                {/* Step circle */}
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                <div className="mt-4 text-center">
                  <span className="text-sm font-semibold text-foreground">
                    {step}
                  </span>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="md:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-8"
                    style={{
                      background: 'linear-gradient(180deg, hsl(var(--secondary) / 0.5) 0%, hsl(var(--muted-foreground) / 0.2) 100%)'
                    }}
                    initial={{ scaleY: 0, transformOrigin: 'top' }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
