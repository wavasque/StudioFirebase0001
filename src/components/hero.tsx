import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
        Alquileres de Equipos de Construccion J&J.
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl text-primary-foreground/80">
          Impulsa tus proyectos con equipos de alquiler de alto rendimiento y servicios expertos a tu medida. Calidad, fiabilidad y asesoramiento profesional en un solo lugar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="#maquinaria">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Explora Nuestro Catálogo
            </Button>
          </Link>
          <Link href="#contacto">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Solicita tu Presupuesto Ahora
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
