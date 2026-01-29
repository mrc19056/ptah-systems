import Link from "next/link";
import { Cpu, Linkedin, Twitter, Github, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="bg-primary p-1 rounded-lg">
                                <Cpu className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-display font-bold tracking-tighter text-white">
                                PTAH <span className="text-primary text-sm">SYSTEMS</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            Geleceğin teknolojilerini bugün ayağınıza getiriyoruz. Kurumsal yazılım, yapay zeka ve dijital dönüşüm ortağınız.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Hizmetlerimiz</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#services" className="hover:text-primary transition-colors">Yazılım Geliştirme</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Yapay Zeka Çözümleri</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Bulut Teknolojileri</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">UI/UX Tasarım</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Kurumsal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Hakkımızda</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Kariyer</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Müşteri Hikayeleri</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Haberler</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Bülten</h4>
                        <p className="text-sm mb-6">En yeni teknoloji haberlerinden haberdar olun.</p>
                        <div className="flex gap-2 p-1 bg-slate-900 rounded-full border border-slate-800">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="bg-transparent border-none focus:ring-0 text-sm px-4 flex-1 outline-none"
                            />
                            <button className="bg-primary hover:bg-primary/90 text-white p-2 rounded-full transition-colors">
                                <Mail className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>&copy; {new Date().getFullYear()} Ptah Systems Limited. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
                        <Link href="#" className="hover:text-white transition-colors">Kullanım Şartları</Link>
                        <Link href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
