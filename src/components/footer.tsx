import Link from 'next/link';
import { Wrench, Facebook, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { href: '#maquinaria', label: 'Maquinaria' },
  { href: '#accesorios', label: 'Accesorios' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#blog', label: 'Blog' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl">ConstructEquip</span>
            </Link>
            <p className="text-sm text-muted-foreground">Tu socio estratégico en alquiler de equipos de construcción.</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold font-headline mb-4">Navegación</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-headline mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Política de Privacidad</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Términos de Servicio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-headline mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Calle Falsa 123, Springfield</li>
                <li>+1 (555) 123-4567</li>
                <li>contacto@constructequip.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ConstructEquip. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
