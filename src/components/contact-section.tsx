'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido.'),
  email: z.string().email('Email inválido.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
    toast({
      title: 'Mensaje Enviado',
      description: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Listo para Empezar? <span className="text-primary">Contáctanos</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nuestro equipo está listo para asesorarte. Completa el formulario o llámanos directamente. Te ayudaremos a encontrar la solución perfecta para tu proyecto.
            </p>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p><strong>Dirección:</strong> Calle Falsa 123, Springfield</p>
              <p><strong>Teléfono:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> walter_vasquez@msn.com</p>
            </div>
          </div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu Nombre Completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Cuéntanos sobre tu proyecto..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Enviar Mensaje
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
