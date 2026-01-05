import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
