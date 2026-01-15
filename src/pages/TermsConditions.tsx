import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/sections/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsConditions() {
  const { language } = useLanguage();

  const content = language === 'id' ? {
    title: 'Syarat & Ketentuan',
    subtitle: 'Terakhir diperbarui: Januari 2025',
    sections: [
      {
        title: 'Penerimaan Ketentuan',
        content: 'Dengan mengakses dan menggunakan layanan Zanscode, Anda menyetujui untuk terikat oleh Syarat & Ketentuan ini. Jika Anda tidak setuju dengan ketentuan ini, mohon untuk tidak menggunakan layanan kami.'
      },
      {
        title: 'Layanan Kami',
        content: 'Zanscode menyediakan layanan pengembangan perangkat lunak, termasuk namun tidak terbatas pada pengembangan web, aplikasi mobile, dan solusi SaaS. Detail spesifik layanan akan diuraikan dalam perjanjian proyek terpisah.'
      },
      {
        title: 'Kewajiban Klien',
        content: 'Klien setuju untuk memberikan informasi yang akurat, merespons komunikasi secara tepat waktu, dan memberikan umpan balik yang diperlukan selama proses pengembangan. Keterlambatan dari pihak klien dapat mempengaruhi jadwal proyek.'
      },
      {
        title: 'Pembayaran',
        content: 'Ketentuan pembayaran akan ditentukan dalam proposal atau kontrak proyek. Faktur harus dibayar sesuai dengan jadwal yang disepakati. Keterlambatan pembayaran dapat mengakibatkan penghentian pekerjaan.'
      },
      {
        title: 'Hak Kekayaan Intelektual',
        content: 'Setelah pembayaran penuh, klien akan memiliki hak kekayaan intelektual atas deliverable proyek akhir. Zanscode mempertahankan hak untuk menampilkan pekerjaan dalam portofolio kecuali disepakati lain secara tertulis.'
      },
      {
        title: 'Kerahasiaan',
        content: 'Kedua belah pihak setuju untuk menjaga kerahasiaan informasi sensitif yang dibagikan selama proyek berlangsung. Ini termasuk tetapi tidak terbatas pada strategi bisnis, data pengguna, dan kode kepemilikan.'
      },
      {
        title: 'Batasan Tanggung Jawab',
        content: 'Zanscode tidak bertanggung jawab atas kerusakan tidak langsung, insidental, atau konsekuensial. Tanggung jawab total kami tidak akan melebihi jumlah yang dibayarkan untuk layanan yang dimaksud.'
      },
      {
        title: 'Penghentian',
        content: 'Salah satu pihak dapat menghentikan layanan dengan pemberitahuan tertulis. Klien akan bertanggung jawab atas pembayaran untuk pekerjaan yang telah diselesaikan hingga tanggal penghentian.'
      },
      {
        title: 'Hubungi Kami',
        content: 'Untuk pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami di hello@zanscode.com.'
      }
    ]
  } : {
    title: 'Terms & Conditions',
    subtitle: 'Last updated: January 2025',
    sections: [
      {
        title: 'Acceptance of Terms',
        content: 'By accessing and using Zanscode services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.'
      },
      {
        title: 'Our Services',
        content: 'Zanscode provides software development services, including but not limited to web development, mobile applications, and SaaS solutions. Specific service details will be outlined in separate project agreements.'
      },
      {
        title: 'Client Responsibilities',
        content: 'Clients agree to provide accurate information, respond to communications in a timely manner, and provide necessary feedback during the development process. Delays from the client side may affect project timelines.'
      },
      {
        title: 'Payment',
        content: 'Payment terms will be specified in the project proposal or contract. Invoices must be paid according to the agreed schedule. Late payments may result in work suspension.'
      },
      {
        title: 'Intellectual Property',
        content: 'Upon full payment, the client will own the intellectual property rights to the final project deliverables. Zanscode retains the right to showcase work in portfolios unless otherwise agreed in writing.'
      },
      {
        title: 'Confidentiality',
        content: 'Both parties agree to maintain confidentiality of sensitive information shared during the project. This includes but is not limited to business strategies, user data, and proprietary code.'
      },
      {
        title: 'Limitation of Liability',
        content: 'Zanscode shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid for the services in question.'
      },
      {
        title: 'Termination',
        content: 'Either party may terminate services with written notice. The client will be responsible for payment of work completed up to the termination date.'
      },
      {
        title: 'Contact Us',
        content: 'For questions about these Terms & Conditions, please contact us at hello@zanscode.com.'
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
