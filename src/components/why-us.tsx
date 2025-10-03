import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Wrench, Clock } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Máxima Disponibilidad',
    description: 'Flota siempre lista y en perfectas condiciones para cuando la necesites.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Mantenimiento Riguroso',
    description: 'Equipos revisados y mantenidos por expertos para garantizar tu seguridad.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Soporte Técnico 24/7',
    description: 'Asistencia inmediata en cualquier momento para que no detengas tu proyecto.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Confía en la Experiencia que Garantiza tu Éxito
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            "Máxima disponibilidad, mantenimiento riguroso y soporte técnico 24/7."
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
