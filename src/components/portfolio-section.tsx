import type { PortfolioItem } from '@/lib/types';
import PortfolioCard from '@/components/portfolio-card';
import { cn } from '@/lib/utils';

interface PortfolioSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: PortfolioItem[];
  ctaText: string;
  variant?: 'default' | 'secondary';
}

export default function PortfolioSection({
  id,
  title,
  subtitle,
  description,
  items,
  ctaText,
  variant = 'default',
}: PortfolioSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 sm:py-24',
        variant === 'secondary' ? 'bg-secondary' : 'bg-background'
      )}
    >
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title} - <span className="text-primary">{subtitle}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} ctaText={ctaText} />
          ))}
        </div>
      </div>
    </section>
  );
}
