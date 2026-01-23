import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo_web.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/how-we-work', label: t('nav.howWeWork') },
    { path: '/about', label: t('nav.about') },
    { path: '/saas', label: t('nav.saas') },
    { path: '/career', label: t('nav.career') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Zanscode" className="h-6 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-premium transition-colors hover:text-secondary',
                location.pathname === link.path
                  ? 'text-secondary'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
          >
            <Globe className="h-4 w-4" />
            {language.toUpperCase()}
          </button>
          <Button asChild variant="default" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link to="/contact">{t('nav.cta')}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
          <nav className="container-wide py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-base font-medium py-2 transition-colors',
                  location.pathname === link.path
                    ? 'text-secondary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
              >
                <Globe className="h-4 w-4" />
                {language === 'id' ? 'Bahasa Indonesia' : 'English'}
              </button>
            </div>
            <Button asChild variant="default" className="mt-2 bg-secondary hover:bg-secondary/90">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                {t('nav.cta')}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
