import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import WhyUs from '@/components/why-us';
import PortfolioSection from '@/components/portfolio-section';
import BlogSection from '@/components/blog-section';
import RecommendationSection from '@/components/recommendation-section';
import ContactSection from '@/components/contact-section';

import { machinery, accessories, services, blogPosts } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyUs />
        <PortfolioSection
          id="maquinaria"
          title="Alquiler de Maquinaria Pesada y Especializada"
          subtitle="Potencia y Fiabilidad Garantizada"
          description="Accede a nuestra flota de maquinaria de última generación para construcción, agricultura e industria. Desde excavadoras hasta equipos de elevación, encuentra la herramienta exacta para ejecutar tu proyecto con la máxima eficiencia y seguridad."
          items={machinery}
          ctaText="Ver Detalles y Precios de Alquiler"
        />
        <PortfolioSection
          id="accesorios"
          title="Accesorios y Herramientas Complementarias"
          subtitle="Máxima Productividad"
          description="Maximiza la versatilidad de tu alquiler. Disponemos de un amplio stock de accesorios específicos y herramientas de alto rendimiento que se adaptan a cualquier necesidad operativa. Enganches rápidos, martillos hidráulicos, cucharones especializados y más."
          items={accessories}
          ctaText="Añadir al Presupuesto"
          variant="secondary"
        />
        <PortfolioSection
          id="servicios"
          title="Servicios Profesionales y Asesoramiento Técnico"
          subtitle="Expertise a tu Disposición"
          description="No solo alquilamos equipos, ofrecemos soluciones. Nuestro equipo de expertos certificados proporciona servicios profesionales integrales: desde mantenimiento preventivo y reparación in-situ hasta asesoría técnica especializada en la planificación de tu obra o proyecto."
          items={services}
          ctaText="Consultar Servicios Profesionales"
        />
        <RecommendationSection />
        <BlogSection posts={blogPosts} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
