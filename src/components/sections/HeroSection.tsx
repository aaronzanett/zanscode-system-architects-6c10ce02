import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Settings2, Handshake, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

// Trust indicator component with refined glass-morphism style
const TrustIndicator = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm">
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
      <Icon className="w-4 h-4 text-white" strokeWidth={2} />
    </div>
    <span className="text-sm font-medium text-foreground whitespace-nowrap">{text}</span>
  </div>
);

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-background">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary orb - blue */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(214, 82%, 51%, 0.15) 0%, transparent 70%)',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary orb - cyan */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(193, 100%, 68%, 0.12) 0%, transparent 70%)',
            top: '30%',
            right: '15%',
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Tertiary orb - soft pink accent */}
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(330, 80%, 70%, 0.08) 0%, transparent 70%)',
            bottom: '20%',
            left: '10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div className="container-wide relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small badge/label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary tracking-wide">System Solution Partner</span>
          </motion.div>

          {/* Headline - dramatic and editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.03em] text-foreground"
          >
            {t('hero.headline.part1')}
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-secondary via-[hsl(200,90%,50%)] to-accent bg-clip-text text-transparent">
                {t('hero.headline.part2')}
              </span>
              {/* Decorative underline */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary via-accent to-transparent rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h1>

          {/* Supporting paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-secondary to-[hsl(200,85%,45%)] hover:from-secondary/90 hover:to-[hsl(200,85%,40%)] text-white text-base px-8 py-6 rounded-full font-semibold shadow-[0_8px_30px_-6px_rgba(31,106,225,0.4)] hover:shadow-[0_12px_40px_-6px_rgba(31,106,225,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center gap-2">
                {t('hero.cta.primary')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/80 backdrop-blur-sm border-2 border-border/60 text-foreground hover:bg-white hover:border-secondary/30 hover:-translate-y-1 text-base px-8 py-6 rounded-full font-medium transition-all duration-300"
            >
              <Link to="/how-we-work">
                {t('hero.cta.secondary')}
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap lg:flex-nowrap gap-3 lg:gap-4 justify-center"
          >
            <TrustIndicator icon={Building2} text={t('hero.trust.enterprise')} />
            <TrustIndicator icon={Settings2} text={t('hero.trust.custom')} />
            <TrustIndicator icon={Handshake} text={t('hero.trust.support')} />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
