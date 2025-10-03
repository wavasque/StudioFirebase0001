import type { BlogPost } from '@/lib/types';
import BlogCard from '@/components/blog-card';

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-secondary">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Novedades, Consejos y Tendencias del Sector: <span className="text-primary">Blog AlquilereEquiposJJ</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mantente al día con lo último en tecnología de maquinaria, normativas de seguridad y casos de éxito.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
