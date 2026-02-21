import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopGrid from '../components/ShopGrid';
import bannerImg from '../assets/images/banner_regalos.png';

export default function Vista_Coleccion_Obsequios() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-warm-white">
                <section className="relative w-full flex flex-col items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={bannerImg}
                            alt="Regalos y Decoración"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-b from-navy/80 via-navy/60 to-navy/40 z-10" />
                    <div className="absolute inset-0 bg-linear-to-r from-navy/50 to-transparent z-10" />

                    <div className="relative z-20 flex flex-col items-center w-full pt-56 pb-24 text-center px-6">
                        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">Regalos y Decoración</h1>
                        <div className="w-16 h-1 bg-linear-to-r from-gold to-gold-light mx-auto rounded-full mb-8" />
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">Piezas decorativas únicas para regalar.</p>
                    </div>
                </section>

                <section className="py-20 bg-warm-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <ShopGrid activeCategorySlug="regalos" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
