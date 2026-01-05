import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
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

  return (
    <footer className="gradient-dark text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide-premium text-slate-300 mb-4">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@zanscode.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  hello@zanscode.com
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  {t('nav.cta')} →
                </Link>
              </li>
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
