import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/sections/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = language === 'id' ? {
    title: 'Kebijakan Privasi',
    subtitle: 'Terakhir diperbarui: Januari 2025',
    sections: [
      {
        title: 'Pendahuluan',
        content: 'Zanscode berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami.'
      },
      {
        title: 'Informasi yang Kami Kumpulkan',
        content: 'Kami dapat mengumpulkan informasi berikut: nama dan informasi kontak, alamat email, nomor telepon, informasi perusahaan, dan data teknis seperti alamat IP dan informasi browser.'
      },
      {
        title: 'Bagaimana Kami Menggunakan Informasi Anda',
        content: 'Kami menggunakan informasi yang dikumpulkan untuk: menyediakan dan memelihara layanan kami, berkomunikasi dengan Anda tentang proyek dan layanan, meningkatkan layanan kami, dan mematuhi kewajiban hukum.'
      },
      {
        title: 'Perlindungan Data',
        content: 'Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda dari akses, pengubahan, pengungkapan, atau penghancuran yang tidak sah.'
      },
      {
        title: 'Berbagi Informasi',
        content: 'Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali jika diperlukan untuk menyediakan layanan atau mematuhi hukum.'
      },
      {
        title: 'Hak Anda',
        content: 'Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi pribadi Anda. Hubungi kami jika Anda ingin menggunakan hak-hak ini.'
      },
      {
        title: 'Hubungi Kami',
        content: 'Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di hello@zanscode.com.'
      }
    ]
  } : {
    title: 'Privacy Policy',
    subtitle: 'Last updated: January 2025',
    sections: [
      {
        title: 'Introduction',
        content: 'Zanscode is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.'
      },
      {
        title: 'Information We Collect',
        content: 'We may collect the following information: name and contact information, email address, phone number, company information, and technical data such as IP address and browser information.'
      },
      {
        title: 'How We Use Your Information',
        content: 'We use the collected information to: provide and maintain our services, communicate with you about projects and services, improve our services, and comply with legal obligations.'
      },
      {
        title: 'Data Protection',
        content: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.'
      },
      {
        title: 'Information Sharing',
        content: 'We do not sell, trade, or transfer your personal information to third parties without your consent, except when necessary to provide services or comply with the law.'
      },
      {
        title: 'Your Rights',
        content: 'You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights.'
      },
      {
        title: 'Contact Us',
        content: 'If you have any questions about this Privacy Policy, please contact us at hello@zanscode.com.'
      }
    ]
  };

  return (
    <Layout>
      <PageHeader title={content.title} subtitle={content.subtitle} />
      
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
