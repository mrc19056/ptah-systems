import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Code2,
  Cpu,
  Globe,
  BarChart3,
  ShieldCheck,
  Zap,
  ChevronRight,
  Database,
  Smartphone,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Özel Yazılım Geliştirme",
      description: "İşletmenize özel, ölçeklenebilir ve yüksek performanslı web ve masaüstü uygulamaları.",
      icon: <Code2 className="w-10 h-10 text-primary" />,
    },
    {
      title: "Yapay Zeka Entegrasyonu",
      description: "Süreçlerinizi otomatize eden ve verimliliği artıran akıllı AI ve ML çözümleri.",
      icon: <Cpu className="w-10 h-10 text-primary" />,
    },
    {
      title: "Dijital Dönüşüm",
      description: "Geleneksel iş modellerinizi modern dijital dünyaya entegre eden kapsamlı stratejiler.",
      icon: <Zap className="w-10 h-10 text-primary" />,
    },
    {
      title: "Mobil Uygulama",
      description: "iOS ve Android platformlarında kullanıcı dostu, hızlı ve modern mobil deneyimler.",
      icon: <Smartphone className="w-10 h-10 text-primary" />,
    },
    {
      title: "Bulut Çözümleri",
      description: "Güvenli, esnek ve her yerden erişilebilir bulut altyapı yönetimi.",
      icon: <Database className="w-10 h-10 text-primary" />,
    },
    {
      title: "Veri Analitiği",
      description: "Verilerinizi anlamlı içgörülere dönüştürerek stratejik kararlar almanızı sağlıyoruz.",
      icon: <BarChart3 className="w-10 h-10 text-primary" />,
    },
  ];

  const stats = [
    { label: "Tamamlanan Proje", value: "150+" },
    { label: "Mutlu Müşteri", value: "80+" },
    { label: "Uzman Yazılımcı", value: "25+" },
    { label: "Yıllık Deneyim", value: "10+" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section id="home" className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-cyan-500/5 blur-[100px] rounded-full" />

          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>GÜVENİLİR TEKNOLOJİ ÇÖZÜM ORTAĞI</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                Geleceğin Dijital <br />
                <span className="text-gradient">Sistemlerini</span> İnşa Ediyoruz
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
                Ptah Systems olarak, işletmenizi yarına hazırlayan yenilikçi yazılım çözümleri, yapay zeka entegrasyonları ve stratejik dijital dönüşüm hizmetleri sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-premium flex items-center gap-2">
                  Projeye Başlayın <ChevronRight className="w-5 h-5" />
                </button>
                <button className="btn-outline">Çözümlerimizi İnceleyin</button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative hidden lg:block">
              <div className="relative z-10 glass-card p-4 rounded-3xl animate-float">
                <div className="bg-slate-900 rounded-2xl overflow-hidden aspect-video flex items-center justify-center border border-white/10 shadow-2xl relative">
                  <img
                    src="/tech-hero.png"
                    alt="Ptah Systems Tech Visual"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none" />
                </div>
              </div>
              {/* Floating Decorative Orbs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-cyan-400/20 blur-3xl rounded-full" />
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Hizmetlerimiz</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
                İşletmenizin Potansiyelini <span className="text-gradient">Teknolojiyle</span> Açığa Çıkarın
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Geniş uzmanlık alanımızla, fikirden yayına kadar her aşamada size rehberlik ediyoruz. En güncel teknolojileri kullanarak sürdürülebilir başarı sağlıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="group glass-card p-10 rounded-3xl hover:border-primary/50 transition-all duration-500 h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                    <div className="mb-8 p-4 bg-primary/5 rounded-2xl w-fit group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{service.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-24 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.1),transparent_50%)]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                  Modern Stack, <br /> <span className="text-blue-500">Üstün Performans</span>
                </h2>
                <p className="text-slate-400 mb-10 max-w-md">
                  Projelerimizde hız, güvenlik ve ölçeklenebilirlik için dünyanın en güvenilir teknolojilerini harmanlıyoruz.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {["Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", "Prisma ORM", "MySQL"].map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 grid grid-cols-3 gap-6 opacity-30 invert dark:invert-0">
                {/* Technology icons would go here, using placeholders for now */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                  <div key={n} className="bg-slate-800 aspect-square rounded-2xl border border-slate-700 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all">
                    <Globe className="w-10 h-10 text-slate-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <div className="relative glass-card bg-primary text-white p-12 md:p-20 rounded-[3rem] text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/20 blur-3xl rounded-full -ml-10 -mb-10" />

              <AnimatedSection>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                  Başarı Yolculuğunuza <br /> Bugün Başlayın
                </h2>
                <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
                  Ptah Systems uzmanlığıyla işinizi dijital dünyada bir adım öne taşıyın. Ücretsiz danışmanlık ve proje teklifi için bizimle iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-slate-50 hover:scale-105 transition-all shadow-xl">
                    Bize Mesaj Gönderin
                  </button>
                  <button className="bg-primary-foreground/10 border border-white/20 backdrop-blur-sm px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                    Hizmet Kataloğu
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
