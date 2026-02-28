import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, GitBranch, Shield, BarChart3, Users, TrendingUp, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function FloatingCard({ children, className, delay = 0, y = [0, -12, 0] }: { children: React.ReactNode; className?: string; delay?: number; y?: number[] }) {
  return (
    <motion.div
      className={`rounded-xl border border-border/40 bg-card/60 backdrop-blur-md shadow-lg px-4 py-3 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay + 0.6, ease: 'easeOut' }}
    >
      <motion.div
        animate={{ y }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, hsl(217 78% 20% / 0.04) 0%, hsl(214 82% 51% / 0.06) 30%, hsl(240 60% 55% / 0.05) 60%, hsl(193 100% 68% / 0.04) 100%)',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Floating gradient blobs */}
      <motion.div
        className="absolute -left-32 top-1/3 w-[550px] h-[550px] rounded-full opacity-[0.12] blur-[130px] pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(circle, hsl(214 82% 51%), hsl(240 60% 50%) 50%, transparent 80%)',
        }}
        animate={{
          x: [0, 40, -10, 30, 0],
          y: [0, -30, 20, -15, 0],
          scale: [1, 1.08, 0.96, 1.04, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-32 top-1/2 w-[450px] h-[450px] rounded-full opacity-[0.10] blur-[120px] pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(circle, hsl(193 100% 68%), hsl(214 82% 51%) 60%, transparent 80%)',
        }}
        animate={{
          x: [0, -30, 15, -20, 0],
          y: [0, 25, -20, 10, 0],
          scale: [1, 0.94, 1.06, 0.98, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide px-4 py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-left max-w-2xl">
            {/* Headline with fade-up */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.12] tracking-[-0.025em] text-foreground"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {t('hero.headline.part1')}
              <br />
              <span className="text-gradient">
                {t('hero.headline.part2')}
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden text-base px-8 py-6 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_28px_-4px_hsl(var(--secondary)/0.5)] hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(240 60% 55%) 100%)',
                }}
              >
                <Link to="/contact" className="flex items-center gap-2">
                  {t('hero.cta.primary')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border/50 bg-card/40 backdrop-blur-sm text-foreground hover:bg-card/70 text-base px-8 py-6 rounded-full font-medium transition-all duration-200"
              >
                <Link to="/how-we-work">
                  {t('hero.cta.secondary')}
                </Link>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">{t('hero.trust.enterprise')}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2.5">
                <GitBranch className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">{t('hero.trust.custom')}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">{t('hero.trust.support')}</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Floating UI cards with parallax */}
          <motion.div
            className="hidden lg:flex flex-col items-center gap-5 relative w-[320px]"
            style={{ y: floatingY }}
          >
            <FloatingCard className="w-full" delay={0} y={[0, -10, 0]}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t('hero.metric.with')}</p>
                  <p className="text-sm font-semibold text-foreground">+142% Efficiency</p>
                </div>
                <TrendingUp className="w-4 h-4 text-secondary ml-auto" />
              </div>
            </FloatingCard>

            <FloatingCard className="w-full ml-8" delay={0.15} y={[0, -14, 0]}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t('hero.customers')}</p>
                  <div className="flex -space-x-2 mt-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-card" />
                    ))}
                    <div className="w-6 h-6 rounded-full bg-secondary/20 border-2 border-card flex items-center justify-center">
                      <span className="text-[9px] font-bold text-secondary">+5</span>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="w-full -ml-4" delay={0.3} y={[0, -8, 0]}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t('hero.security')}</p>
                  <p className="text-sm font-semibold text-foreground">Enterprise SSL</p>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
