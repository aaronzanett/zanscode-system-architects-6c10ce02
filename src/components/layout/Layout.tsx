import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main key={pathname} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
