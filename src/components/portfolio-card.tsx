import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { PortfolioItem } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface PortfolioCardProps {
  item: PortfolioItem;
  ctaText: string;
}

export default function PortfolioCard({ item, ctaText }: PortfolioCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === item.imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/2] w-full">
          {image ? (
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              data-ai-hint={image.imageHint}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary">
              <span className="text-sm text-muted-foreground">No Image</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
        <CardDescription className="mt-2">{item.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
}
