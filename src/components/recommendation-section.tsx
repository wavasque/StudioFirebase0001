'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { recommendEquipment, RecommendEquipmentOutput } from '@/ai/flows/recommend-equipment';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, Building2, Wrench, HardHat } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  projectGoals: z
    .string()
    .min(20, 'Por favor, describe los objetivos de tu proyecto con más detalle (mínimo 20 caracteres).'),
  projectConstraints: z
    .string()
    .min(20, 'Por favor, describe las limitaciones de tu proyecto con más detalle (mínimo 20 caracteres).'),
});

type RecommendationCategory = {
  title: string;
  icon: React.ReactNode;
  items: string;
};

export default function RecommendationSection() {
  const [recommendation, setRecommendation] = useState<RecommendEquipmentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectGoals: '',
      projectConstraints: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendation(null);
    try {
      const result = await recommendEquipment(values);
      setRecommendation(result);
    } catch (error) {
      console.error('Error getting recommendation:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudieron obtener las recomendaciones. Por favor, inténtalo de nuevo.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const recommendationCategories: RecommendationCategory[] = recommendation
    ? [
        { title: 'Maquinaria Recomendada', icon: <Building2 className="h-6 w-6 text-primary" />, items: recommendation.equipmentRecommendations },
        { title: 'Accesorios Recomendados', icon: <Wrench className="h-6 w-6 text-primary" />, items: recommendation.accessoryRecommendations },
        { title: 'Servicios Recomendados', icon: <HardHat className="h-6 w-6 text-primary" />, items: recommendation.serviceRecommendations },
      ]
    : [];

  return (
    <section id="recommender" className="py-16 sm:py-24 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¿No sabes qué necesitas? <span className="text-primary">Te ayudamos</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Usa nuestra herramienta con IA para obtener una recomendación de equipos, accesorios y servicios basada en las necesidades de tu proyecto.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                <Sparkles className="h-6 w-6 text-accent" />
                Asistente de Proyectos IA
              </CardTitle>
              <CardDescription>
                Completa los siguientes campos y nuestra IA generará una lista de sugerencias para ti.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="projectGoals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Objetivos del Proyecto</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: Necesito excavar una zanja de 50 metros para cimientos, levantar vigas de acero de hasta 500kg a 10 metros de altura, y compactar el terreno."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="projectConstraints"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Limitaciones y Restricciones</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: El presupuesto es ajustado, el terreno es irregular y con poco espacio de maniobra. El proyecto debe completarse en 3 semanas."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generando Recomendación...
                      </>
                    ) : (
                      'Obtener Recomendación'
                    )}
                  </Button>
                </form>
              </Form>

              {isLoading && (
                <div className="mt-8 text-center">
                  <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                  <p className="mt-2 text-muted-foreground">Analizando tus necesidades...</p>
                </div>
              )}

              {recommendation && (
                <div className="mt-12">
                  <h3 className="text-2xl font-headline font-bold text-center">Resultados de la IA</h3>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recommendationCategories.map((cat) => (
                      <Card key={cat.title} className="bg-secondary">
                        <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                           {cat.icon}
                           <CardTitle className="font-headline">{cat.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground whitespace-pre-line">{cat.items}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
