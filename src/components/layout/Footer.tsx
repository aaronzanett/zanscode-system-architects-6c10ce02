import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MessageCircle, Instagram } from 'lucide-react';
import logo from '@/assets/logo_web.png';

export function Footer() {
  const { t } = useLanguage();

  const navigation = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/how-we-work', label: t('nav.howWeWork') },
    { path: '/about', label: t('nav.about') },
  ];

  const services = [
    t('services.1.title'),
    t('services.2.title'),
    t('services.3.title'),
    t('services.4.title'),
  ];

  const legal = [
    { path: '/privacy-policy', label: t('footer.privacy') },
    { path: '/terms-conditions', label: t('footer.terms') },
  ];

  const contacts = [
    { icon: Mail, label: 'hello@zanscode.com', href: 'mailto:hello@zanscode.com' },
    { icon: MessageCircle, label: '+62 812 3456 7890', href: 'https://wa.me/6281234567890' },
    { icon: Instagram, label: '@zanscode', href: 'https://instagram.com/zanscode' },
  ];

  return (
    <footer className="gradient-dark text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Zanscode" className="h-6 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide-premium text-slate-300 mb-4">
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide-premium text-slate-300 mb-4">
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-sm text-slate-400">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide-premium text-slate-300 mb-4">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide-premium text-slate-300 mb-4">
              {t('footer.getInTouch')}
            </h4>
            <ul className="space-y-3">
              {contacts.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <contact.icon className="w-4 h-4" />
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500 text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}